import styled, { useTheme } from "styled-components";
import { MenuData } from "./MenuData";
import SubMenu from "./SubMenu";
import { AiOutlineLogout } from "react-icons/ai";

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
  height: 100vh;
`;

export default function Menu() {
  const theme = useTheme();
  return (
    <>
      <MenuNav>
        <MenuWrap>
          <div
            style={{
              textAlign: "center",
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: theme.colors.primary,
              padding: 4,
              borderRadius: 10,
              width: "90%",
              marginRight: "auto",
              marginLeft: " auto",
            }}
          >
            <img
              src={require("../../../assets/images/logo-3.png")}
              width={150}
              height={50}
              alt=""
            />
          </div>
          {MenuData.map((item, idx) => {
            return <SubMenu item={item} key={idx} />;
          })}
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AiOutlineLogout size={20} />
            <span>Logout</span>
          </div> */}

          <div
            style={{
              padding: theme.spacing.m,
              marginLeft: 10,
              marginRight: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              //   border: `1px solid ${theme.colors.primary}`,
              backgroundColor: theme.colors.primary,
              color: theme.colors.white,
              fontWeight: "bold",
              borderRadius: 10,
              marginTop: "100%",
            }}
          >
            <AiOutlineLogout size={20} />
            <span style={{ marginLeft: 10 }}>Logout</span>
          </div>
        </MenuWrap>
      </MenuNav>
    </>
  );
}
