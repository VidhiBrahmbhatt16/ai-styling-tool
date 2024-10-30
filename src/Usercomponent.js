// src/UserComponent.js
// src/UserComponent.js
import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig'; // Correct import for Firestore instance
import { collection, addDoc, getDocs } from "firebase/firestore"; // Import Firestore functions

const UserComponent = () => {
  const [users, setUsers] = useState([]); // State to hold user data

  // Function to add a new user to Firestore
  const addUser = async () => {
    try {
      const user = { name: "John Doe", age: 30 }; // Example user data
      const docRef = await addDoc(collection(db, "users"), user); // Add document to "users" collection
      console.log("User added with ID: ", docRef.id);
      fetchUsers(); // Refresh the list after adding a user
    } catch (e) {
      console.error("Error adding user: ", e);
    }
  };

  // Function to fetch users from Firestore
  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users")); // Get documents from "users" collection
      const usersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Format data
      setUsers(usersList); // Update state with fetched users
    } catch (e) {
      console.error("Error fetching users: ", e);
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
