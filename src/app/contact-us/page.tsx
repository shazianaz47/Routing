
 
import Link from "next/link"


export default function Contact(){
    
    return(
      <div>
        <h1>Contact Page</h1>
        <p>Email:shazianaz2417@gmail.com</p>
        <ul>
            <li>
                PhoneNo:+92 1234567<br/>
                Address: Karachi Pakistan
            </li>
        </ul>
        <Link href="/"> Go to Home </Link>
      </div>
     
    )
  }