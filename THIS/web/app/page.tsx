'use client';

import { useState } from "react";
import { Boton } from "./MyComponent";
import { FormControlLabel, FormGroup, Switch, TextField } from "@mui/material";

export default function Home() {
  const [clicks, setClicks] = useState(0);
  const [error, setError] = useState(false);

  function validateEmail(email: string) {
    let esError = false;
    if (email === 'pedrito') {
      esError = true;
    }

    setError(esError);
  }

  return (
    <div className="grid justify-items-center gap-8 sm:p-20">
      <Boton nombre="Carolina">
        <i>probando</i>
      </Boton>

      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel control={<Switch />} label="Required" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>

      <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => validateEmail(e.target.value)}
            error={error}
            helperText={error && "No te llames pedrito!"}
          />

      <Boton nombre="Carlos">
        <b>probando otro</b>
      </Boton>

      <button onClick={() => { setClicks(clicks+1) }}>
        Clicks: {clicks}
      </button>
    </div>
  );
}
