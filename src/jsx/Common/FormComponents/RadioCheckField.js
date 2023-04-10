import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  Typography,
} from "@mui/material";

const CustomRadioCheckbox = ({
  label,
  value = false,
  name,
  type = "checkbox",
  checked = false,
  onChange,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  labelPlacement = "top",
  color = "primary",
  cols = "6",
  required = false,
  showError = false,
  errorMessage,
  formik,
  ...rest
}) => {
  const formikTouch = formik?.touched[name] || showError;
  const formikError = formik?.errors[name] || errorMessage;

  const handleChange = (event) => {
    let value;
    if (onChange) {
      onChange(event);
    } else {
      value = event.target.checked;
      formik && formik.setFieldValue(name, value);
    }
  };

  return (
    <Grid item xs={12} md={cols}>
      <Box my={2}>
        <FormControlLabel
          error={formikTouch && formikError}
          control={
            type === "checkbox" ? (
              <Checkbox
                id={name}
                name={name}
                color={color}
                value={checked ?? formik?.values[name] ?? false}
                error={formikTouch && formikError}
                onChange={handleChange}
                {...rest}
              />
            ) : (
              <Radio
                id={name}
                name={name}
                color={color}
                error={formikTouch && formikError}
                value={checked ?? formik?.values[name] ?? false}
                onChange={handleChange}
                {...rest}
              />
            )
          }
          label={label ? `${label} ${required && "*"}` : ""}
          labelPlacement={labelPlacement}
          style={{
            marginTop: marginTop,
            marginRight: marginRight,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
          }}
        />
        <Typography variant="body2" color="error">
          {formikTouch && formikError}
        </Typography>
      </Box>
    </Grid>
  );
};

export default CustomRadioCheckbox;
