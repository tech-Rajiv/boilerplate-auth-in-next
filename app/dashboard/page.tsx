"use client";
import React from "react";
import { getPostsData } from "../server-actions/dashboard";

function page() {
  const handlePosts = async () => {
    const data = await getPostsData();
    console.log("data: ", data);
  };
  return (
    <div>
      <h2>Dshboard area only loged in access</h2>
      <button onClick={handlePosts}>getPosts</button>
    </div>
  );
}

export default page;
