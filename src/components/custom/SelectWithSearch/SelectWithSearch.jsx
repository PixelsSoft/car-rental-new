import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Button,
  Dropdown,
  DropdownItem,
} from "./SelectWithSearch.styles";
import * as MdIcons from "react-icons/md";
import SearchInput from "../SearchInput/SearchInput";

const SelectWithSearch = ({
  width,
  placeholder,
  items = [],
  onItemSelect,
  accessor,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`You clicked on "${item}"`);
    if (onItemSelect) onItemSelect(item);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    toggleDropdown();
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Container width={width} ml={ml} mr={mr} mb={mb} mt={mt}>
      <Button onClick={handleButtonClick}>
        {placeholder}
        {isOpen ? (
          <MdIcons.MdOutlineKeyboardArrowUp />
        ) : (
          <MdIcons.MdOutlineKeyboardArrowDown />
        )}
      </Button>
      <Dropdown isOpen={isOpen} ref={dropdownRef}>
        <SearchInput />
        {items.map((item, idx) => (
          <DropdownItem key={idx} onClick={() => handleItemClick(item)}>
            {item[accessor]}
          </DropdownItem>
        ))}
      </Dropdown>
    </Container>
  );
};

export default SelectWithSearch;
