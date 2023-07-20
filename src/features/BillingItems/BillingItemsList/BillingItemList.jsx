import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import { Content, ButtonsContainer } from "./BillingItemList.styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  deleteBillingItem,
  getBillingItems,
  reset as billingItemsReset,
} from "../../../redux/billing-items/reducer";
import { toast } from "react-toastify";
import {
  Table,
  TData,
  TRow,
  THead,
} from "../../../components/custom/CustomTable/CustomTable.styles";
import Spinner from "../../../components/custom/Spinner/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTheme } from "styled-components";

import Modal from "../../../components/custom/Modal/Modal";

export default function BillingItemsList() {
  const [productId, setProductId] = useState( null );
  const [deleteModal, setDeleteModal] = useState( false );

  const closeDeleteModal = () => {
    setProductId( null );
    setDeleteModal( false );
  };

  const openModal = ( id ) => {
    setProductId( id );
    setDeleteModal( true );
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  const { billingItems, loading, error, billingItemDeleted, message } =
    useSelector( ( state ) => ( {
      billingItems: state.billingItems.billingItems,
      billingItemDeleted: state.billingItems.billingItemDeleted,
      loading: state.billingItems.loading,
      error: state.billingItems.error,
      message: state.billingItems.message,
    } ) );

  const handleDelete = () => {
    dispatch( deleteBillingItem( productId ) );
    closeDeleteModal();
  };

  useEffect( () => {
    if ( billingItemDeleted ) {
      toast.success( message );
      dispatch( billingItemsReset() );
      dispatch( getBillingItems() );
    }
  }, [billingItemDeleted, message, dispatch] );

  useEffect( () => {
    dispatch( getBillingItems() );
  }, [dispatch] );

  useEffect( () => {
    if ( error ) toast.error( error, { toastId: "billing-items-error" } );
  }, [error] );

  return (
    <>
      <PageLayout>
        <Header pageTitle="Billing Parts">
          <CustomButton
            width={200}
            onClick={() => navigate( "/billing-products/new" )}
          >
            Add New Part
          </CustomButton>
        </Header>

        <Content>
          {loading ? (
            <Spinner />
          ) : (
            <Table mt={40}>
              <TRow>
                <THead>Name</THead>
                <THead>Price</THead>
                <THead align="end">Actions</THead>
              </TRow>

              {billingItems?.map( ( item ) => (
                <TRow key={item._id}>
                  <TData>{item.name}</TData>
                  <TData>${item.price}</TData>
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
                      onClick={() =>
                        navigate( "/billing-products/edit/" + item._id )
                      }
                    />
                    <RiDeleteBin6Line
                      size={20}
                      color={theme.colors.primary}
                      onClick={() => openModal( item._id )}
                    />
                  </TData>
                </TRow>
              ) )}
            </Table>
          )}
        </Content>
      </PageLayout>
      <Modal
        title="Delete product?"
        open={deleteModal}
        onClose={closeDeleteModal}
      >
        <p>Are you sure you want to delete this product?</p>
        <p
          style={{
            padding: 10,
            color: "red",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          Note: All bills associated to this product will also be deleted.
        </p>

        <ButtonsContainer>
          <CustomButton
            width={100}
            outline
            mr={10}
            onClick={() => {
              setDeleteModal( false );
              setProductId( null );
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
