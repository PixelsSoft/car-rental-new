import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import InputLeftLabel from "../../../components/custom/InputLeftLabel/InputLeftLabel";
import { FormContainer, Section, SectionTitle, Form } from "./styles";
import TextArea from "../../../components/custom/TextArea/TextArea";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCustomer,
  reset as customersReset,
  editCustomer,
} from "../../../redux/customers/reducer";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../../components/custom/Spinner/Spinner";

export default function EditCustomer() {
  const [customer, setCustomer] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [notes, setNotes] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { customerProfile, loading, error, customerEditSuccess, message } =
    useSelector((state) => ({
      customerProfile: state.customers.customerProfile,
      loading: state.customers.loading,
      error: state.customers.error,
      customerEditSuccess: state.customers.customerEditSuccess,
      message: state.customers.message,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editCustomer({
        id,
        data: {
          name: customer,
          firstName,
          lastName,
          email,
          phoneNumber,
          accountNumber,
          notes,
        },
      })
    );
  };

  const reset = () => {
    setCustomer("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setAccountNumber("");
    setNotes("");
  };

  useEffect(() => {
    dispatch(getCustomer(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (customerProfile) {
      setCustomer(customerProfile.name);
      setEmail(customerProfile.email);
      setLastName(customerProfile.lastName);
      setFirstName(customerProfile.firstName);
      setPhoneNumber(customerProfile.phoneNumber);
      setAccountNumber(customerProfile.accountNumber);
      setNotes(customerProfile.notes);
    }
  }, [customerProfile]);

  useEffect(() => {
    if (customerEditSuccess) {
      reset();
      toast.success(message);
      dispatch(customersReset());
      navigate("/customers");
    }
  }, [customerEditSuccess, message, navigate, dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <PageLayout>
      <Header pageTitle="Edit Customer"></Header>

      <FormContainer onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Section>
              <SectionTitle>Basic information</SectionTitle>
              <Form>
                <InputLeftLabel
                  label="Customer*"
                  width={250}
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                />
                <InputLeftLabel
                  label="First Name"
                  width={250}
                  mt={12}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <InputLeftLabel
                  label="Last Name"
                  width={250}
                  mt={12}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <InputLeftLabel
                  label="Email"
                  width={250}
                  mt={12}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputLeftLabel
                  label="Phone Number"
                  width={250}
                  mt={12}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <InputLeftLabel
                  label="Account Number"
                  width={250}
                  mt={12}
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
                <TextArea
                  label="Notes"
                  row
                  width={250}
                  mt={12}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </Form>
            </Section>
            <div id="buttons">
              <CustomButton
                type="button"
                outline
                width={100}
                onClick={() => {
                  reset();
                  navigate("/customers");
                }}
              >
                Cancel
              </CustomButton>
              <CustomButton width={100} ml={10}>
                Save
              </CustomButton>
            </div>
          </>
        )}
      </FormContainer>
    </PageLayout>
  );
}
