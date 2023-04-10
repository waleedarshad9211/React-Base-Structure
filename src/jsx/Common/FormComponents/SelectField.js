import { Autocomplete } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const SelectField = ({
  name,
  label,
  required = false,
  options = [],
  loading = false,
  helperText = "",
  cols = 6,
  formik,
  onChange,
  onBlur,
  isMulti = false,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    formik?.values?.[name] || (isMulti ? [] : null)
  );

  const showError = formik
    ? formik?.touched?.[name] && Boolean(formik?.errors?.[name])
    : false;
  const errorText = formik
    ? showError
      ? formik?.errors?.[name]
      : helperText
    : helperText;

  const handleChange = (event, value) => {
    if (formik) {
      if (isMulti) {
        setSelectedOptions(value);
        formik?.setFieldValue(
          name,
          value.map((option) => option.value)
        );
      } else {
        setSelectedOptions(value);
        formik?.setFieldValue(name, value?.value || null);
      }
    }
    if (onChange) {
      onChange(event, value);
    }
  };

  return (
    <Grid item xs={12} md={cols}>
      {label && (
        <Typography variant="subtitle2" component="label" sx={{ mb: 1 }}>
          {label} {required && "*"}
        </Typography>
      )}
      <Autocomplete
        openOnFocus
        multiple={isMulti}
        {...rest}
        id={name}
        name={name}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          if (rest.onInputChange) {
            rest.onInputChange(event, newInputValue);
          }
        }}
        options={options}
        loading={loading}
        filterOptions={(options, { inputValue }) =>
          options.filter((option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
          )
        }
        getOptionLabel={(option) => option.label || ""}
        value={selectedOptions}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        onChange={(e, v) => handleChange(e, v)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            error={showError}
            helperText={errorText}
          />
        )}
      />
    </Grid>
  );
};

export default SelectField;
