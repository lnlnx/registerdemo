import { Styles } from "react-jss";

export const styles: Styles = {
  inputWrap: {
    boxSizing: "border-box",
    marginBottom: "26px",
    width: "100%",

    "& $input": {
      border: "1px solid #E6E7E8",
      borderRadius: "10px",
      fontSize: "18px",
      height: "55px",
      paddingLeft: "18px",
      width: "100%",
      boxSizing: "border-box",
      "&:hover": {
        border: "1px solid #667AF4",
        boxShadow:
          "0px 12px 50px rgba(65, 155, 249, 0.08), 0px 2px 10px rgba(159, 159, 164, 0.25)",
      },
    },
    "& $span": {
      fontSize: "15.6774px",
      lineHeight: "28px",
      letterSpacing: "-0.348387px",
      marginRight: "14.7px",
    },
  },
  inputLabel: {
    fontSize: "18px",
    lineHeight: "32px",
    letterSpacing: "-0.4px",
    paddingLeft: "11px",
    display: "block",
  },
};
