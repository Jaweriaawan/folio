'use client'
import Link from "next/link"

export default function Navbar(){ 
 return <div>
     <div style={{background:"black",position:"fixed" ,width:"100%", height:"80px", color:"white",paddingTop:"30px" ,fontFamily:"sans-serif",backgroundColor:"black", borderBottom:"2px solid red"}}>
    <div style={{ display:"flex", justifyContent:"space-between",paddingRight:"180px", paddingLeft:"100px"}}>
      <h2 style={{fontSize:"30px"}}>Jaweria</h2>
      <ul style={{fontSize:"25px",paddingTop:"5px"}}>
       <Link href="/" style={{marginRight:"25px"}}>Home</Link>
       <Link href="/folio2" style={{marginRight:"25px"}}>About</Link>
       <Link href="/folio3">Contact</Link>
     </ul>
    </div>
  </div>
</div>
}