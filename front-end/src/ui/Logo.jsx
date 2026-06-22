import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from "../assets/logo2.png";

function Logo() {
  return (
    <Link to={"/"} className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 border border-primary/20 shadow-xl shadow-primary/10 dark:bg-primary/25 dark:border-primary/30 dark:shadow-primary/25">
        <img src={logo2} alt="Logo" className="h-8 w-auto" />
      </div>
      <h1
        className="text-primary text-3xl font-extrabold tracking-tight"
        style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}
      >
        Finan
      </h1>
    </Link>
  )
}

export default Logo