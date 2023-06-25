import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='body'>
       <div className='NoteKeepcontainer'><h1 className='NoteKeeplogo'> KeepNotes</h1></div>
       <div className='home-container'>
      <div className='box1'>
      <Link to="/mynotes"> <button className='home-button'>MyNotes</button></Link> </div>&nbsp; &nbsp;
  <div className='box2'><Link to="/createnotes">  <button className='home-button'>CreateNotes</button></Link> </div>
    </div>
    </div>
  )
}

export default Navbar
