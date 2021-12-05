import { useState } from "react";
import { FormControl, InputLabel, Input } from "@mui/material";

export function useInput({ id, label }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    return setValue(e.target.value);
  };
  const InputComponent = (
    <FormControl fullWidth margin="normal">
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Input
        id={id}
        value={value}
        label={label}
        onChange={handleChange}
        placeholder={label}
      />
    </FormControl>
  );
  return [value, InputComponent];
}
