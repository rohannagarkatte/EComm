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
      <CardContent color={"blue"}>
        <Typography gutterBottom variant="h5" component="div" color={"blue"}>
          Discount = {props.dis}%
        </Typography>
      </CardContent>
    </Card>
  );
}
