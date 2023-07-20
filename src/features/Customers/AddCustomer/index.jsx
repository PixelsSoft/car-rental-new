import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import InputLeftLabel from "../../../components/custom/InputLeftLabel/InputLeftLabel";
import { FormContainer, Section, SectionTitle, Form } from "./styles";
import TextArea from "../../../components/custom/TextArea/TextArea";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCustomer,
  reset as customersReset,
} from "../../../redux/customers/reducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../components/custom/Spinner/Spinner";

export default function AddCustomer() {
  const [customer, setCustomer] = useState( "" );
  const [firstName, setFirstName] = useState( "" );
  const [lastName, setLastName] = useState( "" );
  const [email, setEmail] = useState( "" );
  const [phoneNumber, setPhoneNumber] = useState( "" );
  const [accountNumber, setAccountNumber] = useState( "" );
  const [notes, setNotes] = useState( "" );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customerCreated, loading, error, message } = useSelector( ( state ) => ( {
    customerCreated: state.customers.customerCreated,
    loading: state.customers.loading,
    error: state.customers.error,
    message: state.customers.message,
  } ) );

  const handleSubmit = ( e ) => {
    e.preventDefault();
    dispatch(
      createCustomer( {
        name: customer,
        firstName,
        lastName,
        email,
        phoneNumber,
        accountNumber,
        notes,
      } )
    );
  };

  const reset = () => {
    setCustomer( "" );
    setFirstName( "" );
    setLastName( "" );
    setEmail( "" );
    setPhoneNumber( "" );
    setAccountNumber( "" );
    setNotes( "" );

  };

  useEffect( () => {
    if ( customerCreated ) {
      toast.success( message );
      reset();
      dispatch( customersReset() );
      navigate( "/customers" );
    }
  }, [customerCreated, message, dispatch, navigate] );
  const [files, setFiles] = useState( [] );
  console.log( "files", files )
  useEffect( () => {
    if ( error ) {
      toast.error( error );
    }
  }, [error] );
  const handleFileChange = ( e ) => {
    setFiles( [...e.target.files] );
  };


  return (
    <PageLayout>
      <Header pageTitle="New Customer"></Header>

      <FormContainer onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Section>
              <SectionTitle>Basic information</SectionTitle>
              <Form>
                {/* <InputLeftLabel
                  label="Customer*"
                  width={250}
                  value={customer}
                  onChange={( e ) => setCustomer( e.target.value )}
                /> */}
                <InputLeftLabel
                  label="First Name*"
                  width={250}
                  mt={12}
                  value={firstName}
                  onChange={( e ) => setFirstName( e.target.value )}
                />
                <InputLeftLabel
                  label="Last Name*"
                  width={250}
                  mt={12}
                  value={lastName}
                  onChange={( e ) => setLastName( e.target.value )}
                />
                <InputLeftLabel
                  label="Email"
                  width={250}
                  mt={12}
                  value={email}
                  onChange={( e ) => setEmail( e.target.value )}
                />
                <InputLeftLabel
                  label="Phone Number*"
                  width={250}
                  mt={12}
                  value={phoneNumber}
                  onChange={( e ) => setPhoneNumber( e.target.value )}
                />
                <InputLeftLabel
                  label="Driving licence*"
                  mt={20}
                  type="file"
                  name="images"
                  multiple
                  onChange={handleFileChange}
                />
                {/* <InputLeftLabel
                  label="Driving licence"
                  width={250}
                  mt={12}
                  value={accountNumber}
                  onChange={( e ) => setAccountNumber( e.target.value )}
                /> */}
                <TextArea
                  label="Notes"
                  row
                  width={250}
                  mt={12}
                  value={notes}
                  onChange={( e ) => setNotes( e.target.value )}
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
                  navigate( "/customers" );
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
