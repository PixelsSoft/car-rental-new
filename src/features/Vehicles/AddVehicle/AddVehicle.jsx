import { useEffect, useState } from "react";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import InputLeftLabel from "../../../components/custom/InputLeftLabel/InputLeftLabel";
import TextArea from "../../../components/custom/TextArea/TextArea";
import { Content } from "./AddVehicle.styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createNewItem,
  reset as itemsReset,
} from "../../../redux/items/reducer";
import { toast } from "react-toastify";
import Spinner from "../../../components/custom/Spinner/Spinner";

export default function AddVehicle() {
  const navigate = useNavigate();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [daily, setDaily] = useState(0);
  const [weekly, setWeekly] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  const dispatch = useDispatch();
  const { newItemCreated, message, loading } = useSelector((state) => ({
    newItemCreated: state.items.newItemCreated,
    message: state.items.message,
    loading: state.items.loading,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("make", make);
    formData.append("model", model);
    formData.append("daily", daily);
    formData.append("weekly", weekly);
    formData.append("monthly", monthly);
    formData.append("registrationNumber", registrationNumber);
    formData.append("description", description);
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    dispatch(createNewItem(formData));
  };

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const reset = () => {
    setMake("");
    setModel("");
    setDaily(0);
    setWeekly(0);
    setMonthly(0);
    setRegistrationNumber("");
    setDescription("");
    setFiles([]);
  };

  useEffect(() => {
    if (newItemCreated) {
      reset();
      toast.success(message);
      dispatch(itemsReset());
    }
  }, [newItemCreated, message, dispatch]);

  return (
    <PageLayout>
      <Header pageTitle="Add Vehicle" />

      <Content onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <InputLeftLabel
              label="Make"
              mt={20}
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
            <InputLeftLabel
              label="Model"
              mt={20}
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />

            <InputLeftLabel
              label="Daily"
              mt={20}
              dollar
              value={daily}
              onChange={(e) => setDaily(e.target.value)}
            />
            <InputLeftLabel
              label="Weekly"
              mt={20}
              dollar
              value={weekly}
              onChange={(e) => setWeekly(e.target.value)}
            />
            <InputLeftLabel
              label="Monthly"
              mt={20}
              dollar
              value={monthly}
              onChange={(e) => setMonthly(e.target.value)}
            />

            <InputLeftLabel
              label="VIN"
              mt={20}
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />
            <TextArea
              row
              label="Description"
              mt={20}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <InputLeftLabel
              label="Upload images"
              mt={20}
              type="file"
              name="images"
              multiple
              onChange={handleFileChange}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 50,
              }}
            >
              <CustomButton
                onClick={() => navigate(-1)}
                // outline
                width={200}
                mr={10}
              >
                Cancel
              </CustomButton>
              <CustomButton
                onClick={() => {
                  navigate("/vehicles");
                }}
                width={200}
                type="submit"
              >
                Save
              </CustomButton>
            </div>
          </>
        )}
      </Content>
    </PageLayout>
  );
}
