 "use client"
import react from "react";
// import Contact from "./contact-us/page";
// import About from "./about/page";
// import Footer from"./footer/page";

import{useRouter} from "next/navigation"
import Link from "next/link";
import path from "path";

export default function Home(){
  const router= useRouter();
  
  return(
    <div className="bg-slate-100 w-full h-30 mt-10 mb-5">
      <h1 ><u> Design-o-Pedia</u></h1>
      <h2 > Design-o-Pedia: Where Creativity Meets Innovation </h2>
      
      <div className="flex max-w[70] gap-y-10">
        <ul className="flex gap-14 mt-30 ml-10 mr-20">
          <li className="hover:text-sky-300"><a href="/">Home</a></li><br/>
          <li className="hover:text-orange-500"><a href="/about">About</a></li><br/>
          <li className="hover:text-yellow-300"><button onClick= {()=>router.push("/header")}>Header</button></li><br/>
          <li className="hover:text-pink-600"><a href='/contact-us'>Contact</a></li><br/>
          <li className= "hover:text-green-200"><button onClick= {()=>router.push("/footer")}>Footer</button></li>
        </ul>
        <div className ="flex gap-14 mr-[30]">
          <button className="hover:bg-pink-500">Download Cv</button></div>
      </div>
    </div>
    
  )
}