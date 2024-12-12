export default function Two(){
  return <div style={{width:"100vw",height:"100vh",backgroundColor:"black", borderTop:"2px solid red"}}>
       <div style={{marginLeft:"80px",color:"white"}}>
          <h2 style={{fontSize:"50px",paddingTop:"140px"}}>About Me</h2>
          <p style={{fontFamily:"serif",fontSize:"20px"}}>I aim to continually improve my skills and explore new technologies to deliver top-notch solutions. I <br /> believe in creating web applications that are intuitive, accessible, and aesthetically pleasing. I&apos;m <br /> always eager to learn, experiment, and push my boundaries to ensure each project is better than <br /> the last.</p>
       </div>
       
       <div style={{width:"1100px",height:"300px",display:"flex",marginTop:"30px",marginLeft:"60px",justifyContent:"space-around" ,paddingTop:"100px",fontFamily:"serif"}}>
       <div style={{color:"white",marginLeft:"30px",borderBottom:"2px solid white",borderLeft:"2px solid white",padding:"10px",borderRadius:"5px"}}>
       <h2 style={{fontSize:"40px"}}>Languages I am Using Now</h2>
         <ul style={{color:"green",fontSize:"20px"}}>
           <li>HTML</li>
           <li>CSS</li>
           <li>TypeScript</li>
         </ul>
     </div>
 
     <div style={{color:"white",marginLeft:"30px",borderTop:"2px solid white",borderRight:"2px solid white",padding:"10px",borderRadius:"5px"}}>
       <h2 style={{fontSize:"40px"}}>Frameworks I am Learning</h2>
         <ul style={{color:"green",fontSize:"20px"}}>
           <li>Next.js</li>
           <li>Tailwind CSS</li>
         </ul>
     </div>
       </div>
 </div>
 }