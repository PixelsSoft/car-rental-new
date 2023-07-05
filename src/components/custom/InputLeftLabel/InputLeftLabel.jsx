import React from "react";
import CustomInput from "../CustomInput/CustomInput";
import { Container, Label } from "./InputLeftLabel.styles";

export default function InputLeftLabel({
  width,
  label,
  mt,
  mb,
  ml,
  mr,
  dollar,
  ...rest
}) {
  return (
    <Container mt={mt} mb={mb} ml={ml} mr={mr} width={width}>
      <Label>{label}</Label>
      <CustomInput dollar={dollar} {...rest} />
    </Container>
  );
}
