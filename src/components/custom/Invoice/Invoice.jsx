import { Container, InvoiceHead, Details, ItemsTable } from "./Invoice.styles";
import SignatureCanvas from "react-signature-canvas";

export default function Invoice() {
  return (
    <Container>
      <InvoiceHead>
        <img
          src={require("../../../assets/images/logo.png")}
          alt=""
          width={250}
          height={100}
        />

        <div>
          <h2>Invoice</h2>
          <span>Xpress Car Rental</span>
          <span>United States</span>
        </div>
      </InvoiceHead>

      <Details>
        <div>
          <div>
            <h3>Bill To</h3>
            <p>Anishka Mackey</p>
          </div>
          <div>
            <p>242 4471987</p>
            <p>azayceia@hotmail.com</p>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Invoice Number:</strong>
            <span style={{ marginLeft: 10 }}>5574</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Invoice Date:</strong>
            <span style={{ marginLeft: 10 }}>23 May, 2023</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Payment Due:</strong>
            <span style={{ marginLeft: 10 }}>25 May, 2023</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Amount Due: </strong>
            <span style={{ marginLeft: 10 }}>$5574.00</span>
          </div>
        </div>
      </Details>

      <ItemsTable>
        <thead>
          <tr>
            <th style={{ textAlign: "start" }}>Items</th>
            <th style={{ textAlign: "end" }}>Price</th>
            <th style={{ textAlign: "end" }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <strong>Nissan Cube</strong>
              </p>
              <p>Silver</p>
            </td>
            <td style={{ textAlign: "end" }}>$300.00</td>
            <td style={{ textAlign: "end" }}>$300.00</td>
          </tr>
        </tbody>
      </ItemsTable>
      <div id="totals">
        <div>
          <strong>Total:</strong>
          <span>$300.00</span>
        </div>
        <div>
          <strong>Amount Due:</strong>
          <strong>$300.00</strong>
        </div>
        <div>
          <strong>Signature:</strong>
          <SignatureCanvas
            penColor="blue"
            canvasProps={{ width: 500, height: 500, className: "sigCanvas" }}
          />
        </div>
      </div>
    </Container>
  );
}
