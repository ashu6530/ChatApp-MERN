import React, { useState } from "react";
import LoginForm from "@/components/ui/Authentiation/Login";
import SignupForm from "@/components/ui/Authentiation/Signup";

const Homepage = () => {
const [activeTab, setActiveTab] = useState('login')

const renderForm = () => {
  if (activeTab === 'login') {
    return <LoginForm />;
  } else if (activeTab === 'signup') {
    return <SignupForm />;
  }
};
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
    <div className="w-full max-w-md p-8 bg-black rounded-lg shadow-lg">
    <h2 className="text-white text-3xl text-center py-4">Welcome to the Chat Zoo 👋</h2>
      <div className="flex mb-4">
        <button
          className={`w-1/2 py-2 ${activeTab === 'login' ? 'text-white border-b-2  border-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button
          className={`w-1/2 py-2 ${activeTab === 'signup' ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('signup')}
        >
          Signup
        </button>
      </div>
      {renderForm()}
    </div>
  </div>
)
}

export default Homepage;
