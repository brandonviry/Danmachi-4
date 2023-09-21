import "./App.css";
import Perso from "./components/perso/Perso";
import Episode from "./components/episode/Episode";
import { Typography } from "@mui/material";
import Credit from "./components/credit/Credit";
import Info from "./components/info/Info";
import Navi from "./components/navi/Navi";
import Head from "./components/head/Head";
function App() {
  return (
    <>
      <Info></Info>
     
      <Navi sx={{backgroundColor:"#0a1e3d",color:"white",padding:"1em" ,fontFamily:"Arial"}}  elements={["sinoptis","episode","perso"]}></Navi>
      <Head id="sinoptis"/>
      <Typography gutterBottom variant="h4" component="h2" id="episode">
        Episode
      </Typography>
      <Episode />
      <Typography gutterBottom variant="h4" component="h2" id="perso">
        Personage
      </Typography>

      <Perso />

      <Credit></Credit>

      <p
        style={{
          color: "white",
          backgroundColor: "#0a1e3d",
          margin: "0px",
          padding: "1em",
          borderTop: "2px solid #0a1e3d",
          fontFamily: "Arial",
        }}
      >
         Projet ENTRAÎNEMENT de développement web 
      </p>
    </>
  );
}

export default App;
