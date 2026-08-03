import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    if (count === 0) {
      setCount(1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex items-center gap-6">
        <h1 className="text-2xl font-bold text-gray-800">
          ❤️ Likes: <span className="text-red-500">{count}</span>
        </h1>

        <button
          onClick={handleLike}
          className={`text-5xl transition-all duration-300 hover:scale-125 active:scale-90 ${
            count ? "text-red-500" : "text-gray-400"
          }`}
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default App;
