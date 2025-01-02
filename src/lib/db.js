import mysql from "mysql2/promise";

// connect to the database
const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  });

const fetchCourses = async () => {
  try {
    const query = "select * from courses"; 
    const [rows] = await connection.execute(query); 
    return rows;
  } catch (error) {
    console.error("Database Error:", error); 
    throw new Error("Failed to fetch data.");
  }
};

const saveContactMessage = async (name, email, message, subject = null) => {
  try {
    const query = `
      INSERT INTO contact_messages (Name, Email, Message, Subject)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await connection.execute(query, [name, email, message, subject]);
    return result;
  } catch (error) {
    console.error("Error saving contact message:", error);
    throw new Error("Failed to save contact message.");
  }
};
export {fetchCourses, saveContactMessage};