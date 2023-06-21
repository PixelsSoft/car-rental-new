import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import Select from "../../../components/custom/Select/Select";
import CustomerCard from "./components/CustomerCard/CustomerCard";
import CustomerStats from "./components/CustomerStats/CustomerStats";
import { Content, Left, Right } from "./styles";

import CustomTable from "../../../components/custom/CustomTable/CustomTable";

export default function CustomerProfile() {
  return (
    <PageLayout>
      <Header pageTitle="Anishka Mackey">
        <CustomButton outline width={200} mr={10}>
          Edit Customer
        </CustomButton>
        <Select label="More Actions" />
      </Header>

      <Content>
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
      </Content>
    </PageLayout>
  );
}
