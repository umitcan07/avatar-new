import Avatar from "./Avatar";
import React, { useState } from "react";
import "./styles/AvatarInput.css";

function AvatarInput() {
  const [size, setSize] = useState(64);
  const [name, setName] = useState("A");
  const [display, setDisplay] = useState("");

  return (
    <div className="AvatarInput">
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        type="text"
        placeholder={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br></br>
      <label style={{ width: 64 }} htmlFor="number">
        Size:
      </label>
      <input
        name="number"
        type="number"
        placeholder="64"
        onChange={(event) => setSize(+event.target.value)}
      />
      <br></br>
      <label htmlFor="initials">Initials:</label>
      <input
        name="initials"
        type="text"
        onChange={(event) => setDisplay(event.target.value)}
      />
      <br></br>
      <Avatar size={size} name={name} display={display} />
    </div>
  );
}

export default AvatarInput;
