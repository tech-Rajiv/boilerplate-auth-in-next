"use client";
import React, { useState } from "react";

import { loginAction } from "../server-actions/auth/auth";
import { useRouter } from "next/navigation";

function page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const onChangeFn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginAction(formData.email, formData.password);
      if (!res.sucess) {
        throw new Error(res.msg);
      }
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="p-4" onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <div>
          <input
            type="text"
            name="email"
            className="border p-2 rounded"
            placeholder="email"
            onChange={(e) => onChangeFn(e)}
            value={formData?.email}
          />
        </div>
        <div className="mt-2">
          <input
            type="password"
            name="password"
            className="border p-2 rounded"
            placeholder="password"
            onChange={(e) => onChangeFn(e)}
            value={formData?.password}
          />
        </div>
        <div className="mt-2">
          <button type="submit" className="border p-2 rounded cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default page;
