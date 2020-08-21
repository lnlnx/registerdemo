import React from "react";
import { styles } from "../../assets/jss/UI/ButtonStyles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(styles);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string;
  isDisabled: boolean;
}

const Button = (props: ButtonProps) => {
  const classes = useStyles();
  const { buttonName, isDisabled } = props;

  return (
    <button className={classes.customButton} disabled={isDisabled}>
      {buttonName}
    </button>
  );
};

export default Button;
