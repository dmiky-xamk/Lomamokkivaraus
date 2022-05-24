import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function CottageSelect(props) {
  // Pidetään JSX siistimpänä ja luodaan saatavalla olevat mökit dynaamisesti
  const availableCottages = props.cottages.map((cottage) => (
    <MenuItem key={cottage.location} value={cottage.location}>
      {cottage.location}
    </MenuItem>
  ));

  return (
    <FormControl>
      <InputLabel id="cottage-select-label">Valitse mökki</InputLabel>
      <Select
        labelId="cottage-select-label"
        id="cottage-select"
        value={props.location}
        displayEmpty
        label="Valitse mökki"
        onChange={props.onCottageChange}
      >
        {availableCottages}
      </Select>
    </FormControl>
  );
}
