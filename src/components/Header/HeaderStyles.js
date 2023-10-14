import { makeStyles } from "@mui/styles";

export const headerStyles = makeStyles((theme) => ({
  alignHeader: {
    backgroundColor: "red",
    color: (props) => props.color,
  },
}));
