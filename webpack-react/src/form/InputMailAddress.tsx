import { TextField } from "@mui/material";
import { useEffect } from "react";

type InputMailAddressProps = {
  value: string;
  onChange: (newValue: string) => void;
  onErrorChange: (hasError: boolean) => void;
};

//入力メールアドレスのバリデーション
const regexpEmail =
  /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

function InputMailAddress({
  value,
  onChange,
  onErrorChange,
}: InputMailAddressProps) {
  useEffect(() => {
    onErrorChange(!regexpEmail.test(value) && !!value);
  }, [value, onErrorChange]);

  return (
    <TextField
      label="メールアドレス"
      placeholder="メールアドレス"
      sx={{ width: "80%" }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      error={!regexpEmail.test(value) && !!value}
      helperText={
        (regexpEmail.test(value) && value) || !value
          ? null
          : "Incorrect Email address format."
      }
      autoComplete="current-password"
    />
  );
}

export default InputMailAddress;
