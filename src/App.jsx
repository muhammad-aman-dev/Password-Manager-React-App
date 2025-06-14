import React from 'react'
import './App.css'
import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify';
import hide from './assets/hide.svg'
import show from './assets/show.svg'
import remove from './assets/remove.svg'
import copy from './assets/copy.svg'
import { data } from 'react-router-dom';


const App = () => {
  const [type, settype] = useState("password")
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [alldata, setalldata] = useState([])
  const [url, seturl] = useState('')
  const deleted = () => toast("Password Deleted!");
  const copied = () => toast("Text Copied!");
  const added = () => toast("Password Added!");

  function handleshow(e){
  if(type=="text"){
    settype("password")
    e.target.src=show;
  } 
  else{
    settype("text")
    e.target.src=hide;
  }
  }
  function changeUsername(e){
   setusername(e.target.value);
  }
  function changePassword(e){
    setpassword(e.target.value);
  }
  function changeURL(e){
    seturl(e.target.value);
  }
 async function handlesubmit(){
   if(username!=''&&password!=''&&url!=''){
   setusername('')
   setpassword('')
   seturl('')
  let newEntry= {
    id: uuidv4(),
    name:username,
    pass:password,
    web:url
   };
   if(localStorage.getItem("data")){
    let storeddata=JSON.parse(localStorage.getItem("data"));
    let newdata=[...storeddata,newEntry];
    localStorage.setItem("data",JSON.stringify(newdata));
    setalldata(newdata);
   }
   else{
    localStorage.setItem("data",JSON.stringify([newEntry]));
    setalldata([newEntry]);
   }
   added();
   }
   else{
    console.log("Inputs are Blanked")
   }
   
 }
 useEffect(() => {
  if(localStorage.getItem("data")){
   let data = JSON.parse(localStorage.getItem("data"));
   setalldata(data)
  }

 }, [])
 
 function handleCopy(text){
  navigator.clipboard.writeText(text); 
  copied();
 }

 function handleRemove(id){
  let newdata=alldata.filter(data=>{
    if(data.id!=id){
      return data;
    }
  }) 
  setalldata(newdata);
  localStorage.setItem("data",JSON.stringify(newdata));
  deleted();
 }

  return (
     <div >
        <div className='flex justify-center gap-1 w-full'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold  mt-4'>Passwords</h1>
        <h1 className='text-[rgba(120,119,198,0.8)] font-bold text-2xl md:text-3xl lg:text-4xl  mt-4'>Manager</h1>
        </div>
        <div className="inputs mt-5 w-3/4 m-auto p-3 flex flex-col gap-3">
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 '>
          <input type="text" name="username" onChange={(e)=>{changeUsername(e)}} value={username} id="username " placeholder='Username' className='border-2 border-[#7877c6]  px-2 rounded-2xl text-[#7877c6]' />
          <div className='relative'>
          <input type={type} name="password" onChange={(e)=>{changePassword(e)}} value={password} id="password " placeholder='Password' className='border-2  px-2 border-[#7877c6] rounded-2xl text-[#7877c6] w-full' />
          <img src={show} alt="" className='cursor-pointer absolute top-[2px] right-2'onClick={(e)=>{handleshow(e)}}/>
          </div>
        </div>
        <input type="text" name="URL" onChange={(e)=>{changeURL(e)}} value={url} placeholder='Website URL' id="WebURL" className='border-2  px-2 border-[#7877c6] rounded-2xl text-[#7877c6] w-full '/>
        <button onClick={()=>{handlesubmit()}} className='cursor-pointer bg-[rgba(120,119,198,0.8)] p-2 rounded-4xl w-[100px] h-[34px] m-auto relative text-black text-center flex justify-center items-center'>Add</button>
        </div>
        <div className='flex justify-center gap-1'>
        <h1 className='text-xl md:text-2xl lg:text-3xl  mt-4'>Saved</h1>
        <h1 className='text-[rgba(120,119,198,0.8)] text-xl md:text-2xl lg:text-3xl  mt-4'>Passwords</h1>
        </div> 
        <div className="datatable mt-3 w-11/12 mx-auto overflow-auto">
        <table className="table-auto w-full border border-gray-300">
  <thead>
    <tr className="font-bold text-xl md:text-2xl text-[rgba(120,119,198,0.8)] text-center">
      <th className="border border-gray-300 px-4 py-2">Username</th>
      <th className="border border-gray-300 px-4 py-2">Password</th>
      <th className="border border-gray-300 px-4 py-2">Web URL</th>
      <th className="border border-gray-300 px-4 py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    {alldata.length > 0 ? alldata.map((info, index) => (
      <tr key={index} className="text-center font-semibold">
        <td className="border border-gray-300 px-4 py-2">
          <div className="flex gap-3 justify-center items-center">
            <div>{info.name}</div>
            <img onClick={() => handleCopy(info.name)} className="cursor-pointer w-5 h-5" src={copy} alt="copy" />
          </div>
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <div className="flex gap-3 justify-center items-center">
            <div>{info.pass}</div>
            <img onClick={() => handleCopy(info.pass)} className="cursor-pointer w-5 h-5" src={copy} alt="copy" />
          </div>
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <div className="flex gap-3 justify-center items-center">
            <div>{info.web}</div>
            <img onClick={() => handleCopy(info.web)} className="cursor-pointer w-5 h-5" src={copy} alt="copy" />
          </div>
        </td>
        <td className="border border-gray-300 px-4 py-2 flex justify-center"><img src={remove} onClick={()=>{handleRemove(info.id)}} alt="remove" className='cursor-pointer' /></td>
      </tr>
    )) : (
      <tr>
        <td colSpan="4" className="text-center py-4 font-bold text-xl">No Data Found</td>
      </tr>
    )}
  </tbody>
</table>
</div>

  </div>
  )
}

export default App

