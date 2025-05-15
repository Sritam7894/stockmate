import React from "react";
import { useState,useEffect } from "react";

export default function ProfileScreen() {

  const [currUser, setCurrUser] = useState({});
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      setCurrUser(user);
    }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">User Profile</h1>
        <div className="space-y-4">
          <div>
            <span className="block text-sm text-gray-600">Name:</span>
            <span className="text-lg text-gray-900">{currUser.name}</span>
          </div>
          <div>
            <span className="block text-sm text-gray-600">Email:</span>
            <span className="text-lg text-gray-900">{currUser.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
