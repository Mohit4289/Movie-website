'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Nav = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchToggle = () => {
    setSearchVisible(prevState => !prevState);
  }

  return (
    <div className="nav flex justify-between py-4 px-6">
      <div className="flex justify-center items-center gap-4">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="Logo"
        />
        <h1><Link href="">Home</Link></h1>
        <h1><Link href="">Movies</Link></h1>
        <h1><Link href="">Tv Shows</Link></h1>
        <h1><Link href="">Webseries</Link></h1>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className={`transition-all duration-300 ${searchVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'} overflow-hidden`}>
          {searchVisible && (
            <input
              type="search"
              placeholder="Search your entertainment"
              className="bg-black p-2 text-white rounded-md"
            />
          )}
        </div>
        <Image
          src="/search.png"
          height={40}
          width={40}
          onClick={handleSearchToggle}
          className="bg-white cursor-pointer"
          alt="Search Icon"
        />
        <Image
          src="/bell.jpg"
          height={40}
          width={40}
          alt="Notification Bell"
        />
      </div>
    </div>
  );
}

export default Nav;
