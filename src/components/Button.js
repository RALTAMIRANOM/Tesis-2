import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btnPrimary: {
    backgroundColor: "#287198",
    width: (props) => `${props.size}`,
    color: "white",
    "&:hover": {
      color: "#287198",
      background: "white",
      borderColor: "#287198",
    },
  },
  btnSecondary: {
    color: "#287198",
    background: "white",
    width: (props) => `${props.size}`,
    borderColor: "#287198",
    "&:hover": {
      backgroundColor: "#287198",
      color: "white",
    },
  },
});

const CustomButton = ({ text, type, size, action }) => {
  const classes = useStyles({ size });

  return (
    <Button
      className={`${
        type === "primary" ? classes.btnPrimary : classes.btnSecondary
      }`}
      onClick={() => action()}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
