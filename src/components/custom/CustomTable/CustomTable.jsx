import { Table, THead, TRow, TData, TDataAction } from "./CustomTable.styles";
import TableActionDropdown from "../TableActionDropdown/TableActionDropdown";
import Status from "../Status/Status";
import STATUS from "../../../constants/status";
import RecordPayment from "../RecordPayment/RecordPayment";

export default function CustomTable({ mt = 0, mb = 0, ml = 0, mr = 0 }) {
  return (
    <Table mt={mt} mb={mb} ml={ml} mr={mr}>
      <TRow>
        <THead>Status</THead>
        <THead>Due</THead>
        <THead>Date</THead>
        <THead>Number</THead>
        <THead>Customer</THead>
        <THead>Unpaid Invoices</THead>
        <THead>Amount Due</THead>
        <THead>Actions</THead>
      </TRow>

      <TRow>
        <TData>
          <Status status={STATUS.PARTIAL} />
        </TData>
        <TData>25 days ago</TData>
        <TData>2023-05-21</TData>
        <TData>5762</TData>
        <TData>Anishka Mackey</TData>
        <TData>1 of 3</TData>
        <TData>$300.00</TData>
        <TDataAction>
          <div>
            <RecordPayment />
            <TableActionDropdown />
          </div>
        </TDataAction>
      </TRow>
    </Table>
  );
}
