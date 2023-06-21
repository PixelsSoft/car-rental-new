import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import InputLeftLabel from "../../../components/custom/InputLeftLabel/InputLeftLabel";
import TextArea from "../../../components/custom/TextArea/TextArea";
import { Content } from "./AddVehicle.styles";

export default function AddVehicle() {
  return (
    <PageLayout>
      <Header pageTitle="Add Vehicle" />

      <Content>
        <InputLeftLabel label="Name" mt={20} />
        <InputLeftLabel label="Price" mt={20} />
        <InputLeftLabel label="Registration Number" mt={20} />
        <InputLeftLabel label="Type" mt={20} />
        <InputLeftLabel label="Capacity" mt={20} />
        <TextArea row label="Description" mt={20} />

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <CustomButton outline width={200} mr={10}>
            Cancel
          </CustomButton>
          <CustomButton width={200}>Save</CustomButton>
        </div>
      </Content>
    </PageLayout>
  );
}
