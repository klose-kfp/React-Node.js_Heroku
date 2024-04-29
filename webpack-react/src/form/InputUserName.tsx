import { TextField } from "@mui/material";
import React from "react";

type UserNameProps = {
  value: string;
  onChange: (newValue: string) => void;
};

function InputUserName({ value, onChange }: UserNameProps) {
  return (
    <TextField
      label="ユーザーネーム"
      value={value}
      placeholder="username"
      type="text"
      sx={{ width: "80%" }}
      onChange={(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => onChange(e.target.value)}
      autoComplete="current-password"
    />
  );
}

export default InputUserName;
