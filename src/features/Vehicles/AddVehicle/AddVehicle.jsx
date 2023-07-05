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
        <InputLeftLabel label="Make" mt={20} />
        <InputLeftLabel label="Model" mt={20} />

        <InputLeftLabel label="Daily" mt={20} dollar />
        <InputLeftLabel label="Weekly" mt={20} dollar />
        <InputLeftLabel label="Monthly" mt={20} dollar />

        <InputLeftLabel label="Registration Number" mt={20} />
        <TextArea row label="Description" mt={20} />
        <InputLeftLabel label="Upload images" mt={20} type="file" multiple />

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
