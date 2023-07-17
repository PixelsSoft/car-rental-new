import * as FiIcons from "react-icons/fi";
import { SearchInputContainer } from "./SearchInput.styles";

export default function SearchInput({ ...rest }) {
  return (
    <SearchInputContainer>
      <FiIcons.FiSearch size={20} />
      <input {...rest} />
    </SearchInputContainer>
  );
}
