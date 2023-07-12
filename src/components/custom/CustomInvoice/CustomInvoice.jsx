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
import { useEffect, useState } from "react";
import SelectWithSearch from "../SelectWithSearch/SelectWithSearch";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../../redux/customers/reducer";
import { getItems } from "../../../redux/items/reducer";

export default function CustomInvoice() {
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showSelectItem, setShowSelectItem] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  /* 
    invoice states
  */
  const [poSoNumber, setPoSoNumber] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const toggle = () => setShowAddCustomer(!showAddCustomer);
  const theme = useTheme();
  const dispatch = useDispatch();

  const { customers, loading, items } = useSelector((state) => ({
    customers: state.customers.customers,
    loading: state.customers.loading,
    items: state.items.items,
  }));

  const handleItemSelect = (listItem) => {
    setSelectedItems((prev) => [
      ...prev,
      { listItem, quantity: 1, price: listItem.daily },
    ]);
    setShowSelectItem(false);
  };

  //   const handleQuantityChange = (e, id) => {
  //     // setSelectedItems(prev => prev.find(previtem => previtem._))
  //   };

  console.log(loading);

  useEffect(() => {
    dispatch(getCustomers());
    dispatch(getItems());
  }, [dispatch]);

  return (
    <InvoiceContainer>
      <CustomerDetailsContainer>
        {selectedCustomer ? (
          <Left>
            <p>
              <strong style={{ color: theme.colors.labels }}>Bill To</strong>
            </p>
            <p>
              <strong>{selectedCustomer.name}</strong>
            </p>
            <div style={{ marginTop: 10 }}>
              <LinkText
                style={{ fontSize: 14 }}
                onClick={() => setSelectedCustomer(null)}
              >
                Change Customer
              </LinkText>
            </div>
          </Left>
        ) : (
          <Left>
            {showAddCustomer ? (
              <SelectWithSearch
                placeholder="Select Customer"
                items={customers}
                accessor={"name"}
                onItemSelect={(customer) => setSelectedCustomer(customer)}
              />
            ) : (
              <AddCustomerBox onClick={toggle}>
                <BiUserPlus size={40} color={theme.colors.labels} />
                <LinkText ml={10}>Add A Customer</LinkText>
              </AddCustomerBox>
            )}
          </Left>
        )}

        <Right>
          <InputLeftLabel
            label="Invoice Number"
            value="Auto Generated"
            disabled
          />
          <InputLeftLabel
            label="P.O./S.O. number"
            mt={10}
            value={poSoNumber}
            onChange={(e) => setPoSoNumber(e.target.value)}
          />
          <InputLeftLabel
            label="Invoice date"
            mt={10}
            value="Auto Generated"
            disabled
          />
          <InputLeftLabel
            label="Payment due"
            mt={10}
            value={dueDate}
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
          />
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
        {selectedItems.map(({ listItem, quantity, price }) => (
          <TRow>
            <TData>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>{listItem.make}</span>
                <OutlineCustomInput
                  value={listItem.description}
                  width={250}
                  ml={30}
                />
              </div>
            </TData>
            <TData>
              <OutlineCustomInput value={quantity} />
            </TData>
            <TData>
              <OutlineCustomInput value={price} />
            </TData>
            <TData>${price}</TData>
          </TRow>
        ))}

        {/* ADD ITEM ROW */}
        <TRow>
          <TData>
            {showSelectItem ? (
              <SelectWithSearch
                placeholder="Select item"
                items={items}
                accessor="make"
                onItemSelect={handleItemSelect}
              />
            ) : (
              <div
                style={{ display: "flex", alignItems: "center", marginTop: 10 }}
              >
                <RiAddCircleLine size={20} color={theme.colors.primary} />
                <LinkText ml={5} onClick={() => setShowSelectItem(true)}>
                  Add an item
                </LinkText>
              </div>
            )}
            {/* <div
              style={{ display: "flex", alignItems: "center", marginTop: 10 }}
            >
              <RiAddCircleLine size={20} color={theme.colors.primary} />
              <LinkText ml={5}>Add an item</LinkText>
            </div> */}
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
