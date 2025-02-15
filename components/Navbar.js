"use client"
import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Button text='Sign Out' onClick={()=>signOut()} />
      </>
    )
  }

  return (
    <nav className='bg-[#0b042b] text-white flex justify-between
px-4 h-16 items-center    '>
      <div className="logo font-bold flex items-center justify-center">
        <Image src='/hive.png' alt='logo' width={50} height={50} />
        <span>SupportHive</span>
      </div>
      {/* <ul className='flex justify-center gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Signup</li>
      </ul> */}

      <div>
        <Link href={'/login'}>
          <Button text='Login' onClick={() => console.log('Hello, Support Hive!')} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar