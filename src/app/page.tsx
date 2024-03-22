export default function Page() {
  return (
    //basic layout for home page
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/main-hero.svg')] bg-no-repeat bg-cover bg-center">
      <h1 className="text-5xl font-bold text-gray-700">Welcome</h1>
      <h2 className="text-2xl font-semibold text-gray-700">
        Upload your data & get started
      </h2>
    </div>
  );
}
