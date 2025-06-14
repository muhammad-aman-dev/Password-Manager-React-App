import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useState,useEffect,useRef } from 'react'
import light from '../assets/light.svg'
import dark from '../assets/dark.svg'
import { ToastContainer } from 'react-toastify'

const Header = () => {
const [theme, settheme] = useState(true)
const [colors, setcolors] = useState({})
const [modesvg, setmodesvg] = useState(light)
const [imgStyle, setImgStyle] = useState();
const mode = useRef()

const themechange=()=>{
 settheme(!theme)
 if(modesvg==light){
   setmodesvg(dark)
   setImgStyle({ top: '5px', left: '68px', position: 'absolute' });
}
else{
  setmodesvg(light)
  setImgStyle({ top: '5px', left: '6px', position: 'absolute' });
 }
}

useEffect(() => {
  setImgStyle({ top: '5px', left: '6px', position: 'absolute' });
}, [])


useEffect(() => {
  if(theme){
    setcolors({bg:"bg-neutral-900",color:"text-amber-50 "})
  }
  else{
    setcolors({bg:"bg-white",color:"text-gray-800"})
  }
}, [theme])

function toasttheme(){
  if(theme){
    return "dark"
  }
  else{
    return "light"
  }
}

  return (
    <>
     <div className={`transition-colors duration-300 fixed inset-0 z-[-2] min-h-screen w-full ${colors.bg} bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}></div>
    <header className='flex flex-col'>
    <nav className=' flex text-gray-400 justify-between py-4 px-8'>
     <div className='lg:text-4xl md:text-3xl'>
        <span className={(theme)?" font-bold":"text-gray-800 font-bold"}>&lt;Safe</span><span className='font-bold text-[rgba(120,119,198,0.8)]'>Port/&gt;</span>
        </div>
      <ul className=' flex list-none gap-4'>
        <NavLink to="/" className={({isActive})=>`transition-all duration-300  ${isActive?"text-[rgba(120,119,198,0.8)] font-bold":"text-gray-400"}`}><li>Home</li></NavLink>
        <NavLink to="/about" className={({isActive})=>`transition-all duration-300  ${isActive?"text-[rgba(120,119,198,0.8)] font-bold":"text-gray-400"}`}><li>About</li></NavLink>
        <NavLink to="/contact" className={({isActive})=>`transition-all duration-300  ${isActive?"text-[rgba(120,119,198,0.8)] font-bold":"text-gray-400"}`}><li>Contact Me</li></NavLink>
      </ul>
    </nav>
    <button onClick={themechange} className='cursor-pointer bg-[rgba(120,119,198,0.8)] p-2 rounded-4xl w-[100px] h-[34px] m-auto relative'><img ref={mode} src={modesvg} alt="ThemePhoto" style={imgStyle} className="transition-all duration-1000"/></button>
    </header> 
    <main className={`${colors.color} transition-colors duration-300`}>
    <Outlet/>
    </main>
    <ToastContainer theme={toasttheme()} position="bottom-left" className="toast" autoClose={3000} />
    </>
  )
}

export default Header
