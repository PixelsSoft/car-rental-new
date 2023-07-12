import { Oval } from "react-loader-spinner";
import { useTheme } from "styled-components";

export default function Spinner() {
  const theme = useTheme();
  return (
    <Oval
      height={40}
      width={40}
      color={theme.colors.primary}
      wrapperStyle={{
        width: "100%",

        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        height: "80vh",
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={theme.colors.labels}
      strokeWidth={6}
      strokeWidthSecondary={6}
    />
  );
}
