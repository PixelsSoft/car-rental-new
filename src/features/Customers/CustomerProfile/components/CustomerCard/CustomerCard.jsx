import { useTheme } from "styled-components";
import { Container, Details } from "./CustomerCard.styles";
import { FaUser } from "react-icons/fa";

export default function CustomerCard() {
  const theme = useTheme();
  return (
    <Container>
      <FaUser size={100} />

      <Details>
        <strong style={{ fontSize: "12px", color: theme.colors.labels }}>
          Primary Contact
        </strong>

        <div id="customer-details">
          <strong>Anishka Mackey</strong>
          <p>azayceia@gmail.com</p>
          <p>242 4471987</p>
        </div>
      </Details>
    </Container>
  );
}
