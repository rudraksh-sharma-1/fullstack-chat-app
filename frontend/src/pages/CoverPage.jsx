import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen bg-cover bg-no-repeat flex items-end pb-40" style={{ backgroundImage: "url('/OsmoLanding.png')" }}>
        <Link to={'/login'}>  
        <button type="submit" className="btn btn-primary ml-20 w-48">
            Get Started
        </button>
        </Link>
    </div>
  );
}

export default Home;
