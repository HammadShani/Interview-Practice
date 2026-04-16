import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <div className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-2xl">

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🚀 Frontend Interview Prep App
        </h1>

        <p className="text-gray-600 mb-6">
          Is app mein tumhein HTML, CSS, JavaScript aur React ke complete interview questions milenge Roman Urdu explanation ke sath.
        </p>

        <div className="grid grid-cols-2 gap-4 text-white">

          <div className="bg-green-500 p-4 rounded-xl shadow">
            <h2 className="font-bold">🧱 HTML</h2>
            <p className="text-sm">Structure & Basics</p>
          </div>

          <div className="bg-purple-500 p-4 rounded-xl shadow">
            <h2 className="font-bold">🎨 CSS</h2>
            <p className="text-sm">Design & Layout</p>
          </div>

          <div className="bg-yellow-500 p-4 rounded-xl shadow">
            <h2 className="font-bold">🟨 JavaScript</h2>
            <p className="text-sm">Logic & Functions</p>
          </div>

          <div className="bg-blue-500 p-4 rounded-xl shadow">
            <h2 className="font-bold">⚛️ React</h2>
            <p className="text-sm">Components & Hooks</p>
          </div>

        </div>

        <p className="mt-6 text-gray-500 text-sm">
          💡 Built for Interview Preparation (Beginner Friendly)
        </p>

      </div>
    </div>
  );
};

export default Home;