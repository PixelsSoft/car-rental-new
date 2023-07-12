import { useTheme } from "styled-components";
import { Container, Details } from "./CustomerCard.styles";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function CustomerCard() {
  const theme = useTheme();

  const { customerProfile } = useSelector((state) => ({
    customerProfile: state.customers.customerProfile,
  }));
  return (
    <Container>
      <FaUser size={100} />

      <Details>
        <strong style={{ fontSize: "12px", color: theme.colors.labels }}>
          Primary Contact
        </strong>

        <div id="customer-details">
          <strong>{customerProfile?.name}</strong>
          <p>{customerProfile?.email}</p>
          <p>{customerProfile?.phoneNumber}</p>
        </div>
      </Details>
    </Container>
  );
}
