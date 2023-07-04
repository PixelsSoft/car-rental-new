import Popup from "reactjs-popup";
import { Header, ModalContainer, Content } from "./Modal.styles";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Modal({
  open,
  title,
  onClose,
  children,
  width,
  ...rest
}) {
  return (
    <Popup
      closeOnDocumentClick={true}
      closeOnEscape={true}
      open={open}
      modal
      onClose={onClose}
      contentStyle={{ width: width ? width : undefined }}
    >
      {(close) => (
        <ModalContainer>
          <Header>
            <h3>{title}</h3>
            <AiFillCloseCircle size={30} color="gray" onClick={close} />
          </Header>
          <Content>{children}</Content>
        </ModalContainer>
      )}
    </Popup>
  );
}
