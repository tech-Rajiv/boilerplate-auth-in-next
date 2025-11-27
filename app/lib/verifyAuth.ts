import { cookies } from "next/headers";
import { logoutAction } from "../server-actions/auth/auth";
import { redirect } from "next/navigation";

let count = 0;
const isExpiredToken = async (expiry: number) => {
  //  getting time and returning true false
  // count++;
  return true;
};

const generateNewToken = async () => {
  console.log("in generate new tokenh");
  const refresh_token = (await cookies()).get("refresh-token");
  console.log("refresh_token: ", refresh_token);
  if (!refresh_token) {
    console.log("no refresh so");
    return false;
  }
  console.log("has refresh again");
  //  jwt sign etc
  const newToken = `NEW_TOKEN_${count}`;
  (await cookies()).set("token", newToken);
  return newToken;
};

export const verifyAuth = async () => {
  const token = (await cookies()).get("token");
  console.log("token: from verifyauth", token);
  if (!token) {
    await logoutAction();
    // redirect("/login");
    return { success: false, user: null, token: null };
  }

  //  this is just simulating decode token
  const decodePayload = {
    expiry: 100,
    email: "user@mail",
  };

  console.log("checking is expr");
  if (!(await isExpiredToken(decodePayload?.expiry))) {
    console.log("no exp ");
    return { success: true, user: decodePayload?.email, token };
  }

  console.log("caaling new token");
  const newToken = await generateNewToken();
  if (!newToken) {
    console.log("failed new token");
    await logoutAction();
    redirect("/login");
    return { success: false, user: null, token: null };
  }

  console.log("sucess new token");
  //  we got newtoken so setThat
  return { success: true, user: decodePayload?.email, token: newToken };
};
