import React, { Fragment } from "react";
import { createUseStyles } from "react-jss";
import { styles } from "../../assets/jss/UI/InputStyles";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles(styles);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputValue: string;
  validationRules?: ValidationRule[];
  className?: string;
  change?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ValidationRule {
  hint?: string;
  validateFunc: (input: string) => boolean;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { label, validationRules, inputValue, className } = props;
  const classes = useStyles();

  let wrapClasses = classNames({
    [classes.inputWrap]: true,
    ...(className ? { [className]: true } : null),
  });

  let validationRulesSegment: JSX.Element | null = null;

  if (validationRules) {
    const ruleElements = validationRules.flatMap(
      (validationRule: ValidationRule) => {
        const validateResult = validationRule.validateFunc(inputValue);
        const color = {
          color: validateResult ? "#76BC7E" : "#FF6363",
        };
        const iconStyle = {
          height: "13px",
          weight: "13px",
          marginRight: "6px",
          ...color,
        };
        const icon = validateResult ? (
          <FontAwesomeIcon icon={faCheck} style={iconStyle} />
        ) : (
          <FontAwesomeIcon icon={faExclamationTriangle} style={iconStyle} />
        );
        return validationRule.hint
          ? [
              <Fragment key={validationRule.hint}>
                {icon}
                <span style={color}>{validationRule.hint}</span>
              </Fragment>,
            ]
          : [];
      }
    );
    if (ruleElements.length > 0) {
      validationRulesSegment = (
        <div style={{ marginTop: "15px" }}>{ruleElements}</div>
      );
    }
  }

  return (
    <div className={wrapClasses}>
      <label className={classes.inputLabel}>{label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.change}
        value={props.inputValue}
      />
      {validationRulesSegment}
    </div>
  );
};

export default Input;
