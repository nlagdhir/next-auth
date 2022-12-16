import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";

const handler = async (req, res) => {

    if(req.method !== "POST"){
        return ;
    }

  // get data from request
  const { username, email, password } = req.body;

  // validate all field
  if (
    !username ||
    !email ||
    !email.includes("@") || 
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "Invalid input - password must be at least 7 characters",
    });
  }

  // Connect to database select database

  const client = await connectToDatabase();
  const db = client.db("next-auth");

  // check if user is already existing

  const existingUser = await db.collection("users").findOne({ email: email }); 
  if (existingUser) {
    console.log(existingUser);  
    res.status(422).json({
      message: "User already exists",
    });
    client.close();
    return;
  }

  // create user

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    username: username,
    email: email,
    password : hashedPassword,
  });

  // return message and close connection

  res.status(201).json({ message: "User created!" });
  client.close();
};

export default handler;
