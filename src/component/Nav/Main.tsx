import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/extra">Extra</Link>
          </li>
          <li>
          <Link href="/extra/dox">Dox</Link>
        </li>
     </ul>
    </nav>
  )
}

export default Main