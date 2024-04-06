"use client";

import { excelToJSON, isValidData } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import LoadingAnim from "../ui/loading";
import { addKishanData } from "@/lib/actions";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleFileUpload = () => {
    if (file) {
      setLoading(true);
      excelToJSON(file)
        .then((jsonData) => {
          const intialLength = jsonData.length;
          const plainObject = JSON.parse(JSON.stringify(jsonData));
          const validData = plainObject.filter(isValidData); // Filter out invalid data
          const finalLength = validData.length;
          addKishanData(validData)
            .then(() => {
              setLoading(false);
              setFile(null);
              setFileName("");
              alert(
                `Uploaded ${finalLength} out of ${intialLength} records successfully. ${
                  intialLength - finalLength
                } records were invalid and were not uploaded.`
              );
            })
            .catch(() => {
              setLoading(false);
              alert("Error: 501 | Failed to upload data");
            });
        })
        .catch(() => {
          setLoading(false);
          alert("Conversion to JSON failed. Please try again.");
        });
    } else {
      alert("Please select a file to upload");
    }
  };
  return (
    <div className="flex justify-center items-center pt-6">
      <div className="backdrop-blur-md ml-10 mr-10 rounded-xl bg-opacity-30 bg-white min-w-[350px] md:min-w-[450px] h-96 flex flex-col justify-center items-center">
        <div
          className="pt-10 flex flex-col justify-center items-center"
          style={{ position: "relative" }}
        >
          <div className="pb-5">
            <label
              htmlFor="file-input"
              className="hover:cursor-pointer hover:brightness-150"
            >
              <Image
                src={file === null ? "/upload-icon.svg" : "/excel-icon.svg"}
                alt="upload"
                height={100}
                width={100}
              />
              <div>{fileName}</div>
              <input
                type="file"
                id="file-input"
                accept=".xlsx, .xls"
                onChange={handleFileChange}
                hidden
              />
            </label>
          </div>
          <div className="mb-5">
            <p className=" text-lg">Click on the icon to choose a file</p>
          </div>
          {loading && <LoadingAnim />}
        </div>
        {!loading && (
          <button
            className="p-3 bg-red-600 rounded-md text-white font-bold w-1/2 mt-4 hover:bg-red-700 transition duration-300 ease-in-out"
            onClick={handleFileUpload}
          >
            Upload
          </button>
        )}
        {loading && (
          <button className="p-3 bg-red-600 rounded-md text-white font-bold w-1/2 mt-4">
            Uploading...
          </button>
        )}
      </div>
    </div>
  );
}
