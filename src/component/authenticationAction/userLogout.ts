/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function userLogout(_formData: FormData): Promise<void> {
  (await cookies()).delete("token");
  redirect("/login");
}
