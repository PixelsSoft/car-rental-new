import React from "react";
import { FiltersContainer } from "./Filters.styles";
import SelectWithSearch from "../../../../../components/custom/SelectWithSearch/SelectWithSearch";
import OutlineCustomInput from "../../../../../components/custom/OutlineCustomInput/OutlineCustomInput";
import * as FaIcons from "react-icons/fa";
export default function Filters({ customers, setSelectedCustomer }) {
  const onCustomerSelect = (item) => {
    setSelectedCustomer(item);
  };

  return (
    <>
      <FiltersContainer>
        <SelectWithSearch
          placeholder="All customers"
          items={customers}
          accessor="name"
          onItemSelect={onCustomerSelect}
        />
        <SelectWithSearch placeholder="All statuses" ml={10} />
        <OutlineCustomInput placeholder="From" inputType="date" ml={10} />
        <OutlineCustomInput placeholder="To" inputType="date" ml={10} />

        <OutlineCustomInput
          ml={10}
          placeholder="Enter Invoice #"
          icon={<FaIcons.FaSearch size={20} />}
        />
      </FiltersContainer>
    </>
  );
}
