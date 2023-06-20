import React from "react";
import { Button } from "./CustomButton.styles";

export default function CustomButton({
  children,
  width,
  outline = false,
  ...rest
}) {
  return (
    <Button width={width} outline={outline} {...rest}>
      {children}
    </Button>
  );
}
