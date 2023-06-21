import { useTheme } from "styled-components";
import InputLeftLabel from "../InputLeftLabel/InputLeftLabel";
import { LinkText } from "../Text/Text";
import { RiAddCircleLine } from "react-icons/ri";
import {
  InvoiceContainer,
  Left,
  Right,
  AddCustomerBox,
  CustomerDetailsContainer,
  InvoiceTable,
  TRow,
  THead,
  TData,
} from "./CustomInvoice.styles";
import { BiUserPlus } from "react-icons/bi";
import OutlineCustomInput from "../OutlineCustomInput/OutlineCustomInput";
import { useState } from "react";
import SelectWithSearch from "../SelectWithSearch/SelectWithSearch";

export default function CustomInvoice() {
  const [showAddCustomer, setShowAddCustomer] = useState(false);

  const toggle = () => setShowAddCustomer(!showAddCustomer);
  const theme = useTheme();
  return (
    <InvoiceContainer>
      <CustomerDetailsContainer>
        <Left>
          {showAddCustomer ? (
            <SelectWithSearch placeholder="Select Customer" />
          ) : (
            <AddCustomerBox onClick={toggle}>
              <BiUserPlus size={40} color={theme.colors.labels} />
              <LinkText ml={10}>Add A Customer</LinkText>
            </AddCustomerBox>
          )}
        </Left>
        <Right>
          <InputLeftLabel label="Invoice Number" />
          <InputLeftLabel label="P.O./S.O. number" mt={10} />
          <InputLeftLabel label="Invoice date" mt={10} />
          <InputLeftLabel label="Payment due" mt={10} />
        </Right>
      </CustomerDetailsContainer>

      <InvoiceTable>
        <TRow>
          <THead size={60}>Items</THead>
          <THead>Quantity</THead>
          <THead>Price</THead>
          <THead>Amount</THead>
          <THead></THead>
        </TRow>

        {/* ITEMS */}
        <TRow>
          <TData>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>Honda Fit</span>
              <OutlineCustomInput
                value="Royal Blue(AW8518)"
                width={250}
                ml={30}
              />
            </div>
          </TData>
          <TData>
            <OutlineCustomInput value={1} />
          </TData>
          <TData>
            <OutlineCustomInput value={300.0} />
          </TData>
          <TData>$300.00</TData>
        </TRow>

        {/* ADD ITEM ROW */}
        <TRow>
          <TData>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: 10 }}
            >
              <RiAddCircleLine size={20} color={theme.colors.primary} />
              <LinkText ml={5}>Add an item</LinkText>
            </div>
          </TData>
        </TRow>
      </InvoiceTable>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          padding: theme.spacing.l,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "20%",
          }}
        >
          <span>Subtotal</span>
          <span>$300.00</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "20%",
            marginTop: 10,
          }}
        >
          <strong>Total</strong>
          <strong>$300.00</strong>
        </div>
      </div>
      <div>
        <strong style={{ color: theme.colors.labels, fontSize: 14 }}>
          Notes / Terms
        </strong>
        <textarea
          placeholder="Enter notes or terms of service that are visible to your customers"
          style={{
            width: "100%",
            border: "none",
            resize: "none",
            outline: "none",
            marginTop: 10,
          }}
        />
      </div>
    </InvoiceContainer>
  );
}
