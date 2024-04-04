import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Discount(props) {
  console.log("hello1231", props.dis);
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "cyan" }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      <CardContent color={"blue"}>
        <Typography gutterBottom variant="h5" component="div" color={"blue"}>
          Discount = {props.dis}%
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a {props.dis} widespread group of squamate reptiles, with
          over 6,000 species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
