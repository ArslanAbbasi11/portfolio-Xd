import React from 'react'

const Content=(props)=> {
    return (
     <>
          {
          props.imgArr.map((value)=>(
                     <figure key={value}>
                        
                     <img src={value}/>
                     </figure>
          ))

          }</>
    )
}

export default Content
