import { useDispatch, useSelector } from "react-redux";
import PageLayout from "../../components/Layout/PageLayout/PageLayout";
import Header from "../../components/custom/Header/Header";
import Select from "../../components/custom/Select/Select";
import Basic from "./components/Charts/Basic";
import PieChart from "./components/Charts/PieChart";
import ShortTable from "./components/ShortTables/ShortTables";
import { Content, Section } from "./styles";
import { useEffect } from "react";
import { getCashFlowData, getYearlyData } from "../../redux/invoices/reducer";
import { getExpenseBreakdown } from "../../redux/expense-category/reducer";
export default function Dashboard() {
  const dispatch = useDispatch();

  const { monthlyData, cashFlowData, breakdown } = useSelector((state) => ({
    monthlyData: state.invoices.monthlyData,
    cashFlowData: state.invoices.cashFlowData,
    breakdown: state.expenseCategories.breakdown,
  }));
  useEffect(() => {
    dispatch(getYearlyData());
    dispatch(getCashFlowData());
    dispatch(getExpenseBreakdown());
  }, [dispatch]);

  return (
    <PageLayout>
      <Header pageTitle="Dashboard">
        <Select label="Create a new" />
      </Header>
      <Content>
        <Section>
          <Basic
            text="Cash Flow"
            monthlyData={cashFlowData}
            subtitle="Cash coming in and going out of your business."
          />
          <ShortTable />
        </Section>
        <Section>
          <Basic
            monthlyData={monthlyData}
            text="Profit And Loss "
            subtitle="Income and expenses only (includes unpaid invoices and bills)."
          />
          <PieChart categoryBreakdown={breakdown} />
        </Section>
      </Content>
    </PageLayout>
  );
}
