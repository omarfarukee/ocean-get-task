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

  return (
    <div className="min-h-screen bg-linear-to-br from-(--primary)/40 to-(--secondary)/20 flex items-center justify-center p-[1vw]">
      <div className="w-full max-w-[30vw] bg-[rgba(0,0,0,0.5)] backdrop-blur-[0.3vw] rounded-[2vw] shadow-[0_0_1.5vw_rgba(0,0,0,0.5)] border border-(--primary) p-[2vw]">
        <h1 className="text-[2.5vw] font-bold text-white mb-[1.5vw] text-center tracking-wide">
          Dashboard
        </h1>

        {/* User info */}
        <div className="mb-[1.5vw] flex flex-col items-center">
          <div className="relative w-[8vw] h-[8vw] mb-[1vw]">
            <Image
              src={user.avatar}
              width={128}
              height={128}
              alt="avatar"
              className="rounded-full border-[0.4vw] border-(--primary) object-cover shadow-[0_0_0.5vw_rgba(0,0,0,0.5)]"
            />
          </div>
          <h2 className="text-[1.5vw] font-bold text-white mb-[0.3vw]">
            {user.first_name} {user.last_name}
          </h2>
          <p className="text-[0.9vw] text-slate-200">{user.email}</p>
        </div>

        {/* Status Card */}
        <div className="mb-[1.5vw] bg-[rgba(255,255,255,0.05)] border border-(--primary) rounded-[1vw] p-[1vw] text-center">
          <p className="text-[0.7vw] text-(--primary) uppercase tracking-wider font-semibold">
            Status
          </p>
          <p className="text-[0.9vw] text-green-400 font-bold mt-[0.3vw]">
            ✓ Authenticated
          </p>
        </div>

        {/* Sign out */}
        <form action={userLogout} className="mt-[1vw]">
          <button
            type="submit"
            className="w-full py-[0.8vw] px-[2vw] bg-(--secondary) hover:bg-(--primary) cursor-pointer font-semibold rounded-[1vw] transition duration-300 text-[0.9vw]"
          >
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}
