import { CardMedia } from "@mui/material";

export default function CottageImage(props) {
  return (
    <CardMedia
      component="img"
      alt="Mökki"
      height="280"
      image={require(`../../static/images/${props.image}.jpg`)}
    />
  );
}
