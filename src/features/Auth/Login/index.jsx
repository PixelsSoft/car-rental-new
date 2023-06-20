import FormContainer from "./components/FormContainer/FormContainer";
import { LoginForm, PageContainer } from "./styles";
import CustomInput from "../../../components/custom/CustomInput/CustomInput";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import { HeadingText } from "../../../components/custom/Text/Text";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const signIn = () => navigate("/dashboard");
  return (
    <PageContainer>
      <FormContainer>
        <img
          src={require("../../../assets/images/logo.png")}
          width={350}
          height={120}
          alt=""
          style={{ marginBottom: 20 }}
        />

        <HeadingText>Sign In</HeadingText>

        <LoginForm>
          <CustomInput placeholder="Email" mt={20} />
          <CustomInput placeholder="Password" mt={10} mb={20} />
          <CustomButton type="button" onClick={signIn}>
            Sign in
          </CustomButton>
        </LoginForm>
      </FormContainer>
    </PageContainer>
  );
}
