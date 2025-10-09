import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const GET = async () => {
  try {
    // Connect to DB
    const servicesCollection = await dbConnect(
      collectionNamesObj.servicesCollection
    );

    // Fetch all users
    const services = await servicesCollection.find({}).toArray();

    // Return as JSON
    return new Response(JSON.stringify(services), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch services" }), {
      status: 500,
    });
  }
};
