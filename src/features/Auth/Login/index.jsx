import FormContainer from "./components/FormContainer/FormContainer";
import { LoginForm, PageContainer, Container } from "./styles";
import CustomInput from "../../../components/custom/CustomInput/CustomInput";
import CustomButton from "../../../components/custom/CustomButton/CustomButton";
import { HeadingText } from "../../../components/custom/Text/Text";
import { useTheme } from "styled-components";
import Spinner from "../../../components/custom/Spinner/Spinner";
import { login } from "../../../redux/auth/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState( "" );
  const [password, setPassword] = useState( "" );

  const theme = useTheme();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const signIn = () => {
    dispatch( login( { email, password } ) );
  };

  const { token, user, loading, error } = useSelector( ( state ) => ( {
    token: state.auth.token,
    user: state.auth.user,
    loading: state.auth.loading,
    error: state.auth.error,
  } ) );

  useEffect( () => {
    if ( user && token ) {
      navigate( "/dashboard" );
    }
  }, [token, user, navigate] );

  useEffect( () => {
    if ( error ) toast.error( error, { toastId: "auth-error" } );
  }, [error] );

  return (
    <PageContainer>
      <Container>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div
              style={{
                // backgroundColor: theme.colors.primary,
                borderRadius: 10,
              }}
            >
              <img
                src={require( "../../../assets/images/cityspace-logo.png" )}
                width={350}
                height={150}
                alt=""
              />
            </div>
            <FormContainer>
              <HeadingText>Sign In</HeadingText>

              <LoginForm>
                <CustomInput
                  placeholder="Email"
                  mt={20}
                  value={email}
                  onChange={( e ) => setEmail( e.target.value )}
                />
                <CustomInput
                  placeholder="Password"
                  mt={10}
                  mb={20}
                  value={password}
                  onChange={( e ) => setPassword( e.target.value )}
                />
                <CustomButton type="button" onClick={signIn}>
                  Sign in
                </CustomButton>
                <CustomButton type="button" outline mt={20}>
                  Forgot Password?
                </CustomButton>

                <p
                  style={{
                    textAlign: "center",
                    marginTop: 39,
                    fontSize: "15px",
                  }}
                >
                  By continuing, you are indicating that you have read and agree
                  to the{" "}
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
          </>
        )}
      </Container>
    </PageContainer>
  );
}
