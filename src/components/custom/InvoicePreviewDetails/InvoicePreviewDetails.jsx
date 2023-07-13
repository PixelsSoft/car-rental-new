import {
  Container,
  InvoiceHead,
  Details,
  ItemsTable,
} from "./InvoicePreview.styles";
import SignatureCanvas from "react-signature-canvas";
import formatToDate from "../../../utils/formatToDate";

export default function InvoicePreviewDetail({ invoice }) {
  console.log(invoice);
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
            <p>{invoice?.customer?.name}</p>
          </div>
          <div>
            <p>{invoice?.customer?.phoneNumber}</p>
            <p>{invoice?.customer?.email}</p>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Invoice Number:</strong>
            <span style={{ marginLeft: 10 }}>{invoice?.invoiceNumber}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Invoice Date:</strong>
            <span style={{ marginLeft: 10 }}>
              {formatToDate(invoice?.createdAt)}
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Payment Due:</strong>
            <span style={{ marginLeft: 10 }}>
              {formatToDate(invoice?.dueDate)}
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Amount Due: </strong>
            <span style={{ marginLeft: 10 }}>${invoice?.amountDue}</span>
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
          {invoice?.items?.map(({ listItem, quantity, price }) => (
            <tr>
              <td>
                <p>
                  <strong>{listItem.make}</strong>
                </p>
                <p>{listItem.description}</p>
              </td>
              <td style={{ textAlign: "end" }}>${price}</td>
              <td style={{ textAlign: "end" }}>${price}</td>
            </tr>
          ))}
        </tbody>
      </ItemsTable>
      <div id="totals">
        <div>
          <strong>Total:</strong>
          <span>${invoice?.total}</span>
        </div>
        <div>
          <strong>Amount Due:</strong>
          <strong>${invoice?.amountDue}</strong>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <strong>Signature:</strong>
          <div style={{ backgroundColor: "#f8f8f8", width: "100%" }}>
            <SignatureCanvas
              penColor="blue"
              canvasProps={{ width: 500, height: 100, className: "sigCanvas" }}
            />
          </div>
        </div>
      </div>
      <p
        style={{
          width: "100%",
          border: "none",
          resize: "none",
          outline: "none",
          marginTop: 10,
        }}
      >
        {invoice?.notes}
      </p>
    </Container>
  );
}
