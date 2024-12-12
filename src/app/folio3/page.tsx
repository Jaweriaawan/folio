import { MdOutlineMarkEmailUnread} from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

export default function Three(){
 return <div style={{width:"100wv",height:"100vh",backgroundColor:"black"}}>
   <div style={{color:"white",paddingTop:"140px",marginLeft:"60px"}}>
   <p style={{fontSize:"55px"}}>Get in Touch</p>
    <p style={{fontFamily:"serif" ,fontSize:"20px"}}>You can connect with me on LinkedIn and also visit my GitHub repositories.</p>
   </div>

    <div style={{paddingTop:"30px", color:"white",height:"40px",width:"80px",display:"flex",justifyContent:"space-between",alignItems:"center",marginLeft:"290px"}}>
        <a href="https://github.com/Jaweriaawan"><FaGithub style={{width:"30px",height:"30px"}} /></a>
        <a href="https://www.linkedin.com/in/jaweria-waheed-52840b2b4/"><SiLinkedin style={{width:"25px",height:"25px"}} /></a>
    </div>

    <div style={{paddingTop:"100px",color:"white",marginLeft:"60px",fontSize:"20px",fontFamily:"serif"}}>
      <p>We can stay in touch via email and contact number.</p>
      <p style={{marginTop:"20px",display:"flex"}}><MdOutlineMarkEmailUnread style={{width:"32px",height:"32px",marginRight:"15px"}} />gmail@gmail.com</p><br />
      <p style={{display:"flex"}}>< FaPhoneAlt style={{marginRight:"17px"}} />011-11111111</p>
    </div>
</div>
}
