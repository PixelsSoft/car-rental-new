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
  const [searchValue, setSearchValue] = useState("");
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    if (onItemSelect) onItemSelect(item);
    setIsOpen(false);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    toggleDropdown();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.selectWithSearchComponents =
      document.selectWithSearchComponents || [];
    document.selectWithSearchComponents.push({
      ref: dropdownRef,
      isOpen,
      setIsOpen,
    });

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.selectWithSearchComponents =
        document.selectWithSearchComponents.filter(
          (item) => item.ref !== dropdownRef
        );
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.selectWithSearchComponents.forEach((item) => {
        if (item.ref !== dropdownRef && item.isOpen) {
          item.setIsOpen(false);
        }
      });
    }
  }, [isOpen]);

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
        <SearchInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue.length === 0
          ? items.map((item, idx) => (
              <DropdownItem key={idx} onClick={() => handleItemClick(item)}>
                {item[accessor]}
              </DropdownItem>
            ))
          : items
              .filter((item, idx) => {
                return item[accessor]
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
              })
              .map((item, idx) => (
                <DropdownItem key={idx} onClick={() => handleItemClick(item)}>
                  {item[accessor]}
                </DropdownItem>
              ))}
      </Dropdown>
    </Container>
  );
};

export default SelectWithSearch;
