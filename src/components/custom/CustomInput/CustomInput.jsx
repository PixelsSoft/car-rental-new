import {
  CustomInputContainer,
  InputLabel,
  Input,
  InputContainer,
} from "./CustomInput.styles";
import { BiDollar } from "react-icons/bi";
export default function CustomInput({
  placeholder,
  width,
  mx,
  my,
  mt,
  mb,
  dollar,
  ...rest
}) {
  return (
    <CustomInputContainer mb={mb} mt={mt} width={width}>
      <InputLabel>{placeholder}</InputLabel>
      <InputContainer>
        {dollar && (
          <BiDollar
            size={14}
            style={{
              marginLeft: 8,
              marginRight: 5,
            }}
          />
        )}
        <Input {...rest} />
      </InputContainer>
    </CustomInputContainer>
  );
}
