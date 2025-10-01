import React, {useEffect, useState} from 'react'
import './style.scss'
import axios from 'axios'

export default function Home() {
 const [phone_number,setPhone] = useState()
 const [second_name,setSecondName] = useState()
 const [age,setAge] = useState()
 const [first_name,setFirstName] = useState()


 useEffect(()=> {
  getUsers()
 },[])

 const submit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:5000/api/todb',{first_name,second_name,age,phone_number}).then((data) =>{
      console.log(data)
    }).catch((error)=> {
      console.log(error)
    })
 }

 const getUsers = () => {
  axios.get('http://localhost:5000/api/user').then((data)=> {
    console.log(data)
  }).catch((error)=> {
    console.log(error)
  })
 }
  return (
    <div className='home'>
      <form onSubmit={submit}>
        <input 
        value={phone_number}
        onChange={e => setPhone(e.target.value)}
        placeholder='phone'/>
        <input 
        value={second_name}
        onChange={e => setSecondName(e.target.value)}
        placeholder='secondname'/>
        <input 
        value={first_name}
        onChange={e => setFirstName(e.target.value)}
        placeholder='first name'/>
        <input 
        value={age}
        onChange={e => setAge(e.target.value)}
        placeholder='age'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
