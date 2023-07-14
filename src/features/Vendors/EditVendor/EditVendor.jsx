import { useEffect, useState } from "react";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import InputLeftLabel from "../../../components/custom/InputLeftLabel/InputLeftLabel";
import TextArea from "../../../components/custom/TextArea/TextArea";
import { Content, Form } from "./EditVendor.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getVendorById,
  editVendor,
  reset as vendorReset,
} from "../../../redux/vendors/reducer";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../../components/custom/Spinner/Spinner";

export default function EditVendor() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const { vendorUpdated, error, message, loading, vendor } = useSelector(
    (state) => ({
      vendorUpdated: state.vendors.vendorUpdated,
      message: state.vendors.message,
      error: state.vendors.error,
      loading: state.vendors.loading,
      vendor: state.vendors.vendor,
    })
  );

  const handleEditVendor = () => {
    dispatch(editVendor({ id, name, description }));
  };

  useEffect(() => {
    if (vendorUpdated) {
      toast.success(message, { toastId: "vendor-updated" });
      dispatch(vendorReset());
    }
  }, [dispatch, vendorUpdated, message]);

  useEffect(() => {
    dispatch(getVendorById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (vendor) {
      setName(vendor.name);
      setDescription(vendor.description);
    }
  }, [vendor]);

  useEffect(() => {
    if (error) toast.error(error, { toastId: "vendor-error" });
  }, [error]);

  return (
    <PageLayout>
      <Header pageTitle="Edit Vendor"></Header>

      <Content>
        {loading ? (
          <Spinner />
        ) : (
          <Form onSubmit={handleEditVendor}>
            <InputLeftLabel
              label="Vendor Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextArea
              row
              label="Description"
              width={250}
              mt={20}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div
              style={{
                marginTop: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomButton
                type="button"
                outline
                width={200}
                mr={10}
                onClick={() => navigate("/vendors")}
              >
                Cancel
              </CustomButton>
              <CustomButton width={200} type="submit">
                Save
              </CustomButton>
            </div>
          </Form>
        )}
      </Content>
    </PageLayout>
  );
}
