import LoginForm from "@/components/login/loginForm";
import Image from "next/image";

export default function Page() {
  const image_style: React.CSSProperties = {
    width: "50%",
    height: "75vh",
    position: "relative",
  };
  return (
    <main className="bg-slate-200">
      <div className="flex w-screen justify-between items-center">
        <div className="w-1/2">
          <LoginForm />
        </div>
        <div style={image_style} className="border-slate-400">
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
