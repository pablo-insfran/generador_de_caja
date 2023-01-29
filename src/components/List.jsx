import React from 'react'

const List = (props) => {

    const {list}  = props

  return (
    <div>
        {list.map((colores)=>
        <div>
            <h1>{colores.name}</h1>
        </div>
        )}
    </div>
  )
}

export default List