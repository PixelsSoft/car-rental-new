import { CustomInputContainer, InputLabel, Input } from "./CustomInput.styles";
export default function CustomInput({
  placeholder,
  width,
  mx,
  my,
  mt,
  mb,
  ...rest
}) {
  return (
    <CustomInputContainer mb={mb} mt={mt} width={width}>
      <InputLabel>{placeholder}</InputLabel>
      <Input {...rest} />
    </CustomInputContainer>
  );
}
