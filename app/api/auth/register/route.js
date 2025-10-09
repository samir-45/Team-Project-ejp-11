import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    const usersCollection = await dbConnect(collectionNamesObj.usersCollection);

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "User already exists" }),
        { status: 400 }
      );
    }

    // Store password as plain text (⚠️ only for testing/demo)
    const newUser = {
      name,
      email,
      password,
      role: "user",
      createdAt: new Date(),
    };

    await usersCollection.insertOne(newUser);

    return new Response(
      JSON.stringify({ message: "User registered successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return new Response(
      JSON.stringify({ error: "Failed to register user" }),
      { status: 500 }
    );
  }
};
