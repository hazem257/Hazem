import React from "react" ;
import './footer.css' ;
const Footer = ()=>{
return(
    <footer className="flex">
        <ul className="flex">
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Courses</a></li>
            <li><a href="https://api.whatsapp.com/send?phone=201025547663">contact</a></li>
        </ul>
        <p>© 2025 Hazem Gamal. All Right reserved</p>
    </footer>

);
}
export default Footer ;