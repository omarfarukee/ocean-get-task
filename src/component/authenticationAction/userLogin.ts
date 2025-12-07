// "use server";

// import { cookies } from "next/headers";

// export async function userLogin(formData: FormData) {
//     const email = formData.get("email");
//     const password = formData.get("password");

//     // Call mock API
//     const res = await fetch("https://reqres.in/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//     });

//     if (!res.ok) return { error: "Invalid email or password" };

//     const data = await res.json();

//     // Store token in HttpOnly cookie
//     (await
//         // Store token in HttpOnly cookie
//         cookies()).set("token", data.token, {
//             httpOnly: true,
//             secure: true,
//             path: "/",
//             maxAge: 60 * 60, // 1 hour
//         });

//     return { success: true };
// }

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function userLogin(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres_d84ef69c7b574786a937d121a7998b1a",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    return { error: "Invalid email or password" };
  }

  const data = await response.json();

  (await cookies()).set("token", data.token, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 3600,
  });

  redirect("/dashboard");
}
