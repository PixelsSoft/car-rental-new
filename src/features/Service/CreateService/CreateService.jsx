import React, { useEffect, useState } from "react";

import { Content } from "./CreateService.styles";
import PageLayout from "../../../components/Layout/PageLayout/PageLayout";
import Header from "../../../components/custom/Header/Header";
import InputLeftLabel from "../../../components/custom/InputLeftLabel/InputLeftLabel";
import TextArea from "../../../components/custom/TextArea/TextArea";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import {
  createService,
  reset as serviceReset,
} from "../../../redux/service/reducer";
import SelectLeftLabel from "../../../components/custom/SelectLeftLabel/SelectLeftLabel";
import { getItems } from "../../../redux/items/reducer";
import { toast } from "react-toastify";
import Spinner from "../../../components/custom/Spinner/Spinner";
import { useNavigate } from "react-router-dom";

export default function CreateService() {
  const [selectedItem, setSelectedItem] = useState( null );
  // const [returnDate, setReturnDate] = useState( "" );
  const [description, setDescription] = useState( "" );

  const dispatch = useDispatch();
  const navigate = useNavigate();


  /////// Get current date////
  const currentDate = new Date().toISOString().slice( 0, 10 );
  const [invoiceDate, setInvoiceDate] = useState( currentDate );

  const { items, serviceCreated, loading, error, message } = useSelector(
    ( state ) => ( {
      items: state.items.items,
      serviceCreated: state.services.serviceCreated,
      loading: state.services.loading,
      error: state.services.error,
      message: state.services.message,
    } )
  );

  const handleSubmit = ( e ) => {
    e.preventDefault();
    dispatch( createService( {
      item:
        selectedItem,
      // returnDate,
      description
    } ) );
    navigate("/services")
  };

  useEffect( () => {
    if ( serviceCreated ) {
      toast.success( message );
      setDescription( "" );
      setSelectedItem( null );
      dispatch( serviceReset() );
    }
  }, [serviceCreated, message, dispatch] );

  useEffect( () => {
    if ( error ) toast.error( error );
  }, [error] );

  useEffect( () => {
    dispatch( getItems() );
  }, [dispatch] );

  return (
    <PageLayout>
      <Header pageTitle="New Service" />

      <Content onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <SelectLeftLabel
              label="Select car"
              placeholder="Choose.."
              items={items}
              accessor="make"
              value={selectedItem?.make}
              onItemSelect={( car ) => setSelectedItem( car )}
              type="button"
            />
            <InputLeftLabel
              label="Service Date"
              mt={20}
              type="date"
              value={invoiceDate}
              onChange={( e ) => setInvoiceDate( e.target.value )}
            // value="Auto generated"
            // disabled
            />
            {/* <InputLeftLabel
              label="Return Date"
              mt={20}
              type="date"
              value={returnDate}
              onChange={( e ) => setReturnDate( e.target.value )}
            /> */}
            <TextArea
              row
              label="Description"
              mt={20}
              value={description}
              onChange={( e ) => setDescription( e.target.value )}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 50,
              }}
            >
              <CustomButton
                outline
                width={200}
                mr={10}
                type="button"
                onClick={() => navigate( "/services" )}
              >
                Cancel
              </CustomButton>
              <CustomButton  width={200} type="submit">
                Save
              </CustomButton>
            </div>
          </>
        )}
      </Content>
    </PageLayout>
  );
}
