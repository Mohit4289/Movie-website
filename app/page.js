'use client'
import React from 'react'
import Nav from './Components/Nav.jsx'
import Main from './Components/Main.jsx'
import More from './Components/More.jsx'
import Footer  from './Components/Footer.jsx'

export default function Home() {
  return (
    <div>
      <Nav />
      <h1 className="mt-10 text-center text-4xl font-bold">Discover Unlimted Content</h1>
      <Main />
      <More/>
      <Footer />
    </div>
  );
}
