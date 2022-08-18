import { StarbucksButton } from "app/shared/components/buttons/StarbucksButton";
import { Fade } from "app/shared/components/fade/Fade";
import { StarbucksInput } from "app/shared/components/starbucks-input/StarbucksInput";
import { StarbucksPasswordInput } from "app/shared/components/starbucks-input/StarbucksPasswordInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import "./LoginPage.scss";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ username, password }) => {
    console.log(username, password);
  };
  return (
    <Fade>
      <AuthLayout title="Sign in or create an account">
        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
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

          <div className="loginForm__resetLinks">
            <Link to="">Forgot your username?</Link>
            <Link to="">Forgot your password?</Link>
          </div>
          <div className="loginForm__button">
            <StarbucksButton
              bgColor="var(--main-green)"
              type="full"
              bold
              color="white"
              text="Sign in"
              size="large"
              buttonBehavior="submit"
            />
          </div>
        </form>
      </AuthLayout>
    </Fade>
  );
};
