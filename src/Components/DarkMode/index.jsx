import { useState } from "react";

import { styled } from "styled-components";


const DarkMode = () => {

  const [darkMode, setDarkMode] = useState(false);
  // get the body element to switch to dark mode color
  let body = document.querySelector('body');
  let text = document.querySelector('title');
  let color;

  if (darkMode === true) {
    body.style.backgroundColor = "#1b1b1b";
    text.style.color = `${color}`
  }
  else {
    body.style.backgroundColor = "#d9d9d9"
    text.style.color = `${color}`
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