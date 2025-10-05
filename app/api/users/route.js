import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const GET = async () => {
  try {
    // Connect to DB
    const usersCollection = await dbConnect(collectionNamesObj.usersCollection);

    // Fetch all users
    const users = await usersCollection.find({}).toArray();

    // Return as JSON
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch users" }), {
      status: 500,
    });
  }
};
