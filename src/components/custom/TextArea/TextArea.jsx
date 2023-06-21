import { Container, Label, StyledTextArea } from "./TextArea.styles";

export default function TextArea({
  label,
  row = false,
  width,
  mt,
  mb,
  mr,
  ml,
  ...rest
}) {
  return (
    <Container width={width} row={row} ml={ml} mr={mr} mt={mt} mb={mb}>
      <Label>{label}</Label>
      <StyledTextArea {...rest} rows={7} />
    </Container>
  );
}
