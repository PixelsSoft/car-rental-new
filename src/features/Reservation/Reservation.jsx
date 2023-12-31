import React, { useEffect, useState } from 'react'
import PageLayout from '../../components/Layout/PageLayout/PageLayout'
import { Box, Tab, Tabs } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {
    Table,
    TData,
    TRow,
    THead,
    TDataAction
} from "../../components/custom/CustomTable/CustomTable.styles";
import moment from 'moment';
import { deleteInvoice, getAllInvoices } from '../../redux/invoices/reducer';
import TableActionDropdown from '../../components/custom/TableActionDropdown/TableActionDropdown';

import CustomButton from '../../components/custom/CustomButton/CustomButton';
import { ButtonsContainer } from '../Invoice/Invoices/styles';
import Modal from '../../components/custom/Modal/Modal';

export default function Reservation() {
    const navigate = useNavigate();
    const [deleteModal, setDeleteModal] = useState( false );
    const [invoiceId, setInvoiceId] = useState( null );
    const [value, setvalue] = useState( " 0" )


    const onEdit = ( id ) => navigate( "/invoices/edit/" + id );
    const onDelete = ( id ) => {
        setInvoiceId( id );
        setDeleteModal( true );
    };
    const handleDeleteInvoice = () => {
        dispatch( deleteInvoice( invoiceId ) );
        setDeleteModal( false );
    };

    const {
        invoices,
    } = useSelector( ( state ) => ( {
        invoices: state.invoices.invoices,
    } ) );
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch( getAllInvoices() );
    }, [dispatch] );
    const headers = [
        "Customer Name",
        "Pick up ",
        "Drop off",
        "Vehicle",
        "Amount",
        "Actions",
    ];
    const closeDeleteModal = () => {
        setInvoiceId( null );
        setDeleteModal( false );
    };

    return ( <>
        <PageLayout>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={( e ) => setvalue( e.target.value )}
                    aria-label="basic tabs example">
                    <Tab label="All" />
                    <Tab label="Today Return" />
                    <Tab label="Tomorrow Return" />
                </Tabs>
            </Box>
            <Table mt={20}>
                <TRow>
                    {headers.map( ( header ) => (
                        <THead>{header}</THead>
                    ) )}
                </TRow>

                {invoices.map( ( invoice ) => (
                    <TRow>
                        <TData>{invoice.customer.name}</TData>

                        <TData>
                            {moment( invoice.PickUpDate ).format( "LL" )}
                        </TData>
                        <TData>{moment( invoice.DropOffDate ).format( "LL" )}</TData>
                        <TData>{invoice?.items[0]?.listItem?.make}</TData>
                        <TData>${invoice?.total}</TData>
                        <TDataAction>
                            <div>
                                <TableActionDropdown
                                    viewRoute={`/invoices/details/${invoice._id}`}
                                    onDelete={() => onDelete( invoice._id )}
                                    onEdit={() => onEdit( invoice._id )}
                                />
                            </div>
                        </TDataAction>

                    </TRow>
                ) )}
            </Table>
            <Modal
                title="Delete invoice?"
                open={deleteModal}
                onClose={closeDeleteModal}
            >
                <p>Are you sure you want to delete this invoice?</p>

                <ButtonsContainer>
                    <CustomButton outline mr={10} width={100} onClick={closeDeleteModal}>
                        Cancel
                    </CustomButton>
                    <CustomButton width={100} onClick={handleDeleteInvoice}>
                        Confirm
                    </CustomButton>
                </ButtonsContainer>
            </Modal>
        </PageLayout>
    </>

    )
}
