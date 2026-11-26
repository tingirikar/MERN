import { useState } from "react";

export default function PasswordValidator() {
  const [pass, setPass] = useState("");
  const [vis, setVis] = useState(false); // visibility of password

  const hasLength = pass.length >= 8;
  const hasUpper = /[A-Z]/.test(pass);
  const hasLower = /[a-z]/.test(pass);
  const hasNumber = /[0-9]/.test(pass);
  const hasSpecial = /[^a-zA-Z0-9\s]/.test(pass); // special characters
  
  let cond = 0;
  if (hasLength) cond++;
  if (hasUpper) cond++;
  if (hasLower) cond++;
  if (hasNumber) cond++;
  if (hasSpecial) cond++;

  function strength() {
    if (cond <= 2) {
      return "Weak";
    }
    else if (cond <= 4) {
      return "Medium";
    }
    return "Strong";
  }

  return (
    <div>
      <p>Create Password</p>
      <input
        value={pass}
        type={vis ? "text" : "password"}
        placeholder="Enter a sample password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={() => setVis(!vis)}>{vis ? "hide" : "show"}</button>
      <p>Password Strength: {strength()} </p>
      <p style={{ color: hasLength ? "green" : "red" }} >At least 8 characters</p>
      <p style={{ color: hasUpper ? "green" : "red" }}>Contains an uppercase letter</p>
      <p style={{ color: hasLower ? "green" : "red" }}>Contains a lowercase letter</p>
      <p style={{ color: hasNumber ? "green" : "red" }}>Contains a number</p>
      <p style={{ color: hasSpecial ? "green" : "red" }}>Contains a special character</p>
      <button
        disabled={cond != 5}
        onClick={() => setPass("")}
      >Submit</button>
    </div>
  )
}
