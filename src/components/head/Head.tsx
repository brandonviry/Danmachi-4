
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function Head(props:any){
    
   

    return(

      <Box id={props.id} sx={{margin:"0px",padding:"0px"}}>
          
         
        

 <Card sx={{ display: 'flex' ,padding:"1em",marginLeft:"1em",marginRight:"1em",marginTop:"1em" ,marginBottom:"1em"}}>
         <CardMedia
        component="img"
        sx={{ width:" 25% " ,margin:"0.5em"}}
        image="https://danmachi.com/anime/images/img_season3.jpg"
        alt="cover danmachi saison 1"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column',width:"100%",margin:"0.5em" }}>
      <iframe id="ytplayer" style={{height:"50%",border:"none"}}
        src="https://www.youtube.com/embed/-WVO0GIfq-M?rel=0&autoplay=1&loop=1&controls=0&fs=0&showinfo=0&mute()"
         ></iframe>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          DANMACHI - LA LÉGENDE DES FAMILIAS
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Croyant être passé pour un lâche auprès de la fille qu'il aime, Bell Cranel part en quête de puissance et de force dans les dédales de ce labyrinthe afin d'atteindre la puissance incontestée d'Aiz.
          </Typography>
        </CardContent>
        
      </Box>
   
    </Card>
      </Box>

 
        
       
           
        
    )
}

export default Head;
