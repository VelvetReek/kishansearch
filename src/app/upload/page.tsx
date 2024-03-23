import Upload from "@/components/upload/upload";

export default function Page() {
  return (
    <div className="w-full min-h-screen pt-4 pb-4 bg-[url('/upload-bg.svg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="backdrop-brightness-75 flex items-center justify-center pt-6 pb-6">
        <div className="bg-sky-400 w-1/2 rounded-lg bg-opacity-30 pt-3 pb-3">
          <h1 className="text-4xl font-bold text-center text-white">
            Upload your files
          </h1>
          <p className="text-center text-white">
            Heading of excel file must be in the following order:
            <br />
            <span className="text-yellow-400">
              Date, Card No., Circle, Village, Name, Through, Variety, Quantity,
            </span>
          </p>
        </div>
      </div>
      <Upload />
    </div>
  );
}
