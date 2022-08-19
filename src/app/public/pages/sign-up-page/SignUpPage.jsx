import { Grow } from "@mui/material";
import { useAuth } from "app/public/hooks/useAuth";
import { AuthLayout } from "app/public/layouts/AuthLayout";
import { StarbucksButton } from "app/shared/components/buttons/StarbucksButton";
import { Fade } from "app/shared/components/fade/Fade";
import { InnerAlert } from "app/shared/components/inner-alert/InnerAlert";
import { StarbucksInput } from "app/shared/components/starbucks-input/StarbucksInput";
import { StarbucksPasswordInput } from "app/shared/components/starbucks-input/StarbucksPasswordInput";
import { useForm } from "react-hook-form";
import "./SignUpPage.scss";

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLoading, errorMessage, doSignUp } = useAuth();

  const onSubmit = (user) => {
    console.log(user);
    doSignUp({ ...user });
  };

  return (
    <Fade>
      <div>
        <AuthLayout
          title="Create an account"
          subtitle="STARBUCKS® REWARDS"
          text={
            <span>
              Join Starbucks Rewards to earn Stars for free food and drinks, any
              way you pay. Get access to mobile ordering, a birthday Reward, and{" "}
              {<span style={{ textDecoration: "underline" }}>more</span>}.
            </span>
          }
        >
          <form className="signUpPage" onSubmit={handleSubmit(onSubmit)}>
            {errorMessage ? (
              <Grow in unmountOnExit>
                <div>
                  <InnerAlert
                    type="error"
                    title="Sign up was unsuccessful."
                    text={errorMessage}
                  />
                </div>
              </Grow>
            ) : (
              ""
            )}
            <div className="signUpPage__section">
              <p className="signUpPage__title">Personal Information</p>
              <StarbucksInput
                name="firstname"
                label="*First name"
                register={register}
                validations={{ required: true }}
                errors={errors}
              />
              <StarbucksInput
                name="lastname"
                label="*Last name"
                register={register}
                validations={{ required: true }}
                errors={errors}
              />
            </div>

            <div className="signUpPage__section">
              <p className="signUpPage__title">Account Security</p>
              <StarbucksInput
                name="username"
                label="*Email address"
                register={register}
                validations={{ required: true }}
                errors={errors}
              />
              <StarbucksPasswordInput
                name="password"
                label="*Password"
                register={register}
                validations={{ required: true }}
                errors={errors}
              />
            </div>

            <div className="signUpPage__button">
              <StarbucksButton
                bgColor="var(--main-green)"
                type="full"
                bold
                color="white"
                text="Create account"
                size="large"
                buttonBehavior="submit"
                isLoading={isLoading}
              />
            </div>
          </form>
        </AuthLayout>
      </div>
    </Fade>
  );
};
