import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>

      <div>Home page</div>
      <div>
        <Link href="/about">about</Link>
        <Link href="/productsss">productsss</Link>
      </div>
    </div>
  )
}

export default Home