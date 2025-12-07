import LoginPage from "@/component/login/LoginPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function page() {

    const token = (await cookies()).get("token")?.value;

    if (token) {
        redirect("/dashboard");
    }
    return (

        <div>
            <LoginPage />
        </div>

    )
}
