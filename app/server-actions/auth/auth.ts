"use server";
import { REFRESH_TOKEN, STATIC_TOKEN } from "@/app/utils";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signupAction = async (formData: FormData) => {
  // db logic
  console.log("signupAction", formData);
  return { msg: "okkk" };
};

export const loginAction = async (email: string, password: string) => {
  // db logic
  console.log("loginAction", email, password);

  //  generate jwt
  (await cookies()).set("token", STATIC_TOKEN, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 30, // 30 minutes
  });
  (await cookies()).set("refresh-token", REFRESH_TOKEN, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 60 * 10, //20days
  });

  return { sucess: "true", msg: "logged in successfull" };
};

export const logoutAction = async () => {
  (await cookies()).delete("token");
  (await cookies()).delete("refresh-token");
  return { success: true };
};
