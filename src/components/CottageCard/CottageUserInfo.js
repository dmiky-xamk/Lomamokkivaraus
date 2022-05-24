import { Fragment } from "react";
import { TextField } from "@mui/material";

export default function CottageUserInfo(props) {
  return (
    <Fragment>
      <TextField
        label="Koko nimi"
        name="name"
        type="text"
        onChange={props.onChange}
      ></TextField>
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Saapumispäivämäärä"
        name="arrivalDate"
        type="date"
        onChange={props.onChange}
      ></TextField>
    </Fragment>
  );
}
