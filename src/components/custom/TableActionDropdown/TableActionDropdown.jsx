import { AiFillCaretDown } from "react-icons/ai";
import {
  StyledActionButton,
  DropdownList,
  DropdownItem,
} from "./TableActionDropdown.styles";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TableActionDropdown() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const dropdownRef = useRef();

  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  //   const handleSelect = () => console.log("click");

  const navigateToInvoiceDetails = () => navigate("/invoices/1");

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <StyledActionButton onClick={toggleMenu} ref={dropdownRef}>
      <AiFillCaretDown size={14} />
      <DropdownList open={open}>
        <DropdownItem onClick={navigateToInvoiceDetails}>View</DropdownItem>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
      </DropdownList>
    </StyledActionButton>
  );
}
