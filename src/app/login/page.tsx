import LoginForm from "@/components/login/loginForm";
import Image from "next/image";
import { auth } from "~/src/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (session) {
    redirect("/");
    return null;
  }
  const image_style: React.CSSProperties = {
    width: "50%",
    position: "relative",
  };
  return (
    <main className="bg-slate-200 max-md:bg-[url('/login_img.jpg')] max-md:bg-no-repeat max-md:bg-cover max-md:bg-center max-md:bg-fixed max-md:min-h-[75vh]">
      <div className="flex w-screen justify-between items-center">
        <div className="md:w-1/2 w-screen max-md:mt-10 max-md:ml-1 max-md:mr-1">
          <LoginForm />
        </div>
        <div
          style={image_style}
          className="max-[768px]:hidden border-slate-400 min-h-[75vh]"
        >
          <Image
            className="border-l-4 border-black"
            src="/login_img.jpg"
            alt="Login-themed image"
            fill
          />
        </div>
      </div>
    </main>
  );
}
