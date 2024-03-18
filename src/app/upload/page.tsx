import Upload from "../ui/upload/upload";

export default function Page() {
  return (
    <div className="w-full min-h-screen pt-4 pb-4 bg-[url('/upload-bg.svg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <Upload />
    </div>
  );
}
