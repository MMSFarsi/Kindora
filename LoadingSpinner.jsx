import React from 'react'
import logo from '/logo.png';

const LoadingSpinner = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
    <div className="flex items-center space-x-2">
      <div className="w-6 h-6 border-3 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      <span to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Kindora Logo" className="h-6 lg:h-8" />
          <span className="text-sm lg:text-xl"><span className="text-green-600">K</span>indora</span>
        </span>
    </div>
  </div>
  )
}

export default LoadingSpinner