import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Card from "./components/Card";

const App = () => {
  const [user, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  // Function to remove a user by index
  const handleDelete = (indexToDelete) => {
    setData((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased pt-24 pb-12 px-4">
      <Navbar toggle={toggle} setToggle={setToggle} />

      <main className="max-w-7xl mx-auto">
        {toggle ? (
          user.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.map((elem, index) => (
                <Card
                  user={elem}
                  key={index}
                  index={index}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800 max-w-md mx-auto">
              <p className="text-slate-400 mb-4">No users found.</p>
              <button
                onClick={() => setToggle(false)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Create User
              </button>
            </div>
          )
        ) : (
          <Form setData={setData} user={user} setToggle={setToggle} />
        )}
      </main>
    </div>
  );
};

export default App;
