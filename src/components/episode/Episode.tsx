import "./Episode.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import data from "./../../data.json";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function Episode() {
  const [open, setOpen] = useState(false);

  const [id, setId] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section>
        {data.episode.map((elt) => {
          return (
            <Card
              sx={{ maxWidth: 345, backgroundColor: "#0a1e3d" }}
              className="card"
              onClick={() => {
                handleOpen();
                const url =
                  (("https://video.sibnet.ru/shell.php?videoid=" +
                    elt.video) as string) + "&share=1";
                setId(url);
              }}
            >
              {" "}
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  width="300"
                  image={elt.cover}
                  alt={elt.titre}
                  sx={{
                    margin: "0",
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="titre"
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    {elt.titre}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "white" }}>
                    {elt.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box
            sx={{
              ...style,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{ color: "white", backgroundColor: "#0a1e3d", height: "10%" }}
            >
              FERMER
            </Button>

            <iframe src={id}></iframe>
          </Box>
        </Modal>
      </section>
    </>
  );
}

export default Episode;
