import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function MyNotes() {
 const [Input, setInput] = useState(null)

  // 3. Create out useEffect function
  const retrieval=async(req,res)=>{
  await axios.get('http://localhost:7000/display').then((response) => {
      setInput(response.data);
    });
  }
  useEffect(() => {
   retrieval();
  }, []);

console.log(Input)
if(!Input || Input.cursor.length==0) return (<center><h2>No Data Found</h2></center>)
const arr=Input.cursor;
  return (
    <div>
     { 
    arr.map(item=>(
      <div className="notes-pages">
        <h2 className='title'>{item.title}</h2>
        <p className='content'>{item.content}</p>
      </div>
    ))
} 
{/* <div className='notes-pages'>
<h2 className='title'>hello how are you</h2>
<p className='content'>this is my sreejith</p>
</div> */}
    </div>
   )
  
}

export default MyNotes
