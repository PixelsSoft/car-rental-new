import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import { Content, ButtonsContainer } from "./CustomersList.styles";
import OutlineCustomInput from "../../../components/custom/OutlineCustomInput/OutlineCustomInput";
import * as FaIcons from "react-icons/fa";
import { useTheme } from "styled-components";
import {
  Table,
  TData,
  THead,
  TRow,
  TDataAction,
} from "../../../components/custom/CustomTable/CustomTable.styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getCustomers,
  deleteCustomer,
  reset,
} from "../../../redux/customers/reducer";
import Spinner from "../../../components/custom/Spinner/Spinner";
import TableActionDropdown from "../../../components/custom/TableActionDropdown/TableActionDropdown";
import { toast } from "react-toastify";
import Modal from "../../../components/custom/Modal/Modal";

export default function CustomersList() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [customerId, setCustomerId] = useState(null);

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openModal = (id) => {
    setCustomerId(id);
    setDeleteModal(true);
  };

  const closeModal = () => {
    setCustomerId(null);
    setDeleteModal(false);
  };

  const { customers, loading, error, customerDeleted, message } = useSelector(
    (state) => ({
      customers: state.customers.customers,
      error: state.customers.error,
      loading: state.customers.loading,
      customerDeleted: state.customers.customerDeleted,
      message: state.customers.message,
    })
  );

  const headers = ["Name", "Email", "Phone", "Balance | Overdue", "Actions"];

  const handleEdit = (id) => navigate("/customers/edit/" + id);

  const handleDeleteCustomer = () => {
    dispatch(deleteCustomer(customerId));
    closeModal();
  };

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  useEffect(() => {
    if (customerDeleted) {
      dispatch(reset());
      toast.success(message);
      dispatch(getCustomers());
    }
  }, [dispatch, customerDeleted, message]);

  return (
    <>
      <PageLayout>
        <Header pageTitle="Customers">
          <CustomButton width={200} mr={10}>
            Import from CSV
          </CustomButton>
          <CustomButton width={200} onClick={() => navigate("/customers/add")}>
            Add a customer
          </CustomButton>
        </Header>

        <Content>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <div id="search-container">
                <OutlineCustomInput
                  mr={10}
                  placeholder="Search by name"
                  icon={<FaIcons.FaSearch size={20} />}
                  width={400}
                />
                <span>
                  <strong
                    style={{
                      color: theme.colors.primary,
                      textDecoration: "underline",
                    }}
                  >
                    {customers.length}
                  </strong>{" "}
                  customers found
                </span>
              </div>

              <Table mt={10}>
                <TRow>
                  {headers.map((header) => (
                    <THead>{header}</THead>
                  ))}
                </TRow>

                {customers.map((customer) => (
                  <TRow>
                    <TData>{customer.name}</TData>
                    <TData>{customer.email}</TData>
                    <TData>{customer.phoneNumber}</TData>
                    <TData>$100</TData>
                    <TDataAction>
                      <div>
                        <TableActionDropdown
                          viewRoute={`/customers/${customer._id}`}
                          onEdit={() => handleEdit(customer._id)}
                          onDelete={() => openModal(customer._id)}
                        />
                      </div>
                    </TDataAction>
                  </TRow>
                ))}
              </Table>
            </>
          )}
        </Content>
      </PageLayout>
      <Modal open={deleteModal} onClose={closeModal} title="Delete customer?">
        <p style={{ padding: 10 }}>Are you sure you want to delete?</p>
        <p
          style={{
            padding: 10,
            color: "red",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          Note: All invoices related to this customer will also be deleted.
        </p>

        <ButtonsContainer>
          <CustomButton
            width={100}
            outline
            mr={10}
            type="button"
            onClick={closeModal}
          >
            Cancel
          </CustomButton>
          <CustomButton width={100} onClick={handleDeleteCustomer}>
            Yes
          </CustomButton>
        </ButtonsContainer>
      </Modal>
    </>
  );
}
