import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { userLogout } from "../authenticationAction/userLogout";
import Image from "next/image";

export default async function Dashboard() {
  const token = (await cookies()).get("token")?.value;
  if (!token) {
    redirect("/login");
  }

  const res = await fetch("https://reqres.in/api/users/2", {
    headers: {
      "x-api-key": "reqres_f16e4b512a83421b841bfb9f0f825227",
    },
  });
  const data = await res.json();
  const user = data.data;
  console.log(user);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 rounded-lg shadow-2xl p-8 border border-slate-700 text-center">
          <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>

          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src={user.avatar}
                width={128}
                height={128}
                alt="avatar"
                className="rounded-full border-4 border-blue-600 object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-slate-400 text-sm">{user.email}</p>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-700 rounded-lg p-4">
              <p className="text-slate-300 text-xs uppercase tracking-wider font-semibold">
                Status
              </p>
              <p className="text-green-400 font-semibold mt-1">✓ Authenticated</p>
            </div>
          </div>

          <form action={userLogout} className="mt-8">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-200"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
