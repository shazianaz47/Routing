 "use client"
import react from "react";
import Contact from "./contact-us/page";
import About from "./about/page";
import Footer from"./footer/page";
import{useRouter} from "next/navigation"
import Link from "next/link";

export default function Home(){
  const router= useRouter();
  return(
    <div>
      
      <h1><u> Design-o-Pedia</u></h1>
      <h2 >Design-o-Pedia: Where Creativity Meets Innovation</h2>
      {/* how to take link */}
     <nav>
      <a href="/about">About</a>
      <br/>
      <a href='/contact-us'>Contact</a><br/>
      </nav>
      <button onClick= {()=>router.push("/header")}> Header</button><br/>
      <button onClick={()=>router.push('/footer')}>  Footer </button>
      
    </div>
  )
}