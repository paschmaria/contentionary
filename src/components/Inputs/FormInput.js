import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import inputStyles from "../../style/components/Input";


export default function CustomInput(props) {
  const classes = inputStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    type,
    error,
    white,
    inputRootCustomClasses,
    success,
    changed,
    clicked,
    showPassword,
    adornmentPos
  } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white
  });

  const formControlClasses = formControlProps !== undefined ?
                            classNames(
                              formControlProps.className,
                              classes.formControl
                            ) :
                            classes.formControl;

  const adornment = <InputAdornment position={adornmentPos}>
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={clicked}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>

  return (
    <FormControl {...formControlProps} className={formControlClasses} variant="outlined">
      {labelText !== undefined ? (
        <InputLabel
          className={`${classes.labelRoot} ${labelClasses}`}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <OutlinedInput
        id={id}
        type={type}
        onChange={changed}
        startAdornment={adornmentPos === 'start' ? adornment : null}
        endAdornment={adornmentPos === 'end' ? adornment : null}
        labelWidth={70}
        {...inputProps}
      />
    </FormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool
};