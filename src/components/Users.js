import React from 'react'
import { Link,Outlet ,useSearchParams} from 'react-router-dom'
const Users = () => {
  const[searchParams,setSearchParams]=useSearchParams()
  const showActiveUsers=searchParams.get('filter')==='active'
  return (
    <div>
      <nav>
        <Link to='1'>User1</Link>
        <Link to='2'>User2</Link>
        <Link to='3'>User3</Link>
        <Link to='admin'>Admin</Link>
        <Outlet/>
      </nav>
      <div>
        <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
        <button onClick={()=>setSearchParams({})}>Reset Filter</button>
      </div>
      {
        showActiveUsers?(<h2>Showing active users</h2>):(<h2>Showing All users</h2>)
      }
    </div>
  )
}

export default Users
