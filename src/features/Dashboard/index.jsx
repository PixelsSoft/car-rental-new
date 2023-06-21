import PageLayout from "../../components/Layout/PageLayout/PageLayout";
import Header from "../../components/custom/Header/Header";
import Select from "../../components/custom/Select/Select";
import Basic from "./components/Charts/Basic";
import PieChart from "./components/Charts/PieChart";
import ShortTable from "./components/ShortTables/ShortTables";
import { Content, Section } from "./styles";

export default function Dashboard() {
  return (
    <PageLayout>
      <Header pageTitle="Dashboard">
        <Select label="Create a new" />
      </Header>

      <Content>
        <Section>
          <Basic />
          <ShortTable />
        </Section>
        <Section>
          <Basic />
          <PieChart />
        </Section>
      </Content>
    </PageLayout>
  );
}
