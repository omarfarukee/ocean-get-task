import RetroLine from "@/component/common/RetroLine";
import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-(--primary)/80 overflow-hidden to-transparent relative">
      <RetroLine/>
      <div className="text-center space-y-8 z-20">
        <div>
          <h1 className="text-[4vw] font-bold mb-2 ">Welcome to
           <span className=""> OCEAN GET </span>Assessment</h1>
          <p className="text-lg">Secure Authentication Demo</p>
        </div>
        <div className="space-y-4">
          <p className="text-slate-400 max-w-md mx-auto">
            This is a Next.js application demonstrating secure authentication with middleware and HttpOnly cookies.
          </p>
          <Link
            href="/login"
            className="w-[10vw] m-auto px-[1vw] py-[1vw] text-[1vw] flex justify-center items-center bg-(--secondary) hover:bg-(--primary) rounded-4xl font-semibold transition duration-200"
          > 
            Get Started <LuMoveRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
