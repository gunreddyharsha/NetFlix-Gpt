import React from 'react'

const ErrorPage = () => {
  return (
    <div>
      <div className="bg-black flex justify-center items-center">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          alt="not-found"
          className="w-[300px]"
        />
      </div>
      <h1 className="text-4xl font-bold">Something Went Wrong</h1>
      <p className="py-4 w-1/4 font-normal">Please try after some time </p>
    </div>
  );
}

export default ErrorPage
