import React, { useEffect } from 'react'
import axios from 'axios'
const Chatpage = ()=> {
  const fetchData = async  ()=>{
    const responce = await axios.get('http://localhost:3000/chats')
    console.log(responce.data);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>Chatpage</div>
  )
}

export default Chatpage