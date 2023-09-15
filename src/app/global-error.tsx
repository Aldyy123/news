"use client";
import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
  
  let errorMessage = 'An error occurred';
  let errorCode = 500;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-5xl font-semibold text-red-500">{errorCode}</h1>
        <p className="text-2xl text-gray-500 dark:text-gray-100 font-semibold mt-4">{errorMessage}</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Sorry, something went wrong. Please try again later.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block btn-default"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;