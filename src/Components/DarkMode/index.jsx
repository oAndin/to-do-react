import { useState } from "react";
import 'style.css';

const DarkMode = () => {
  // get the body element to switch to dark mode color
  let body = document.querySelector('body');


  // Save last session theme so it doesnt change on reload
  // setDarkMode = () => {
  //   if (localStorage) localStorage['dark-mode'] ? body?.classList.add("dark") : null;
  // }

  // if (darkMode) {body.};

  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>AAAAA</button>
    </>
  )
}

export default DarkMode;