import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Products = () => {
  return (
    <>
    <div>
      <input type="search" placeholder='Search products'/>
    </div>
    <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>NEW</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Products
