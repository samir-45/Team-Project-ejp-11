import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const GET = async () => {
  try {
    // Connect to DB (get database instance)
    const db = await dbConnect();

    // Get collection
    const reviewsCollection = db.collection(collectionNamesObj.reviewsCollection);

    // Fetch all reviews
    const reviews = await reviewsCollection.find({}).toArray();

    // Return as JSON
    return new Response(JSON.stringify(reviews), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch reviews" }), {
      status: 500,
    });
  }
};
