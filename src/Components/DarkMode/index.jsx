import { useState } from "react";

import { styled } from "styled-components";

let color;


const DarkMode = () => {

  const [darkMode, setDarkMode] = useState(true);
  // get the body element to switch to dark mode color
  let body = document.querySelector('body');

  if (darkMode === true) {
    body.style.backgroundColor = "#1b1b1b";
    color = "#d9d9d9"
  }
  else {
    body.style.backgroundColor = "#d9d9d9"
    color = "#1b1b1b"
  }

  const ModeBtn = styled.button`
  position: absolute;
  margin: 8px;
  top:0%;
  right:0%;
  padding: 8px 8px;
  border: 1px solid ${color};
  `;

  // Save last session theme so it doesnt change on reload
  //   if (localStorage) localStorage['dark-mode'] ? body?.classList.add("dark") : null;
  // }

  return (
    <>
      <ModeBtn onClick={() => setDarkMode(!darkMode)}>Toggle Mode</ModeBtn>
    </>
  )

};


export default DarkMode;