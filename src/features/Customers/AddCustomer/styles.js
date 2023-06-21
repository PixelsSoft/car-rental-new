import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.xl};

  #buttons {
    display: flex;
    justify-content: center;
    padding: ${(props) => props.theme.spacing.m};
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-bottom: 1px solid ${(props) => props.theme.colors.borders}; */
  padding-bottom: ${(props) => props.theme.spacing.xl};
`;

export const SectionTitle = styled.h3`
  font-weight: 400;
  font-size: large;
  text-align: start;
  width: 100%;
`;

export const Form = styled.div`
  width: 30%;
`;
