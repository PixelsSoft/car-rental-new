import React, { useState } from "react";
import { Container, Button, Dropdown, DropdownItem } from "./Select.styles";
import * as MdIcons from "react-icons/md";

const Select = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`You clicked on "${item}"`);
    setIsOpen(false);
  };

  return (
    <Container>
      <Button onClick={toggleDropdown}>
        {label}
        {isOpen ? (
          <MdIcons.MdOutlineKeyboardArrowUp />
        ) : (
          <MdIcons.MdOutlineKeyboardArrowDown />
        )}
      </Button>
      <Dropdown isOpen={isOpen}>
        <DropdownItem onClick={() => handleItemClick("Item 1")}>
          Transaction
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick("Item 2")}>
          Invoice
        </DropdownItem>
        <DropdownItem onClick={() => handleItemClick("Item 3")}>
          Bill
        </DropdownItem>
      </Dropdown>
    </Container>
  );
};

export default Select;
