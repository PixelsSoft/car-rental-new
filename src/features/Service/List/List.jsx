import React, { useEffect } from "react";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import { Content } from "./List.styles";
import {
  Table,
  TData,
  THead,
  TRow,
} from "../../../components/custom/CustomTable/CustomTable.styles";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../../redux/service/reducer";
import formatToDate from "../../../utils/formatToDate";
import { toast } from "react-toastify";
import Spinner from "../../../components/custom/Spinner/Spinner";

export default function ServicesList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { services, loading, error } = useSelector((state) => ({
    services: state.services.services,
    loading: state.services.loading,
    error: state.services.error,
  }));

  const headers = ["Item", "Date", "Return Date", "Description"];

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <PageLayout>
      <Header pageTitle="Service">
        <CustomButton
          outline
          width={150}
          onClick={() => navigate("/services/add")}
        >
          Add new
        </CustomButton>
      </Header>

      <Content>
        {loading ? (
          <Spinner />
        ) : (
          <Table mt={10}>
            <TRow>
              {headers.map((header) => (
                <THead>{header}</THead>
              ))}
            </TRow>

            {services?.map((service) => (
              <TRow>
                <TData>{service?.item.make}</TData>
                <TData>{formatToDate(service.createdAt)}</TData>
                <TData>{formatToDate(service.returnDate)}</TData>
                <TData>{service.description}</TData>
              </TRow>
            ))}
          </Table>
        )}
      </Content>
    </PageLayout>
  );
}
