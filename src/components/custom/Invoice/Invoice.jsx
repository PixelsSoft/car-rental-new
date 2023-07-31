import moment from "moment/moment";
import calculateAmount from "../../../utils/calculateAmount";
import { Container, InvoiceHead, Details, ItemsTable } from "./Invoice.styles";
import SignatureCanvas from "react-signature-canvas";
import { useSelector } from "react-redux";

export default function Invoice( {
  selectedItems,
  selectedCustomer,
  dueDate,
  notes,
  dropOffDate,
  pickUpDate,
  invoiceDate,
  isRecurring,
} ) {
  const {invoices} = useSelector( ( state ) => ( {    invoices: state.invoices.invoices} ) );

  return (
    <Container>
      <InvoiceHead>
        <img
          src={require( "../../../assets/images/cityspace-logo.png" )}
          alt=""
          width={250}
          height={100}
        />

        <div>
          <h2>Agreement</h2>
          <span>Xpress Car Rental</span>
          <span>United States</span>
        </div>
      </InvoiceHead>

      <Details>
        <div>
          <div>
            <h3>Bill To</h3>
            <p>{selectedCustomer?.name}</p>
          </div>
          <div>
            <p>{selectedCustomer?.phoneNumber}</p>
            <p>{selectedCustomer?.email}</p>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Agreement Number:</strong>
            <span style={{ marginLeft: 10 }}>{invoices.length+1}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Agreement Date:</strong>
            <span style={{ marginLeft: 10 }}>{moment(invoiceDate).format("DD/MM/YYYY ")}</span>

          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>pick Up Date:</strong>
            <span style={{ marginLeft: 10 }}>{moment(pickUpDate).format("DD/MM/YYYY HH:mm a")}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Drop-Off Date:</strong>
            <span style={{ marginLeft: 10 }}>{moment(dropOffDate).format("DD/MM/YYYY HH:mm a")}</span>

          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Payment Due:</strong>
            <span style={{ marginLeft: 10 }}>
              {isRecurring ? "Auto Generated" : dueDate}
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Amount Due: </strong>
            <span style={{ marginLeft: 10 }}>
              ${calculateAmount( selectedItems )}
            </span>
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
          {selectedItems.map( ( { listItem, quantity, price } ) => (
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
          ) )}
        </tbody>
      </ItemsTable>
      <div id="totals">
        <div>
          <strong>Total:</strong>
          <span>${calculateAmount( selectedItems )}</span>
        </div>
        <div>
          <strong>Amount Due:</strong>
          <strong>${calculateAmount( selectedItems )}</strong>
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
        {notes}
      </p>
    </Container>
  );
}
