import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Input, { InputProps, ValidationRule } from "./UI/Input";
import { styles } from "../assets/jss/SignupStyles";
import Button from "./UI/Button";
import poster from "../assets/img/poster.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
const useStyles = createUseStyles(styles);

export const validateInput = (input: InputProps): boolean => {
  if (input.inputValue === "") {
    return false;
  } else if (input.validationRules) {
    return input.validationRules.every((rule: ValidationRule): boolean =>
      rule.validateFunc(input.inputValue)
    );
  } else {
    return true;
  }
};

const Signup = () => {
  const classes = useStyles();
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);
  const [agreeTerm, setAgreeTerm] = useState<boolean>(false);
  const [dataform, setDataform] = useState<InputProps[]>([
    {
      label: "First Name",
      type: "text",
      inputValue: "",
      placeholder: "First Name",
      name: "firstname",
    },
    {
      label: "Last Name",
      type: "text",
      inputValue: "",
      placeholder: "Last Name",
      name: "lastname",
    },
    {
      label: "Email",
      type: "email",
      inputValue: "",
      placeholder: "Email",
      name: "email",
      validationRules: [
        {
          validateFunc: (input: string): boolean =>
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input),
        },
      ],
    },
    {
      label: "Create Password",
      type: "password",
      inputValue: "",
      placeholder: "Password",
      name: "password",
      validationRules: [
        {
          hint: "At least 8 characters",
          validateFunc: (input: string): boolean => input.length >= 8,
        },
        {
          hint: "One number",
          validateFunc: (input: string): boolean =>
            input.length > 0 && /\d/.test(input),
        },
      ],
    },
  ]);

  const validateForm = (): void => {
    const formIsValid = dataform.every((input: InputProps): boolean =>
      validateInput(input)
    );
    setIsSubmitDisabled(!formIsValid || !agreeTerm);
  };

  useEffect(() => {
    validateForm();
  }, [dataform, agreeTerm]);

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { value } = event.target;
    setDataform((preState) => {
      const newStateItem = { ...preState[index] };
      newStateItem.inputValue = value;
      const newState = [...preState];
      newState[index] = newStateItem;
      return newState;
    });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(dataform);
    const email = dataform[0].value;
    const password = dataform[2].value;
    console.log(email);
  };

  const checkboxChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setAgreeTerm(event.target.checked);

  const form = dataform.map((data, index) => {
    const className = index < 2 ? classes.nameSection : undefined;
    return (
      <Input
        {...data}
        change={(event) => inputChangeHandler(event, index)}
        className={className}
        key={data.name}
      ></Input>
    );
  });

  const breakLine = (
    <div
      style={{
        height: "1px",
        backgroundColor: "rgba(25, 35, 50, 0.1)",
        width: "100%",
        marginBottom: "29px",
      }}
    ></div>
  );

  const iconStyle = {
    width: "18px",
    height: "18px",
    marginLeft: "18px",
  };

  return (
    <div className={classes.signupWrap}>
      <div className={classes.signupWrapImgWrap}>
        <img src={poster} alt="poster" />
        <div className={classes.imgContentWrap}>
          <p className={classes.imgTitle}>
            A Few Clicks Away from your US Mobile Account
          </p>
          <div className={classes.imgLinks}>
            <span>ABOUT US MOBILE</span>
            <div className={classes.iconSet}>
              <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
              <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
              <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
              <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.signupWrapFormWrap}>
        <div className={classes.formTitle}>
          <FontAwesomeIcon
            icon={faReact}
            style={{ width: "40px", height: "40px", marginBottom: "34px" }}
          />
          <p>Start Saving Today!</p>
        </div>
        <div className={classes.formBody}>
          <form onSubmit={(event) => submitHandler(event)}>
            {form}
            {breakLine}
            <p className={classes.checkboxWrap}>
              <input type="checkbox" onChange={checkboxChangeHandler} />
              <span>Agree To the Terms & Privacy policy</span>
            </p>
            <Button buttonName={"Create User"} isDisabled={isSubmitDisabled} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
