import React, { useEffect, useState } from 'react'
import PageLayout from '../../components/Layout/PageLayout/PageLayout'
import { Box, Tab, Tabs } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
    Table,
    TData,
    TRow,
    THead
} from "../../components/custom/CustomTable/CustomTable.styles";
import moment from 'moment';
import { getAllInvoices } from '../../redux/invoices/reducer';

export default function Manifest() {
    const [value, setvalue] = useState( " 0" )

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
        "Due",
        "Date",
        "Number",
        "Customer",
        "Unpaid by customer",
        "Amount Due",
        "Actions",
    ];

    return ( <>
        <PageLayout>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={( e ) => setvalue( e.target.value )}
                    aria-label="basic tabs example">
                    <Tab label="Paid" />
                    <Tab label="unPaid" />
                    <Tab label="Item Three" />
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

                        <TData>
                            {moment( invoice.dueAt, "YYYYMMDD" ).fromNow()}
                        </TData>
                        <TData>{moment( invoice.createdAt ).format( "LL" )}</TData>
                        <TData>{invoice.invoiceNumber}</TData>
                        <TData>{invoice.customer.name}</TData>
                        <TData>{0}</TData>
                        <TData>${invoice.amountDue}</TData>

                    </TRow>
                ) )}
            </Table>
        </PageLayout>
    </>

    )
}
