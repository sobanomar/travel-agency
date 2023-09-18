import React from "react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/material.css";

function PhoneInputField(props) {
  const {
    value,
    onChange,
    label,
    placeholder,
    required,
    onBlur,
    error,
    helperText,
  } = props;

  return (
    <PhoneInput
      country={"us"} // Set default country here
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required={required}
      inputStyle={{
        width: "100%",
        padding: "15px 50px",
        borderColor: error && "red",
      }}
    />
  );
}

export default PhoneInputField;
