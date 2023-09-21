import "./Info.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

function Info() {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{fontFamily:"Arial"}}
      >
        <DialogTitle id="responsive-dialog-title" sx={{color:"#0a1e3d",fontWeight:"bold"}}>
          {"INFO IMPORTANT"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p style={{color:"#0a1e3d",fontWeight:"bold"}}>Bienvenue ce site qui est un projet ENTRAÎNEMENT de
            dévellopement : Aucun contenue "MEDIA*" est héberger sur le site.</p>
            <p style={{color:"#0a1e3d",fontStyle:"italic"}}>* video , audio , image</p>
           
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Info;
