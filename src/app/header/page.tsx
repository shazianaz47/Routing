import Link from "next/link"

export default function Header(){
    return(
      <div>
        <h1>Header Page</h1>
        <p>Hey Designer!Design everything and create new ideas with your creativity </p>
        <ul>
            <li>
                Dashboard <br></br>
                Task<br></br>
                PaymentMode
            </li>
        </ul>
        <Link href="/">Go to Home</Link>
      </div>
    )
  }