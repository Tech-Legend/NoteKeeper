import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './style.css'

function CreateNotes() {
const[input,setinput]=useState({
    title:"",
    content:""
})
    return (
    <div className='form-container '>
      <form>
       <label>Enter Title:   </label> <input type='text' name="title" placeholder='Enter title' autoComplete="off" className='textfield-style' value={input.title} onChange={handlechange}></input> <br /> <br />
      
       <label>Enter Content: </label> <input type='text' name="content" placeholder='Enter content' value={input.content} onChange={handlechange} className='textfield-style'></input> <br /> <br />

        {/* <input type="submit" value="submit" ></input> */}
      <button onClick={handleclick} className='submit-button'>Submit</button>
      </form>
    </div>
  )
 
  function handlechange(event)
  {
const {name,value}=event.target;
setinput(previnput=>{
 return{
  ...previnput,
  [name]:value
 }

})
  }
  function handleclick(event){
    event.preventDefault();
    console.log(input)
    const newNote={
      title:input.title,
      content:input.content
    }
    axios.post('http://localhost:7000/submit',newNote);
   
  }
  
}


export default CreateNotes
