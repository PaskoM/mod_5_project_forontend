import React from 'react'

const UserItems = ({name, id, removeItem}) => {
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => { removeItem(id) }}>Delete</button> 
      </div>
      )}

export default UserItems