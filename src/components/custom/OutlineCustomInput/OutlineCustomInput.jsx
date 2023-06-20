import React from "react";
import { Container, IconContainer } from "./OutlineCustomInput.styles";

const OutlineCustomInput = ({
  width,
  placeholder,
  ml = 0,
  mr = 0,
  mt = 0,
  mb = 0,
  icon,
  inputType = "text",
  ...rest
}) => {
  return (
    <Container width={width} ml={ml} mr={mr} mt={mt} mb={mb}>
      <input
        placeholder={placeholder}
        {...rest}
        onFocus={(e) =>
          inputType === "date" ? (e.target.type = "date") : inputType
        }
        onBlur={(e) =>
          inputType === "date" ? (e.target.type = "text") : inputType
        }
      />
      <IconContainer>{icon}</IconContainer>
    </Container>
  );
};

export default OutlineCustomInput;
