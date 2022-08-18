import { Cancel, Close } from "@mui/icons-material";
import { Fade, TextField } from "@mui/material";
import "./StarbucksInput.scss";
const style = {
  "& .MuiInputBase-root": {
    borderRadius: ".7rem",
  },

};



export const StarbucksInput = ({
  errors,
  type,
  name,
  label,
  register,
  validations,
  children,
}) => {
  return (
    <div className="starbucksInput">
      <TextField
        name={name}
        type={type}
        variant="outlined"
        label={label}
        error={!!errors[name]}
        InputProps={{
          style: { fontWeight: "600" },
        }}
        className="starbucksInput__field"
        sx={style}
        {...register(name, validations)}
      />

      {children}

      {errors && errors[name] && (
        <Fade in timeout={300}>
          <div className="starbucksInput__errors">
            <Close fontSize="small" />
            <span>Enter a password.</span>
            <Cancel fontSize="small" className="starbucksInput__cancelIcon" />
          </div>
        </Fade>
      )}
    </div>
  );
};
