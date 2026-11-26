import { useState } from "react";

export default function LiveText() {
  const [para, setPara] = useState("");
  
  return (
    <div>
      <p>Live text analyzer</p>
      <textarea
        value={para}
        placeholder="Type something here..."
        onChange={(e) => setPara(e.target.value)}
      />
      <p>Characters: {para.length}</p>
      <p>Words: {para ? para.split(" ").length : 0}</p>
      <p>Uppercase Preview: {para.toUpperCase()}</p>
      <button onClick={() => setPara("")} disabled={para === ""}>Clear Text</button>
    </div>
  )
}
