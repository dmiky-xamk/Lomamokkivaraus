import { Fragment } from "react";
import { Typography, Slider } from "@mui/material";

export default function CottageStayLength(props) {
  return (
    <Fragment>
      <Typography>Varauksen pituus päivissä</Typography>
      <Slider
        aria-label="Vuorokausien määrä"
        name="duration"
        defaultValue={1}
        min={1}
        max={14}
        marks={true}
        valueLabelDisplay="auto"
        onChange={props.onStayLengthChange}
      ></Slider>
    </Fragment>
  );
}
