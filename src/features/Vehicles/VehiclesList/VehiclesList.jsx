import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import { Content, ButtonsContainer } from "./VehiclesList.styles";
import Image from 'react-bootstrap/Image';
import {
  Table,
  TData,
  TRow,
  THead,
} from "../../../components/custom/CustomTable/CustomTable.styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getItems,
  deleteItem,
  reset as itemsReset,
} from "../../../redux/items/reducer";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTheme } from "styled-components";
import Modal from "../../../components/custom/Modal/Modal";
import { toast } from "react-toastify";
import Spinner from "../../../components/custom/Spinner/Spinner";

export default function VehiclesList() {
  const [deleteModal, setDeleteModal] = useState( false );
  const [itemId, setItemId] = useState( null );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useTheme();

  const { items, itemDeleted, message, loading } = useSelector( ( state ) => ( {
    items: state.items.items,
    itemDeleted: state.items.itemDeleted,
    message: state.items.message,
    loading: state.items.loading,
  } ) );
  console.log( "items", items[6]?.images[0] );

  const handleDelete = () => {
    dispatch( deleteItem( itemId ) );
  };

  useEffect( () => {
    dispatch( getItems() );
  }, [dispatch] );

  useEffect( () => {
    if ( itemDeleted ) {
      toast.success( message );
      setDeleteModal( false );
      dispatch( itemsReset() );
      dispatch( getItems( message ) );
    }
  }, [dispatch, itemDeleted, message] );

  return (
    <>
      <PageLayout>
        <Header pageTitle="Vehicles">
          <CustomButton width={200} onClick={() => navigate( "/vehicles/add" )}>
            Add a vehicle
          </CustomButton>
        </Header>

        <Content>
          {loading ? (
            <Spinner />
          ) : (
            <Table mt={40}>
              <TRow>
                {/* <THead>Image</THead> */}
                <THead>Image</THead>
                <THead>Name</THead>
                <THead>Price per day</THead>
                <THead>Price per week</THead>
                <THead>Price per month</THead>
                <THead align="end">Actions</THead>
              </TRow>
              {items.map( ( item ) => (

                <TRow key={item._id}>
                  {item.images[0] === undefined ?
                    <TData>{"No Image Found"}</TData> :
                    <Image src={item.images[0]?.url} style={{ width: "40px", height: "40px" }} rounded />
                  }

                  <TData>{item.make}</TData>
                  <TData>${item.daily}</TData>
                  <TData>${item.weekly}</TData>
                  <TData>${item.monthly}</TData>
                  <TData
                    align="end"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <AiOutlineEdit
                      size={24}
                      style={{ marginRight: 10 }}
                      color={theme.colors.primary}
                      onClick={() => navigate( "/vehicles/edit/" + item._id )}
                    />
                    <RiDeleteBin6Line
                      size={20}
                      color={theme.colors.primary}
                      onClick={() => {
                        setDeleteModal( true );
                        setItemId( item._id );
                      }}
                    />
                  </TData>
                </TRow>
              ) )}
            </Table>
          )}
        </Content>
      </PageLayout>
      <Modal
        open={deleteModal}
        title="Delete item?"
        onClose={() => setDeleteModal( false )}
      >
        <p style={{ padding: 10 }}>Are you sure you want to delete?</p>
        <p
          style={{
            padding: 10,
            color: "red",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          Note: All invoices related to this product will also be deleted.
        </p>

        <ButtonsContainer>
          <CustomButton
            width={100}
            outline
            mr={10}
            onClick={() => {
              setDeleteModal( false );
              setItemId( null );
            }}
          >
            Cancel
          </CustomButton>
          <CustomButton width={100} onClick={handleDelete}>
            Yes
          </CustomButton>
        </ButtonsContainer>
      </Modal>
    </>
  );
}
