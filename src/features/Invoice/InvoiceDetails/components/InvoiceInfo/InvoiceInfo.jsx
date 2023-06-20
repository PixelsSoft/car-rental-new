import { useTheme } from "styled-components";
import { Card, CardBody, Container } from "./InvoiceInfo.styles";
import { FaFileInvoice, FaLocationArrow, FaMoneyBill } from "react-icons/fa";
import CustomButton from "../../../../../components/custom/CustomButton/CustomButton";

export default function InvoiceInfo() {
  const theme = useTheme();
  return (
    <Container>
      <Card>
        {/* <IconContainer> */}
        <FaFileInvoice size={24} color={theme.colors.primary} />
        {/* </IconContainer> */}

        <CardBody>
          <h2>Create</h2>
          <p>
            <strong>Created:</strong> on May 25, 2023 at 1:56 PM GMT +5 from
            recurring invoice.
          </p>
        </CardBody>

        <div>
          <CustomButton outline width={180}>
            Edit Invoice
          </CustomButton>
        </div>
      </Card>

      <Card>
        {/* <IconContainer> */}
        <FaLocationArrow size={24} color={theme.colors.primary} />
        {/* </IconContainer> */}

        <CardBody>
          <h2>Send</h2>
          <p>
            <strong>Last Sent:</strong> Never.
          </p>
        </CardBody>

        <div>
          <CustomButton outline width={180}>
            Send Invoice
          </CustomButton>
        </div>
      </Card>

      <Card>
        {/* <IconContainer> */}
        <FaMoneyBill size={24} color={theme.colors.primary} />
        {/* </IconContainer> */}
        <CardBody>
          <h2>Get Paid</h2>
          <p>
            <strong>Amount due:</strong> $2,000.00
          </p>
          <p>
            <strong>Status:</strong> Your invoice is pending
          </p>
        </CardBody>

        <div>
          <CustomButton outline width={180}>
            Record Payment
          </CustomButton>
        </div>
      </Card>
    </Container>
  );
}
