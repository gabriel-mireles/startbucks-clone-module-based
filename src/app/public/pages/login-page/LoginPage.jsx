import {  Grow } from "@mui/material";
import { useAuth } from "app/public/hooks/useAuth";
import { StarbucksButton } from "app/shared/components/buttons/StarbucksButton";
import { Fade } from "app/shared/components/fade/Fade";
import { InnerAlert } from "app/shared/components/inner-alert/InnerAlert";
import { StarbucksInput } from "app/shared/components/starbucks-input/StarbucksInput";
import { StarbucksPasswordInput } from "app/shared/components/starbucks-input/StarbucksPasswordInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthLayout } from "../../layouts/AuthLayout";
import "./LoginPage.scss";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLoading, errorMessage, doLogin } = useAuth();
  const onSubmit = ({ username, password }) => doLogin(username, password);

  return (
    <Fade>
      <AuthLayout title="Sign in or create an account">
        <form className="loginPage" onSubmit={handleSubmit(onSubmit)}>
          {errorMessage ? (
            <Grow in unmountOnExit>
              <div>
                <InnerAlert
                  type="error"
                  title="Sign in unsuccessful."
                  text={errorMessage}
                />
              </div>
            </Grow>
          ) : (
            ""
          )}

          <StarbucksInput
            name="username"
            label="* Username or email address"
            register={register}
            validations={{ required: true }}
            errors={errors}
          />
          <StarbucksPasswordInput
            name="password"
            label="* Password"
            type="password"
            register={register}
            validations={{ required: true }}
            errors={errors}
          />

          <div className="loginPage__resetLinks">
            <Link to="">Forgot your username?</Link>
            <Link to="">Forgot your password?</Link>
          </div>
          <div className="loginPage__button">
            <StarbucksButton
              bgColor="var(--main-green)"
              type="full"
              bold
              color="white"
              text="Sign in"
              size="large"
              buttonBehavior="submit"
              isLoading={isLoading}
            />
          </div>
        </form>
      </AuthLayout>
    </Fade>
  );
};
