import React from 'react'
import { useParams } from 'react-router-dom'
export const UserDetails = () => {
  const params=useParams()
  const userid=params.userId //{userid}=useParams()
  return (
    <div>
      Details of user {userid}
    </div>
  )
}

