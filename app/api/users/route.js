import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    const usersCollection = await dbConnect(collectionNamesObj.usersCollection);

    if (email) {
      const user = await usersCollection.findOne({ email });
      if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }, null, 2), { 
          status: 404, 
          headers: { "Content-Type": "application/json" } 
        });
      }
      user._id = user._id.toString();
      return new Response(JSON.stringify(user, null, 2), { 
        status: 200, 
        headers: { "Content-Type": "application/json" } 
      });
    } else {
      const users = await usersCollection.find({}).toArray();
      const formattedUsers = users.map(u => ({ ...u, _id: u._id.toString() }));
      return new Response(JSON.stringify(formattedUsers, null, 2), { 
        status: 200, 
        headers: { "Content-Type": "application/json" } 
      });
    }
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal server error" }, null, 2), { 
      status: 500, 
      headers: { "Content-Type": "application/json" } 
    });
  }
}
