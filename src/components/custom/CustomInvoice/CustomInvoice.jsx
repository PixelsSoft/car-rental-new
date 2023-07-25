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
import calculateAmount from "../../../utils/calculateAmount";
import SelectLeftLabel from "../../../components/custom/SelectLeftLabel/SelectLeftLabel";
import {
  createInvoice,
  editInvoice,
  reset as invoicesReset,
} from "../../../redux/invoices/reducer";
import CustomButton from "../CustomButton/CustomButton";
import { toast } from "react-toastify";
import Spinner from "../../../components/custom/Spinner/Spinner";
import { useNavigate } from "react-router-dom";


export default function CustomInvoice( {
  selectedItems,
  setSelectedItems,
  selectedCustomer,
  setSelectedCustomer,
  dueDate,
  setDueDate,

  notes,
  setNotes,
  isRecurring,
  setIsRecurring,
  forEditInvoice,
} ) {
  const recurringList = [
    { id: 1, description: "Within 7 Days ", value: 7 },
    { id: 2, description: "Within 14 Days", value: 14 },
    { id: 3, description: "Within 30 Days", value: 30 },
    { id: 4, description: "Within 45 Days", value: 45 },
    { id: 5, description: "Within 60 Days", value: 60 },
    { id: 6, description: "Within 90 Days", value: 90 },
  ];



  const [showAddCustomer, setShowAddCustomer] = useState( false );
  const [showSelectItem, setShowSelectItem] = useState( false );
  const [dueWithin, setDueWithin] = useState( recurringList[0] || {} );




  /////// Get current date////
  const currentDate = new Date().toISOString().slice( 0, 10 );
  const [invoiceDate, setInvoiceDate] = useState( currentDate );


  const toggleRecurring = () => setIsRecurring( !isRecurring );

  /* 
    invoice states
  */
  //   const [poSoNumber, setPoSoNumber] = useState("");

  const toggle = () => setShowAddCustomer( !showAddCustomer );
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    customers,
    items,
    invoiceCreated,
    invoiceLoading,
    invoiceEdited,
    message,
    invoices
  } = useSelector( ( state ) => ( {
    customers: state.customers.customers,
    loading: state.customers.loading,
    items: state.items.items,
    invoiceCreated: state.invoices.invoiceCreated,
    invoiceLoading: state.invoices.loading,
    message: state.invoices.message,
    invoiceEdited: state.invoices.invoiceEdited,
    invoices: state.invoices.invoices,
  } ) );

  const handleItemSelect = ( listItem ) => {
    setSelectedItems( ( prev ) => [
      ...prev,
      { listItem: listItem, quantity: 1, price: listItem.daily },
    ] );
    setShowSelectItem( false );
  };

  const updateQuantity = ( itemId, newQuantity ) => {
    setSelectedItems( ( prevItems ) =>
      prevItems.map( ( item ) => {
        if ( item.listItem._id === itemId ) {
          return {
            ...item,
            quantity: newQuantity <= 0 ? 1 : parseInt( newQuantity ),
          };
        }
        return item;
      } )
    );
  };

  const updatePrice = ( itemId, price ) => {
    setSelectedItems( ( prevItems ) =>
      prevItems.map( ( item ) => {
        if ( item.listItem._id === itemId ) {
          return {
            ...item,
            price,
          };
        }
        return item;
      } )
    );
  };

  const handleDueWithinSelect = ( item ) => setDueWithin( item );

  const handleCreateInvoice = () => {
    if ( selectedItems.length < 1 )
      return toast.error( "You have not selected any items." );

    if ( !selectedCustomer ) return toast.error( "Please select a customer first" );
    dispatch(
      createInvoice( {
        dueAt: dueDate,
        total: calculateAmount( selectedItems ),
        amountDue: calculateAmount( selectedItems ),
        notes,
        customer: selectedCustomer._id,
        items: selectedItems,
        isRecurring,
        nextInvoice: dueWithin.value && isRecurring ? dueWithin.value : 0,
      } )
    );
    navigate("/invoices");
  };

  const handleEditInvoice = () => {
    if ( selectedItems.length < 1 )
      return toast.error( "You have not selected any items." );

    if ( !selectedCustomer ) return toast.error( "Please select a customer first" );
    dispatch(
      editInvoice( {
        id: forEditInvoice._id,
        dueAt: dueDate,
        total: calculateAmount( selectedItems ),
        amountDue:
          calculateAmount( selectedItems ) -
          forEditInvoice?.paymentRecords.reduce(
            ( acc, record ) => acc + record.amount,
            0
          ),
        notes,
        customer: selectedCustomer._id,
        items: selectedItems,
        isRecurring,
        nextInvoice: dueWithin.value && isRecurring ? dueWithin.value : 0,
      } )
    );
  };

  useEffect( () => {
    dispatch( getCustomers() );
    dispatch( getItems() );
  }, [dispatch] );

  const resetFields = () => {
    setSelectedCustomer( null );
    setSelectedItems( [] );
    setIsRecurring( false );
    setShowAddCustomer( false );
    setNotes( "" );
  };

  useEffect( () => {
    if ( invoiceCreated ) {
      dispatch( invoicesReset() );
      resetFields();
      toast.success( message, { toastId: "invoice-created" } );
    }

    if ( invoiceEdited ) {
      dispatch( invoicesReset() );
      resetFields();
      toast.success( message, { toastId: "invoice-updated" } );
      navigate( "/invoices" );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invoiceCreated, dispatch, invoiceEdited] );

  return invoiceLoading ? (
    <Spinner />
  ) : (
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
                onClick={() => setSelectedCustomer( null )}
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
                onItemSelect={( customer ) => setSelectedCustomer( customer )}
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
            value={invoices.length +1}
            disabled
          />
          {/* <InputLeftLabel
            label="P.O./S.O. number"
            mt={10}
            value={poSoNumber}
            onChange={(e) => setPoSoNumber(e.target.value)}
          /> */}
          <InputLeftLabel
            label="Agreement date"
            mt={10}
            type="date"
            value={invoiceDate}
            onChange={( e ) => setInvoiceDate( e.target.value )}

          // value="Auto Generated"
          // disabled
          />
          {isRecurring ? (
            <SelectLeftLabel
              label="Due Within"
              placeholder="Select Due Within"
              mt={10}
              width={120}
              items={recurringList}
              accessor="description"
              value={dueWithin?.description}
              onItemSelect={handleDueWithinSelect}
            />
          ) : (
            <InputLeftLabel
              label="Payment due"
              mt={10}
              value={dueDate}
              type="date"
              onChange={( e ) => setDueDate( e.target.value )}
            />
          )}

          <div style={{ marginTop: 14, textAlign: "end" }}>
            <LinkText style={{ fontSize: 14 }} onClick={toggleRecurring}>
              {isRecurring
                ? "Change to normal invoice"
                : "Change to recurring invoice"}
            </LinkText>
          </div>
        </Right>
      </CustomerDetailsContainer>

      <InvoiceTable>
        <TRow>
          <THead size={60}>Vehicle</THead>
          <THead>Days</THead>
          <THead>Price</THead>
          <THead>Amount</THead>
          <THead></THead>
        </TRow>
        {selectedItems.map( ( { listItem, quantity, price } ) => (
          <TRow>
            <TData>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>{listItem.make}</span>
                <OutlineCustomInput
                  value={listItem.description}
                  disabled
                  width={250}
                  ml={30}
                />
              </div>
            </TData>
            <TData>
              <OutlineCustomInput
                type="number"
                width={60}
                value={quantity}
                onChange={( e ) => updateQuantity( listItem._id, e.target.value )}
              />
            </TData>
            <TData>
              <OutlineCustomInput
                type="number"
                value={price}
                onChange={( e ) => updatePrice( listItem._id, e.target.value )}
              />
            </TData>
            <TData>${price}</TData>
          </TRow>
        ) )}

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
                <LinkText ml={5} onClick={() => setShowSelectItem( true )}>
                  Add an Vehicle
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
          <span>${calculateAmount( selectedItems )}</span>
        </div>
        {forEditInvoice && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "20%",
              marginTop: 10,
            }}
          >
            <span>Previous Payments:</span>
            <span style={{ display: "flex" }}>
              -$
              {forEditInvoice?.paymentRecords.reduce( ( acc, record ) => {
                return acc + record.amount;
              }, 0 )}
            </span>
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "20%",
            marginTop: 10,
          }}
        >
          <strong>Total</strong>
          {forEditInvoice ? (
            <strong>
              $
              {calculateAmount( selectedItems ) -
                forEditInvoice?.paymentRecords.reduce( ( acc, record ) => {
                  return acc + record.amount;
                }, 0 )}
            </strong>
          ) : (
            <strong>${calculateAmount( selectedItems )}</strong>
          )}
          {/* <strong>
            $
            {calculateAmount(selectedItems) -
              forEditInvoice?.paymentRecords.reduce((acc, record) => {
                return acc + record.amount;
              }, 0)}
          </strong> */}
        </div>
      </div>
      <div>
        <strong style={{ color: theme.colors.labels, fontSize: 14 }}>
          Notes / Terms
        </strong>
        <textarea
          placeholder="Enter notes or terms of service that are visible to your customers"
          value={notes}
          onChange={( e ) => setNotes( e.target.value )}
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
        <CustomButton
          width={200}
          onClick={forEditInvoice ? handleEditInvoice : handleCreateInvoice}
        >
          Save
        </CustomButton>
      </div>
    </InvoiceContainer>
  );
}
