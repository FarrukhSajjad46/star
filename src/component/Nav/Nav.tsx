import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav>
       <ul>
         <li>
             <Link href="/">Home</Link>
           </li>
           <li>
             <Link href="/name">Name</Link>
           </li>
           <li>
           <Link href="/name/address">Address</Link>
           </li>
           <li>
           <Link href="/name/address/about">About</Link>
         </li>
        </ul>
    </nav>
  )
}

export default Nav