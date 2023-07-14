import { useEffect, useState } from "react";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import InputLeftLabel from "../../../components/custom/InputLeftLabel/InputLeftLabel";
import TextArea from "../../../components/custom/TextArea/TextArea";
import { Content } from "./EditBillingItem.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  reset as billingItemsReset,
  getBillingItemDetail,
  updateBillingItem,
} from "../../../redux/billing-items/reducer";
import { toast } from "react-toastify";
import Spinner from "../../../components/custom/Spinner/Spinner";
import { useParams } from "react-router-dom";

export default function EditBillingItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const { id } = useParams();

  const { loading, error, message, billingItemUpdated, item } = useSelector(
    (state) => ({
      loading: state.billingItems.loading,
      error: state.billingItems.error,
      message: state.billingItems.message,
      billingItemUpdated: state.billingItems.billingItemUpdated,
      item: state.billingItems.item,
    })
  );

  const handleEditBillingItem = (e) => {
    e.preventDefault();
    dispatch(updateBillingItem({ id, name, description, price }));
  };

  useEffect(() => {
    if (billingItemUpdated) {
      toast.success(message, { toastId: "billing-item-created" });
      //   setName("");
      //   setDescription("");
      //   setPrice(0);
      dispatch(billingItemsReset());
    }
  }, [billingItemUpdated, dispatch, message]);

  useEffect(() => {
    dispatch(getBillingItemDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (item) {
      setDescription(item.description);
      setName(item.name);
      setPrice(item.price);
    }
  }, [item]);

  useEffect(() => {
    if (error) toast.error(error, "billing-item-error");
  }, [error]);

  return (
    <PageLayout>
      <Header pageTitle="Edit product" />

      <Content onSubmit={handleEditBillingItem}>
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
