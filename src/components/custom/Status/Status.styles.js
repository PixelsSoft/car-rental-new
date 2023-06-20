import styled from "styled-components";
import STATUS from "../../../constants/status";

export const Container = styled.div`
  width: fit-content;
  padding: 5px 8px;
  border-radius: 5px;
  font-size: 12px;
  background-color: ${(props) => {
    switch (props.status) {
      case STATUS.PAID:
        return props.theme.colors.successBg;

      case STATUS.ACTIVE:
        return props.theme.colors.info;

      case STATUS.DUE:
        return props.theme.colors.redStatusBg;

      case STATUS.OVERDUE:
        return props.theme.colors.redStatusBg;

      case STATUS.PARTIAL:
        return props.theme.colors.partialBg;

      default:
        return props.theme.colors.white;
    }
  }};
  font-weight: bold;
  color: ${(props) => {
    switch (props.status) {
      case STATUS.PAID:
        return props.theme.colors.green;

      case STATUS.ACTIVE:
        return props.theme.colors.primary;

      case STATUS.DUE:
        return props.theme.colors.error;

      case STATUS.OVERDUE:
        return props.theme.colors.error;

      case STATUS.PARTIAL:
        return props.theme.colors.partialText;

      default:
        return props.theme.colors.white;
    }
  }};
`;
