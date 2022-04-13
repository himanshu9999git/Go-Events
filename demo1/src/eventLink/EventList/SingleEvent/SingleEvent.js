import React from 'react'
import "./SingleEvent.css"

function SingleEvent(props) {

  console.log(props);

  return (
    <div className='singleComponent'>
        <div className='sefirst'>
        <div>{props.data.Name}</div>
          
        </div>
        <div className='semiddle'>
        <div className='semid1'>{props.data.organisation}</div>
        <div className='semid2'>{props.data.code}</div>
          
        </div>
        <div className='sethird'>
        
          
        <div className='secat'>{props.data.category}</div>
        <button className='reminder'>View more</button>
        </div>


    </div>
  )
}

export default SingleEvent