import React, { useEffect, useState } from "react";

import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosInstance";
const UserPage = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let getUsersData = async () => {
    try {
      let res = await axiosInstance("/users");
      console.log(res);
      setUsersData(res.data);
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // if (isLoading) return <h1 className="text-4xl">Loding Users</h1>;

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {usersData.map((val) => (
        <UserCard key={val.id} user={val} />
      ))}
    </div>
  );
};

export default UserPage;
