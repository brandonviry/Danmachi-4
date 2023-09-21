import "./Perso.css"
import data from "./../../data.json";

import AvatarGroup from '@mui/material/AvatarGroup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import { useState  } from "react";



function Perso(){

  const [c,setC] = useState(["https://danmachi.com/danmachi/images/"+data.perso[0].photo,data.perso[0].nom,data.perso[0].familia,data.perso[0].blueprint])

  const hangleClick =(photo:string,nom:string,familia:string,blueprint:string)=>{
    setC([photo,nom,familia,blueprint])
  }

  // const im = useRef(null);
  // const scrollTo = (ref) => {
  //   ref.current.scrollIntoView();
  // };



    return <section style={{backgroundImage: "url("+c[3]+")",backgroundSize:"cover cover",width:"100%",height:"100%",display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap"} }>
      <AvatarGroup max={100} sx={{justifyContent:"center",display:"flex",flexDirection:"row",flexWrap:"wrap"}} >
    {
      data.perso.map((elt)=>{
        return <Card sx={{backgroundColor:"#0a1e3d",display:"flex",flexDirection:"row",justifyContent:"center",margin:"0px"}}  className="cardHover" onClick={
          ()=>{hangleClick("https://danmachi.com/danmachi/images/"+elt.photo,elt.nom,elt.familia,"https://danmachi.com/danmachi/images/"+elt.blueprint)
        //  scrollTo("im")
        }
        }>
                      
                         <img style={{backgroundColor:"#0a1e3d",width:"35%"}} alt={elt.nom} src={"https://danmachi.com/danmachi/images/"+elt.photo} />
          </Card>

        
      })



    }
     
    
     
    
     </AvatarGroup>
     <Card sx={{width:"25vh",backgroundColor: "#0a1e3d",color:"white",textAlign:"center"}}>
     <CardActionArea>
       <CardMedia
         component="img"
         
         image={c[0]}
         alt={c[1]}
         sx={{margin:"0px"}}
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         {c[1]}
         </Typography>
         <Typography variant="body2" >
           {c[2]}
         </Typography>
       </CardContent>
     </CardActionArea>
   </Card>
   </section>

}

export default Perso;
