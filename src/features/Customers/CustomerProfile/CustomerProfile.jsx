import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import Select from "../../../components/custom/Select/Select";
import CustomerCard from "./components/CustomerCard/CustomerCard";
import CustomerStats from "./components/CustomerStats/CustomerStats";
import { Content, Left, Right } from "./styles";

import CustomTable from "../../../components/custom/CustomTable/CustomTable";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../../redux/customers/reducer";
import Spinner from "../../../components/custom/Spinner/Spinner";
import { toast } from "react-toastify";

export default function CustomerProfile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { customerProfile, error, loading } = useSelector((state) => ({
    customerProfile: state.customers.customerProfile,
    error: state.customers.error,
    loading: state.customers.loading,
  }));

  useEffect(() => {
    dispatch(getCustomer(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <PageLayout>
      <Header pageTitle={customerProfile?.name}>
        <CustomButton outline width={200} mr={10}>
          Edit Customer
        </CustomButton>
        <Select label="More Actions" />
      </Header>

      <Content>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Left>
              <CustomerCard />
            </Left>
            <Right>
              <CustomerStats />

              <div id="table-wrapper">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 20,
                  }}
                >
                  <h3 style={{ marginBottom: 20 }}>Unpaid Invoices</h3>
                  <CustomButton width={200}>Create invoice</CustomButton>
                </div>
                <CustomTable />
              </div>
            </Right>
          </>
        )}
      </Content>
    </PageLayout>
  );
}
