import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 30%;
`;
export const Right = styled.div`
  flex: 1;

  #table-wrapper {
    border: 1px solid ${(props) => props.theme.colors.borders};
    border-radius: 10px;
    margin-top: 40px;
    padding: 20px;
  }
`;
