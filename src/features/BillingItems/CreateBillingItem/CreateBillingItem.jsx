import { useEffect, useState } from "react";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import InputLeftLabel from "../../../components/custom/InputLeftLabel/InputLeftLabel";
import TextArea from "../../../components/custom/TextArea/TextArea";
import { Content } from "./CreateBillingItem.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  createBillingItem,
  reset as billingItemsReset,
} from "../../../redux/billing-items/reducer";
import { toast } from "react-toastify";
import Spinner from "../../../components/custom/Spinner/Spinner";

export default function CreateBillingItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const { loading, error, message, billingItemCreated } = useSelector(
    (state) => ({
      loading: state.billingItems.loading,
      error: state.billingItems.error,
      message: state.billingItems.message,
      billingItemCreated: state.billingItems.billingItemCreated,
    })
  );

  const handleAddBillingItem = (e) => {
    e.preventDefault();
    dispatch(createBillingItem({ name, description, price }));
  };

  useEffect(() => {
    if (billingItemCreated) {
      toast.success(message, { toastId: "billing-item-created" });
      setName("");
      setDescription("");
      setPrice(0);
      dispatch(billingItemsReset());
    }
  }, [billingItemCreated, dispatch, message]);

  useEffect(() => {
    if (error) toast.error(error, "billing-item-error");
  }, [error]);

  return (
    <PageLayout>
      <Header pageTitle="Add new product" />

      <Content onSubmit={handleAddBillingItem}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <InputLeftLabel
              label="Name"
              mt={20}
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
            <InputLeftLabel
              label="Price"
              mt={20}
              dollar
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 50,
              }}
            >
              <CustomButton outline width={200} mr={10}>
                Cancel
              </CustomButton>
              <CustomButton width={200} type="submit">
                Save
              </CustomButton>
            </div>
          </>
        )}
      </Content>
    </PageLayout>
  );
}
