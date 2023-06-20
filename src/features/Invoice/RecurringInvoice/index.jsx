import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import CustomBreadcumb from "../../../components/custom/CustomBreadcumb/CustomBreadcumb";
import { Content } from "./styles";
import SelectWithSearch from "../../../components/custom/SelectWithSearch/SelectWithSearch";
import CustomTable from "../../../components/custom/CustomTable/CustomTable";

export default function RecurringInvoice() {
  return (
    <PageLayout>
      <Header pageTitle="Recurring Invoice">
        <CustomButton width={250}>Create a recurring invoice</CustomButton>
      </Header>

      <Content>
        <SelectWithSearch
          placeholder="All Customers"
          width={300}
          mt={20}
          mb={20}
        />

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomBreadcumb
            items={[
              { id: 1, title: "Active", count: 15 },
              { id: 2, title: "Draft", count: 15 },
              { id: 3, title: "All recurring invoices" },
            ]}
          />
        </div>

        <CustomTable mt={20} />
      </Content>
    </PageLayout>
  );
}
