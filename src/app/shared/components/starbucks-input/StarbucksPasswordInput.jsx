import {
  Cancel,
  Close,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Fade, TextField } from "@mui/material";
import { useState } from "react";
import { StarbucksInput } from "./StarbucksInput";

export const StarbucksPasswordInput = ({
  name,
  label,
  validations,
  register,
  errors,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <div className="starbucksInput">
      <StarbucksInput
        name={name}
        label={label}
        type={passwordShown ? "text" : "password"}
        register={register}
        errors={errors}
        validations={validations}
      >
        {passwordShown ? (
          <VisibilityOutlined
            style={{ right: errors[name] ? "3rem" : "1rem" }}
            onClick={() => setPasswordShown(!passwordShown)}
            className="starbucksInput__visibilityIcon"
          />
        ) : (
          <VisibilityOffOutlined
            style={{ right: errors[name] ? "3rem" : "1rem" }}
            onClick={() => setPasswordShown(!passwordShown)}
            className="starbucksInput__visibilityIcon"
          />
        )}
      </StarbucksInput>
    </div>
  );
};
