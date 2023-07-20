import { useEffect, useState } from "react";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import Header from "../../../components/custom/Header/Header";
import InputLeftLabel from "../../../components/custom/InputLeftLabel/InputLeftLabel";
import TextArea from "../../../components/custom/TextArea/TextArea";
import { Content, Form } from "./AddVendor.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  createVendor,
  reset as vendorReset,
} from "../../../redux/vendors/reducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../components/custom/Spinner/Spinner";

export default function AddVendor() {
  const [name, setName] = useState( "" );
  const [email, setEmail] = useState( "" );
  const [phoneNo, setPhoneNo] = useState( "" );
  const [description, setDescription] = useState( "" );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { vendorCreated, error, message, loading } = useSelector( ( state ) => ( {
    vendorCreated: state.vendors.vendorCreated,
    message: state.vendors.message,
    error: state.vendors.error,
    loading: state.vendors.loading,
  } ) );

  const handleAddVendor = () => {
    dispatch( createVendor( { name, description } ) );
  };

  useEffect( () => {
    if ( vendorCreated ) {
      toast.success( message, { toastId: "vendor-created" } );
      setName( "" );
      setDescription( "" );
      dispatch( vendorReset() );
    }
  }, [dispatch, vendorCreated, message] );

  useEffect( () => {
    if ( error ) toast.error( error, { toastId: "vendor-error" } );
  }, [error] );

  return (
    <PageLayout>
      <Header pageTitle="New Vendor"></Header>

      <Content>
        {loading ? (
          <Spinner />
        ) : (
          <Form onSubmit={handleAddVendor}>
            <InputLeftLabel
              label="Vendor Name*"
              value={name}
              onChange={( e ) => setName( e.target.value )}
            />
            <InputLeftLabel
              label="Email*"
              value={email}
              onChange={( e ) => setEmail( e.target.value )}
            />
            <InputLeftLabel
              label="Phone no*"
              value={phoneNo}
              onChange={( e ) => setPhoneNo( e.target.value )}
            />
            <TextArea
              row
              label="Description"
              width={250}
              mt={20}
              value={description}
              onChange={( e ) => setDescription( e.target.value )}
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
                onClick={() => navigate( "/vendors" )}
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
