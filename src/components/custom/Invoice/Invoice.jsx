import { Container, InvoiceHead, Details, ItemsTable } from "./Invoice.styles";

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
          <p>
            <strong>Invoice Number: </strong>5774
          </p>
          <p>
            <strong>Invoice Date: </strong>May 25, 2023
          </p>
          <p>
            <strong>Payment Due: </strong>May 25, 2023
          </p>
          <p>
            <strong>Amount Due: </strong>$2,000.00
          </p>
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
      </div>
    </Container>
  );
}
