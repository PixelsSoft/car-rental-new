import styled from "styled-components";

export const Content = styled.div`
  width: 100%;

  #buttons-group {
    display: flex;
    justify-content: end;
    width: 40%;
    margin-top: 20px;
  }
`;

export const Section = styled.div`
  margin-top: ${(props) => props.theme.spacing.xl};
`;

export const SectionTitle = styled.h3``;

export const Form = styled.form`
  width: 40%;
`;
