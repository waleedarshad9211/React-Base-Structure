import {
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

const InputField = ({
  label,
  name,
  icon,
  type,
  onChange,
  cols = 6,
  formik,
  showError = false,
  errorMessage,
  defaultValue = "",
  required = false,
  isPhone = false,
  ...props
}) => {
  const fieldError = formik?.errors[name] || errorMessage;
  const fieldTouched = formik?.touched[name] || showError;

  const handleChange = (event) => {
    let { value } = event.target;

    if (props.maxLength && value.length > props.maxLength) {
      return;
    }

    if (isPhone) {
      value = value.replace(/\D/g, "");

      const match = value.match(/^(\d{3})(\d{0,3})(\d{0,4})$/);
      if (match) {
        const formatted = [match[1], match[2], match[3]]
          .filter((group) => !!group)
          .join(" ");
        event.target.value = formatted;
      }
    }

    if (formik) {
      formik.setFieldValue(name, value);
    } else {
      onChange && onChange(event);
    }
  };

  return (
    <Grid item xs={12} md={cols}>
      {label && (
        <Typography variant="subtitle2">
          {label} {required && "*"}
        </Typography>
      )}
      <FormControl
        fullWidth
        variant="outlined"
        error={fieldTouched && fieldError}
      >
        <TextField
          autoComplete="off"
          name={name}
          type={type}
          defaultValue={defaultValue}
          InputProps={{
            startAdornment: icon && (
              <InputAdornment position="end">{icon}</InputAdornment>
            ),
          }}
          error={fieldTouched && fieldError}
          helperText={fieldTouched && fieldError}
          onBlur={formik?.handleBlur}
          inputProps={{
            maxLength: isPhone ? 12 : props.maxLength,
            minLength: props.minLength,
            defaultValue: defaultValue,
          }}
          InputLabelProps={{
            shrink: true,
            ...(label && { style: { display: "none" } }),
          }}
          onChange={handleChange}
          {...props}
        />
      </FormControl>
    </Grid>
  );
};

export default InputField;
