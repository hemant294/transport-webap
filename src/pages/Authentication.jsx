import React, { useState } from 'react';
import SignupForm from '../components/SignupForm';
import SigninForm from '../components/SigninForm';

const Authentication = () => {
  const [showSignin, setShowSignin] = useState(true);
  
  return (
    <div className="min-h-screen bg-gray-100 rounded-md flex flex-col justify-center py-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          {showSignin ? 'Sign in to your account' : 'Create a new account'}
        </h2>
        <div className="mt-2 text-center">
          <button 
            onClick={() => setShowSignin(!showSignin)}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            {showSignin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {showSignin ? <SigninForm /> : <SignupForm />}
      </div>
    </div>
  );
}

export default Authentication;