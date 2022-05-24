import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";

export default function CottageDialog(props) {
  const closeHandler = () => {
    props.onClose();
  };

  return (
    <Dialog open={props.open} onClose={closeHandler}>
      <DialogTitle>Yhteenveto</DialogTitle>
      <DialogContent>
        <Typography>Nimi: {props.userInfo.name}</Typography>
        <Typography>Saapuminen: {props.userInfo.arrivalDate}</Typography>
        <Typography>Loppusumma: {props.totalPrice} euroa</Typography>
      </DialogContent>
    </Dialog>
  );
}
