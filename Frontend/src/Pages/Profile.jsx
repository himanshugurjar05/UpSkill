import React, { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (!user) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <img
        src={user.profilePicture || user.picture || user.imageUrl}
        alt={user.name || "Profile"}
        className="w-40 h-40 mx-auto rounded-full border-2 border-indigo-500 object-cover"
      />
      <h2 className="text-center text-2xl font-bold mt-4">{user.name || "No Name"}</h2>
      <p className="text-center text-gray-600">{user.email || "No Email"}</p>
    </div>
  );
}
