"use server";

import { verifyAuth } from "../lib/verifyAuth";

//suppose user hit get posts or anaytics from dashboard ,

export const getPostsData = async () => {
  try {
    const verify = await verifyAuth();
    if (!verify.success) {
      throw new Error("token expired / invalid ");
    }
    return { success: true, msg: "sucesss fetch posts" };
  } catch (error) {
    return { success: false, msg: "error" };
  }
};
