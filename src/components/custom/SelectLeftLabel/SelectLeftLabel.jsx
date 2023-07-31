import React, { useState, useRef, useEffect } from "react";
import {
  DropdownContainer,
  Button,
  Dropdown,
  DropdownItem,
  Container,
  Label,
} from "./SelectLeftLabel.styles";
import * as MdIcons from "react-icons/md";
import CustomButton from "../CustomButton/CustomButton";

const SelectleftLabel = ({
  width,
  label,
  placeholder,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  items = [],
  accessor,
  value,
  valueAccessor,
  buttonTitle,
  onButtonClick,
  onItemSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //   const handleItemClick = (item) => {
  //     console.log(`You clicked on "${item}"`);
  //     setIsOpen(false);
  //   };

  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    toggleDropdown();
  };

  useEffect(() => {
    const closeAllDropdowns = () => {
      setIsOpen(false);
    };
    document.addEventListener("click", closeAllDropdowns);
    return () => {
      document.removeEventListener("click", closeAllDropdowns);
    };
  }, []);

  return (
    <Container width={width} ml={ml} mr={mr} mb={mb} mt={mt}>
      {label && <Label>{label}</Label>}
      <DropdownContainer>
        <Button onClick={handleButtonClick} type="button">
          {value ? value : placeholder}
          {isOpen ? (
            <MdIcons.MdOutlineKeyboardArrowUp />
          ) : (
            <MdIcons.MdOutlineKeyboardArrowDown />
          )}
        </Button>
        <Dropdown isOpen={isOpen} ref={dropdownRef}>
          {items.map((item) => (
            <DropdownItem
              onClick={() => {
                onItemSelect(item);
                toggleDropdown();
              }}
            >
              {item[accessor]}
            </DropdownItem>
          ))}
          {buttonTitle &&
            <CustomButton
            outline
            onClick={onButtonClick}
>
{buttonTitle}


</CustomButton>
          }
          
        </Dropdown>
      </DropdownContainer>
    </Container>
  );
};

export default SelectleftLabel;
