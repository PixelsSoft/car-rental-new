import PageLayout from "../../components/Layout/PageLayout/PageLayout";
import Header from "../../components/custom/Header/Header";
import Select from "../../components/custom/Select/Select";

export default function Dashboard() {
  return (
    <PageLayout>
      <Header pageTitle="Dashboard">
        <Select label="Create a new" />
      </Header>
    </PageLayout>
  );
}
