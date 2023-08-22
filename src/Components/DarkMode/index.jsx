import { useState } from "react";

const DarkMode = () => {
  // get the body element to switch to dark mode color
  let body = document.querySelector('body');

  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode
    if (darkMode === true) {
      body.style.backgroundColor = "#1b1b1b"
    }
    else {
      body.style.backgroundColor = "#d9d9d9"
    }
  }
  // Save last session theme so it doesnt change on reload
  //   if (localStorage) localStorage['dark-mode'] ? body?.classList.add("dark") : null;
  // }

  return (
    <>
      <button className="mode" onClick={toggleMode()}>AAAAA</button>
    </>
  )
}

export default DarkMode;