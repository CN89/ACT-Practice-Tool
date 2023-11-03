import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="grid p-4 border-b border-gray bg-primary">
            <nav className="flex justify-center space-x-10 items-center">
                <div>
                    <a href="/" className="btn btn-ghost text-text font-semibold">Home</a>
                    <a href="/test" className=" btn btn-ghost text-text font-semibold">Testing</a>
                    <a href="/about" className="btn btn-ghost text-text font-semibold">About</a>
                </div>
            </nav>
        </div>

    )
}


export default Navbar
