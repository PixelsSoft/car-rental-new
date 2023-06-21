import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import { Content } from "./CustomersList.styles";
import OutlineCustomInput from "../../../components/custom/OutlineCustomInput/OutlineCustomInput";
import * as FaIcons from "react-icons/fa";
import { useTheme } from "styled-components";
import CustomTable from "../../../components/custom/CustomTable/CustomTable";
import { useNavigate } from "react-router-dom";

export default function CustomersList() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
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
              35
            </strong>{" "}
            customers found
          </span>
        </div>

        <CustomTable mt={20} viewRoute="/customers/1" />
      </Content>
    </PageLayout>
  );
}
