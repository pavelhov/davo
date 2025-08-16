"use client";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="inline-block">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-white animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-4 h-4 bg-white animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-4 h-4 bg-white animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
        </div>
        <p className="mt-4 text-white uppercase tracking-wider">Loading...</p>
      </div>
    </div>
  );
}