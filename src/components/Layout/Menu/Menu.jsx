import styled from "styled-components";
import { MenuData } from "./MenuData";
import SubMenu from "./SubMenu";

const MenuNav = styled.nav`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 270px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const MenuWrap = styled.div`
  width: 100%;
`;

export default function Menu() {
  return (
    <>
      <MenuNav>
        <MenuWrap>
          <div
            style={{
              textAlign: "center",
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: "#e3ebfd",
              padding: 10,
              borderRadius: 10,
              width: "90%",
              marginRight: "auto",
              marginLeft: " auto",
            }}
          >
            <img
              src={require("../../../assets/images/logo.png")}
              width={140}
              height={50}
              alt=""
            />
          </div>
          {MenuData.map((item, idx) => {
            return <SubMenu item={item} key={idx} />;
          })}
        </MenuWrap>
      </MenuNav>
    </>
  );
}
