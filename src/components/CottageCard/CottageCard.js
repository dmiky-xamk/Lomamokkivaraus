import styles from "./CottageCard.module.css";
import { useState, useEffect } from "react";
import CottageDialog from "./CottageDialog";
import CottageImage from "./CottageImage";
import CottageSelect from "./CottageSelect";
import CottageStayLength from "./CottageStayLength";
import CottageUserInfo from "./CottageUserInfo";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

// Constant isolla
const COTTAGES = [
  {
    location: "Kettuholma",
    image: "m1",
    price: 105,
  },
  {
    location: "Saarensuo",
    image: "m2",
    price: 80,
  },
  {
    location: "Tommolansalmi",
    image: "m3",
    price: 60,
  },
  {
    location: "Kurkela",
    image: "m4",
    price: 50,
  },
];

// Luodaan formille oletusarvot
// Tätä käyttämällä luodaan dynaaminen objekti, jonka tiedot päivittyvät käyttäjän toimesta
const formDefaultValues = {
  duration: 1,
  name: "",
  arrivalDate: "",
  cleanUp: false,
};

export default function CottageCard() {
  const [location, setLocation] = useState(COTTAGES[0].location);
  const [image, setImage] = useState(COTTAGES[0].image);
  const [price, setPrice] = useState(COTTAGES[0].price);

  const [formValues, setFormValues] = useState(formDefaultValues);
  const [totalPrice, setTotalPrice] = useState(0);

  const [dialogOpen, setDialogOpen] = useState(false);

  // Mökkiä vaihtaessa muuttaa tekstin, kuvan sekä hinnan
  const cottageChangeHandler = (event) => {
    console.log(event);

    const cottage = COTTAGES.find(
      (cottage) => cottage.location === event.target.value
    );

    setLocation(cottage.location);
    setImage(cottage.image);
    setPrice(cottage.price);
  };

  // Päivitetään formValues objektissa "name" kenttä saadulla "value" arvolla
  const updateFormValues = (name, value) => {
    setFormValues((prevFormValues) => {
      return { ...prevFormValues, [name]: value };
    });
  };

  // Varauksen pituus sekä käyttäjätiedot (nimi, saapumispvm)
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;

    updateFormValues(name, value);

    console.log(formValues);
  };

  // Loppusiivous
  const checkboxChangeHandler = (event) => {
    const isCleanUpChecked = event.target.checked;
    const { name } = event.target;

    updateFormValues(name, isCleanUpChecked);
  };

  // Form lähetys
  const submitHandler = (event) => {
    event.preventDefault();

    // Avataan dialog ikkuna
    setDialogOpen(true);

    console.log(formValues);
  };

  // Dialog ikkuna sulku
  const dialogCloseHandler = () => {
    setDialogOpen(false);
  };

  const calculateTotalPrice = () => {
    const total = price * formValues.duration + (formValues.cleanUp ? 100 : 0);
    setTotalPrice(total);
  };

  // Kokonaishinta päivitetään uudelleen, kun joko kestoa tai loppusiivous valintoja muutetaan
  useEffect(calculateTotalPrice, [
    price,
    formValues.duration,
    formValues.cleanUp,
  ]);

  return (
    <Card className={styles["cottage-card"]} variant="elevation">
      <CottageImage image={image} />
      <CardContent>
        <form onSubmit={submitHandler} className={styles["cottage-form"]}>
          <CottageSelect
            cottages={COTTAGES}
            location={location}
            onCottageChange={cottageChangeHandler}
          />
          <Typography gutterBottom>Hinta/yö: {price} euroa</Typography>
          <CottageStayLength onStayLengthChange={inputChangeHandler} />
          <CottageUserInfo onChange={inputChangeHandler} />
          <FormControlLabel
            control={
              <Checkbox name="cleanUp" onChange={checkboxChangeHandler} />
            }
            label="Loppusiivous (100 euroa)"
          />
          <Typography gutterBottom>
            Kokonaishinta: {totalPrice} euroa
          </Typography>
          <Button type="submit" variant="contained" disableElevation>
            Varaa mökki
          </Button>
        </form>
      </CardContent>
      <CottageDialog
        userInfo={formValues}
        totalPrice={totalPrice}
        open={dialogOpen}
        onClose={dialogCloseHandler}
      />
    </Card>
  );
}
