import { Styles } from "react-jss";

export const styles: Styles = {
  signupWrap: {
    height: "100%",
  },
  signupWrapImgWrap: {
    position: "fixed",
    width: "35%",
    height: "100%",
    minHeight: "100%",
    "& $img": {
      width: "100%",
      height: "100%",
      zIndex: 0,
    },
    "@media screen and (max-width: 768px)": {
      display: "none",
    },
  },
  imgContentWrap: {
    zIndex: 1,
    top: "0px",
    position: "absolute",
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  imgTitle: {
    margin: "86px 60px 0 60px",
    fontSize: "26px",
    lineHeight: "29px",
    fontFamily: "GT-Walsheim-Pro-Bold",
    textAlign: "center",
    letterSpacing: "-1.2px",
  },
  imgLinks: {
    margin: "0 0 42px 0",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    "& $span": {
      marginLeft: "56px",
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "0.6px",
    },
  },
  iconSet: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "56px",
  },
  signupWrapFormWrap: {
    height: "100%",
    margin: "0 0 112px 35%",
    padding: "0 10% 0 5%",
    display: "flex",
    flexDirection: "column",
    "@media screen and (max-width: 768px)": {
      margin: "0 auto 90px auto",
      padding: "0 20px 0 20px",
    },
  },
  formTitle: {
    margin: "90px 0 0 0",
    "& $p": {
      fontSize: "42px",
      fontStyle: "normal",
      fontFamily: "GT-Walsheim-Pro-Bold",
      margin: "0",
    },
  },
  checkboxWrap: {
    display: "flex",
    alignItems: "center",
    margin: "0 0 20px 0",
    "& $input": {
      borderRadius: "3.63636px",
      border: "0.909091px solid #192332",
      width: "20px",
      height: "20px",
    },
    "& $span": {
      fontSize: "20px",
      lineHeight: "32px",
      letterSpacing: "-0.4px",
      marginLeft: "10px",
    },
  },
  formBody: {
    margin: "57px 0 0 0",
    "& $form": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
  },
  nameSection: {
    display: "inline-block",
    width: "48%",
  },
};
