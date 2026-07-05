import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from "../assets/logo2.png";

function Logo() {
  return (
    <Link
      to={"/"}
      className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl shrink-0"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 border border-primary/20 shadow-xl shadow-primary/10 dark:bg-primary/25 dark:border-primary/30 dark:shadow-primary/25">
        <img
          src={logo2}
          alt="Logo"
          className="h-10 w-10 object-contain"
        />
      </div>
      <h1
        className="text-primary text-4xl font-extrabold tracking-wide"
        style={{ fontFamily: "var(--font-brand)" }}
      >
        Finan
      </h1>
    </Link>
  )
}

export default Logo