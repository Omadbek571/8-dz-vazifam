import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div>
      {/* <header className="bg-gray-800 p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            <Link to="/">LOGO</Link>
          </div>
          <div>
            <Link
              to="/"
              className="text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="text-white px-4 py-2 ml-4 rounded-md hover:bg-gray-700 transition"
            >
              Login
            </Link>
            <Link
              to="/home"
              className="text-white px-4 py-2 ml-4 rounded-md hover:bg-gray-700 transition"
            >
              Home
            </Link>
          </div>
        </nav>
      </header> */}

      <main className="container mx-auto p-4 border-4 border-black rounded-xl mt-4 bg-slate-500">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<Home></Home>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
