import { AiFillCaretDown } from "react-icons/ai";
import {
  StyledActionButton,
  DropdownList,
  DropdownItem,
} from "./TableActionDropdown.styles";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TableActionDropdown({ viewRoute, onEdit, onDelete }) {
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

  const navigateToView = () => navigate(viewRoute);

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
        <DropdownItem onClick={navigateToView}>View</DropdownItem>
        <DropdownItem onClick={onEdit}>Edit</DropdownItem>
        <DropdownItem onClick={onDelete}>Delete</DropdownItem>
      </DropdownList>
    </StyledActionButton>
  );
}
