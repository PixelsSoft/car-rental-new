import FormContainer from "./components/FormContainer/FormContainer";
import { LoginForm, PageContainer, Container } from "./styles";
import CustomInput from "../../../components/custom/CustomInput/CustomInput";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import { HeadingText } from "../../../components/custom/Text/Text";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

export default function Login() {
  const navigate = useNavigate();
  const theme = useTheme();

  const signIn = () => navigate("/dashboard");
  return (
    <PageContainer>
      <Container>
        <div
          style={{ backgroundColor: theme.colors.primary, borderRadius: 10 }}
        >
          <img
            src={require("../../../assets/images/logo-3.png")}
            width={350}
            height={150}
            alt=""
          />
        </div>
        <FormContainer>
          <HeadingText>Sign In</HeadingText>

          <LoginForm>
            <CustomInput placeholder="Email" mt={20} />
            <CustomInput placeholder="Password" mt={10} mb={20} />
            <CustomButton type="button" onClick={signIn}>
              Sign in
            </CustomButton>
            <CustomButton type="button" outline mt={20}>
              Forgot Password?
            </CustomButton>

            <p style={{ textAlign: "center", marginTop: 39, fontSize: "15px" }}>
              By continuing, you are indicating that you have read and agree to
              the{" "}
              <strong style={{ color: theme.colors.primary }}>
                Terms of Use
              </strong>{" "}
              and{" "}
              <strong style={{ color: theme.colors.primary }}>
                Privacy Policy.
              </strong>
            </p>
          </LoginForm>
        </FormContainer>
      </Container>
    </PageContainer>
  );
}
