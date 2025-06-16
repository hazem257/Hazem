import React, { useState } from "react" ;
import './header.css' ;
import { useEffect } from "react";
const Header = ()=>{
const[showModel,setshowModel]=useState(false)
const [theme , settheme] = useState(localStorage.getItem("currentMode") ?? "dark");
useEffect(()=>{
    if(theme=="light"){
    document.body.classList.remove("dark") ;
    document.body.classList.add("light")

    }else{
        document.body.classList.remove("light") ;
    document.body.classList.add("dark")
    }
},[theme])  
return(
    <header className="flex">
        <button onClick={()=>{
            setshowModel(true)
        }} className="menu icon-menu flex"></button>
        <div/>
    <nav>
        <ul className="flex">
            <li><a href="">about</a></li>
            <li><a href="">Courses</a></li>
            <li><a href="">projects</a></li>
            <li><a href="">contact</a></li>
        </ul>
    </nav>
    <button onClick={()=>{
        localStorage.setItem("currentMode", theme == "dark"? "light" :"dark")

    //local

    settheme(localStorage.getItem("currentMode"))



    }} className="mode flex">
        {theme == "dark" ?(
        <span className="icon-moon-o "></span>)
        :
        (<span className="icon-sun "></span>)
        }
        
    </button> 
   {showModel &&(
     <div className="fixed">
        
            <ul className="model ">
                <li>
                    <button className="icon-clear" onClick={()=>{
                        setshowModel(false)}}/>
                </li>
                <li><a href="">About</a></li>
                <li><a href="">article</a></li>
                <li><a href="">projects</a></li>
                <li><a href="">spacking</a></li>
                <li><a href="">uses</a></li>
            </ul>
        

    </div>
   )}
    </header>

);
}
export default Header ;