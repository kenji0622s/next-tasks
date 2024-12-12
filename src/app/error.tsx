'use client'

import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50 text-gray-900">
      <h1 className="text-8xl font-bold">Error</h1>
      <p className="text-4xl font-medium">Something went wrong</p>
      <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">Go Back home</Link>
    </div>
  );
};
export default ErrorPage;
