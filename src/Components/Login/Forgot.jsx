import React, { useState } from 'react';
import { BsExclamationCircle } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Forgot() {
  // State variables for email input and error message
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  // Function to handle the API call
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Perform your API call here
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/passwordReset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // Handle response
      if (response.ok) {
        // Success: Reset email input and clear error message
        setEmail('');
        setError('');
        notifySuccess("Email send successfully");
        setIsLoading(false);
        // Handle success scenario, for example redirect to a success page
      } else {
        // Error: Set error message based on response
        const data = await response.json();
        setError(data.message || 'Something went wrong.');
        notifyError("Send failed");
      }
    } catch (error) {
      console.error('Error:', error);
      // setError('User with given email does not exist.');
      notifyError("User with given email does not exist.")
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-[--main-color] font-family'>
      <div className='lg:max-w-lg md:max-w-lg px-5 lg:py-20 md:py-10 py-10 mx-auto'>
        <div className='border rounded-md lg:p-10 md:p-10 p-5 py-10 text-center bg-white'>
          <div><BsExclamationCircle className='text-6xl mx-auto text-[--three-color]' /></div>
          <div className='text-2xl font-semibold pt-5 pb-2'>Forgot Password</div>
          <div className='text-sm text-gray-500'>Enter your email and we'll send you a link to reset your password.</div>
          <div className='pt-4 pb-5'>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm"><SiGmail /></span>
              </div>
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 ps-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <div className="text-red-500 mt-2 text-xs text-end">{error}</div>}
            <button className=' bg-[--three-color] text-white hover:text-[--three-color] p-2 px-5 hover:bg-white outline outline-[--three-color] rounded-md text-sm text-[--three-color] uppercase mt-5' onClick={handleSubmit}>{isLoading ? "Loading..." : "Submit"}</button>
          </div>
          <div><NavLink to="/register" className="text-sm text-[--three-color] hover:text-black">Back To Login</NavLink></div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
