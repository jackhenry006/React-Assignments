import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Card from "./components/Card";

const App = () => {
  const [user, setData] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  const [toggle, setToggle] = useState(false);
  const [update, setUpdate] = useState();

  const deleteUser = (id) => {
    let filterUser = user.filter((val, index) => {
      return index != id;
    });
    console.log(filterUser);
    setData(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
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
                  setUpdate={setUpdate}
                  setToggle={setToggle}
                  deleteUser={deleteUser}
                  user={elem}
                  key={index}
                  index={index}
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
          <Form
            setData={setData}
            user={user}
            setToggle={setToggle}
            setUpdate={setUpdate}
            update={update}
          />
        )}
      </main>
    </div>
  );
};

export default App;
