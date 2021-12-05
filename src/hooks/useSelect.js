import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export function useSelect({ options, id, label, disabled = false }) {
  const [value, setValue] = useState("");
  const handleChange = (_, data) => {
    setValue(data.props.value);
  };
  const SelectComponent = (
    <FormControl fullWidth margin="normal" disabled={disabled}>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        id={id}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options?.map((option, i) => {
          return (
            <MenuItem value={option} key={i}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
  return [value, SelectComponent];
}
