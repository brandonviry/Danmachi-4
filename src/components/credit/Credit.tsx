import { List, ListItem, ListSubheader,ListItemButton, Box } from "@mui/material";
import "./Credit.css"

function Credit(){

    return (
      <Box sx={{borderTop:"5px solid #0a1e3d",display:"flex",flexDirection:"row",justifyContent:"center",fontFamily:"Arial",bgcolor: 'background.paper',padding:"3em"}}>
         <List
       sx={{
        width: '50%',
        // maxWidth: "50%",
        bgcolor: 'background.paper',
        position: 'relative',
        // overflow: 'auto',
        // maxHeight: 300,
        '& ul': { padding: 0 },
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
       
    
        
      }}
      subheader={<li />}
    
       >
         <ListSubheader className="sub">Développeur:</ListSubheader>
         <ul>
         <ListItem>
           
            <ListItemButton> chikara974</ListItemButton>
            </ListItem>
         </ul>
    
      
    
        <ListSubheader className="sub">Media:</ListSubheader>
        
        <ul>
            <ListItem className="link"><ListItemButton onClick={()=>window.location.href="https://www.allocine.fr/series/ficheserie-27356/saison-39743/"}>cover:allocine</ListItemButton></ListItem>
            <ListItem className="link"><ListItemButton onClick={()=>window.location.href="https://www.youtube.com/@danmachianime2202"}>video YT:danmachianime2202</ListItemButton></ListItem>
            <ListItem className="link"><ListItemButton onClick={()=>window.location.href="https://danmachi.com/danmachi/story/index.html"}>autre:Danmachi site web</ListItemButton></ListItem>
        </ul>
        <ListSubheader className="sub">Texte </ListSubheader>
        <ListItem className="link"> <ListItem><ListItemButton onClick={()=>window.location.href="https://www.allocine.fr/series/ficheserie-27356/saison-39743/"}>allocine</ListItemButton></ListItem></ListItem>
         
       </List>
      </Box>
    )

}

export default Credit;