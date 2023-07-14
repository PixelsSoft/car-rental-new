import React, { useEffect, useState } from "react";
import {
  InvoiceContainer,
  InvoiceTable,
  InputsContainer,
  TData,
  THead,
  TRow,
} from "./AddBill.styles";
import InputLeftLabel from "../../../components/custom/InputLeftLabel/InputLeftLabel";

import OutlineCustomInput from "../../../components/custom/OutlineCustomInput/OutlineCustomInput";
import { useTheme } from "styled-components";
import { RiAddCircleLine } from "react-icons/ri";
import { LinkText } from "../../../components/custom/Text/Text";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import SelectleftLabel from "../../../components/custom/SelectLeftLabel/SelectLeftLabel";
import { useDispatch, useSelector } from "react-redux";
import { getVendors } from "../../../redux/vendors/reducer";
import { getBillingItems } from "../../../redux/billing-items/reducer";
import { createBill, reset as billsReset } from "../../../redux/bills/reducer";
import calculateAmount from "../../../utils/calculateAmount";
import { toast } from "react-toastify";
import Spinner from "../../../components/custom/Spinner/Spinner";

export default function AddBill() {
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [dueDate, setDueDate] = useState("");
  const [showSelectItem, setShowSelectItem] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [notes, setNotes] = useState("");

  const theme = useTheme();
  const dispatch = useDispatch();

  const {
    vendors,
    billingItems,
    vendorsLoading,
    billingItemsLoading,
    message,
    error,
    billCreated,
  } = useSelector((state) => ({
    vendors: state.vendors.vendors,
    billingItems: state.billingItems.billingItems,
    vendorsLoading: state.vendors.loading,
    billingItemsLoading: state.billingItems.loading,
    error: state.bills.error,
    message: state.bills.message,
    billCreated: state.bills.billCreated,
  }));

  const handleVendorSelect = (selected) => {
    setSelectedVendor(selected);
  };

  const handleSelectItem = (listItem) => {
    setSelectedItems((prev) => [
      ...prev,
      { listItem: listItem, quantity: 1, price: listItem.price },
    ]);

    setShowSelectItem(false);
  };

  const updateQuantity = (itemId, newQuantity) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) => {
        if (item.listItem._id === itemId) {
          return {
            ...item,
            quantity: newQuantity <= 0 ? 1 : parseInt(newQuantity),
          };
        }
        return item;
      })
    );
  };

  const updatePrice = (itemId, price) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) => {
        if (item.listItem._id === itemId) {
          return {
            ...item,
            price,
          };
        }
        return item;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createBill({
        dueAt: dueDate,
        total: calculateAmount(selectedItems),
        amountDue: calculateAmount(selectedItems),
        notes,
        vendor: selectedVendor._id,
        items: selectedItems,
      })
    );
  };

  useEffect(() => {
    if (billCreated) {
      toast.success(message);

      setSelectedItems([]);
      setNotes("");
      setSelectedVendor(null);
      setShowSelectItem(false);
      dispatch(billsReset());
    }
  }, [billCreated, message, dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  useEffect(() => {
    dispatch(getVendors());
    dispatch(getBillingItems());
  }, [dispatch]);

  return (
    <PageLayout>
      <Header pageTitle="Add Bill" />
      {vendorsLoading && billingItemsLoading ? (
        <Spinner />
      ) : (
        <InvoiceContainer>
          <InputsContainer>
            <div
              style={{
                //   paddingBottom: 10,
                marginBottom: 10,
              }}
            >
              <SelectleftLabel
                label="Vendor"
                placeholder="Select vendors"
                items={vendors}
                accessor="name"
                value={selectedVendor?.name}
                onItemSelect={handleVendorSelect}
              />
            </div>
            <InputLeftLabel label="Bill #" value="Auto Generated" disabled />

            <InputLeftLabel
              label="Date"
              mt={10}
              value="Auto Generated"
              disabled
            />

            <InputLeftLabel
              label="Payment due"
              mt={10}
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </InputsContainer>

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
                  <div style={{ display: "flex" }}>
                    <SelectleftLabel
                      value={listItem.name}
                      items={billingItems}
                      accessor={"name"}
                      placeholder="Choose..."
                      onItemSelect={handleSelectItem}
                    />
                  </div>
                </TData>
                <TData>
                  <OutlineCustomInput
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      updateQuantity(listItem._id, e.target.value)
                    }
                  />
                </TData>
                <TData>
                  <OutlineCustomInput
                    type="number"
                    value={price}
                    onChange={(e) => updatePrice(listItem._id, e.target.value)}
                  />
                </TData>
                <TData>${price}</TData>
              </TRow>
            ))}

            {/* ADD ITEM ROW */}
            <TRow>
              <TData>
                {showSelectItem ? (
                  <SelectleftLabel
                    items={billingItems}
                    accessor={"name"}
                    placeholder="Choose..."
                    onItemSelect={handleSelectItem}
                  />
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: 10,
                    }}
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
              <span>${calculateAmount(selectedItems)}</span>
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
              <strong>${calculateAmount(selectedItems)}</strong>
            </div>
          </div>
          <div>
            <strong style={{ color: theme.colors.labels, fontSize: 14 }}>
              Notes / Terms
            </strong>
            <textarea
              placeholder="Enter notes or terms of service that are visible to your customers"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{
                width: "100%",
                border: "none",
                resize: "none",
                outline: "none",
                marginTop: 10,
                height: "100px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <CustomButton width={200} outline mr={10}>
              Cancel
            </CustomButton>
            <CustomButton width={200} onClick={handleSubmit}>
              Save
            </CustomButton>
          </div>
        </InvoiceContainer>
      )}
    </PageLayout>
  );
}
