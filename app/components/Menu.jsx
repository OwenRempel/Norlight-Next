import Image from "next/image"
import Link from "next/link"
import profile from'../assets/logo.png'
export default function Menu(params) {
    return(
        <div className="menubar">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id='menu-ic' fill="white" className='menu-icon'><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            <a href="media" className="menuItems m-i" >Media</a>
            <a href="portfolio" className="menuItems p-i" >Portfolio</a>
            <a href='/' className='logo'> <Image src={profile} alt='main-logo' className='logo'/></a>
            <a href="about" className="menuItems a-i" >About</a>
            <a href="print" className="menuItems s-i" >Prints</a>
        </div>  
    )
};
