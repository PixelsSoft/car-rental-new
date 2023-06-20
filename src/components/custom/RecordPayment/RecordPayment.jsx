import { useState } from "react";
import Modal from "../Modal/Modal";
import { LinkText } from "../Text/Text";
import InputLeftLabel from "../InputLeftLabel/InputLeftLabel";
import SelectLeftLabel from "../SelectLeftLabel/SelectLeftLabel";
import TextArea from "../TextArea/TextArea";
import CustomButton from "../CustomButton/CustomButton";
import { ButtonsContainer } from "./RecordPayment.styles";

export default function RecordPayment() {
  const [open, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!open);

  return (
    <>
      <LinkText onClick={toggle} mr={8}>
        Record Payment
      </LinkText>
      <Modal
        open={open}
        title="Record a payment for this invoice"
        onClose={() => setIsOpen(false)}
      >
        <div style={{ width: "50%" }}>
          <InputLeftLabel width={300} type="date" label="Payment Date" />
          <InputLeftLabel width={295} label="Amount" mt={30} />
          <SelectLeftLabel
            label="Payment Account"
            placeholder="Select payment account"
            mt={30}
            width={300}
          />
          <SelectLeftLabel
            label="Payment Method"
            placeholder="Select payment method"
            mt={30}
            width={300}
          />

          <TextArea label="Memo" row={true} width={300} mt={30} />
        </div>
        <ButtonsContainer>
          <CustomButton
            width={150}
            outline
            mr={10}
            onClick={() => setIsOpen(false)}
            type="button"
          >
            Cancel
          </CustomButton>
          <CustomButton width={150}>Save</CustomButton>
        </ButtonsContainer>
      </Modal>
    </>
  );
}
