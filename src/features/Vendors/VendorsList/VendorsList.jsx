import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import { Content, ButtonsContainer } from "./VendorsList.styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteVendor, getVendors } from "../../../redux/vendors/reducer";
import {
  Table,
  TData,
  TRow,
  THead,
} from "../../../components/custom/CustomTable/CustomTable.styles";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTheme } from "styled-components";
import { LinkText } from "../../../components/custom/Text/Text";
import Spinner from "../../../components/custom/Spinner/Spinner";
import Modal from "../../../components/custom/Modal/Modal";
import { toast } from "react-toastify";

export default function VendorsList() {
  const [vendorId, setVendorId] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const theme = useTheme();

  const { vendors, loading, vendorDeleted, message } = useSelector((state) => ({
    vendors: state.vendors.vendors,
    loading: state.vendors.loading,
    vendorDeleted: state.vendors.vendorDeleted,
    message: state.vendors.message,
    error: state.vendors.error,
  }));

  const closeDeleteModal = () => {
    setVendorId(null);
    setDeleteModal(false);
  };

  const openModal = (id) => {
    setVendorId(id);
    setDeleteModal(true);
  };

  const handleDelete = () => {
    dispatch(deleteVendor(vendorId));
    closeDeleteModal();
  };

  useEffect(() => {
    dispatch(getVendors());
  }, [dispatch]);

  useEffect(() => {
    if (vendorDeleted) {
      toast.success(message, { toastId: "vendor-deleted" });
      dispatch(getVendors());
    }
  }, [vendorDeleted, dispatch, message]);

  return (
    <>
      <PageLayout>
        <Header pageTitle="Vendors">
          <CustomButton outline width={200} mr={10}>
            Import from CSV
          </CustomButton>
          <CustomButton width={200} onClick={() => navigate("/vendors/add")}>
            Add a vendor
          </CustomButton>
        </Header>

        <Content>
          {loading ? (
            <Spinner />
          ) : (
            <Table mt={40}>
              <TRow>
                <THead>Name</THead>
                <THead>Email</THead>
                <THead>Description</THead>
                <THead align="end">Actions</THead>
              </TRow>

              {vendors.map((vendor) => (
                <TRow key={vendor._id}>
                  <TData>{vendor.name}</TData>
                  <TData>{vendor.email}</TData>
                  <TData>{vendor.description}</TData>
                  <TData
                    align="end"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <LinkText>Create Bill</LinkText>
                    <AiOutlineEdit
                      size={24}
                      style={{ marginRight: 10, marginLeft: 10 }}
                      color={theme.colors.primary}
                      onClick={() => navigate(`/vendors/edit/${vendor._id}`)}
                    />
                    <RiDeleteBin6Line
                      size={20}
                      color={theme.colors.primary}
                      onClick={() => openModal(vendor._id)}
                    />
                  </TData>
                </TRow>
              ))}
            </Table>
          )}
        </Content>
      </PageLayout>
      <Modal
        title="Delete vendor?"
        open={deleteModal}
        onClose={closeDeleteModal}
      >
        <p>Are you sure you want to delete this vendor?</p>
        <p
          style={{
            padding: 10,
            color: "red",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          Note: All bills associated to this vendor will also be deleted.
        </p>

        <ButtonsContainer>
          <CustomButton width={100} outline mr={10} onClick={closeDeleteModal}>
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
