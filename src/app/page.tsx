import Image from 'next/image';
import profile from "@/app/pics/profile.jpg"
import Two from "./folio2/page";
import Three from "./folio3/page";

export default function One(){
 return <div style={{width:"100wv",height:"100vh",backgroundColor:"black"}}>

  <div style={{display:"flex", justifyContent:"space-between"}}>
    <div style={{marginLeft:"65px",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"70px", marginTop:"220px",color:"white"}}>Hyy <br /> I am jaweria</h1>
    </div>

    <div style={{width:"300px", height:"500px",border:"3px solid white",marginTop:"140px", marginRight:"150px",marginBottom:"70px",overflow:"hidden",borderRadius:"30px"}}>
      <Image src={profile} alt="profile" style={{objectFit:"cover",height:"100%",width:"100%"}} />
    </div>
  </div>

    <Two />
    <Three />
</div>
} 