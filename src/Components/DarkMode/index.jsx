import { useState } from "react";
import 'style.css';

const DarkMode = () => {

  let body = document.querySelector('body');

  // setDarkMode = () => {
  //   if (localStorage) localStorage['dark-mode'] ? body?.classList.add("dark") : null;
  // }


  if (darkMode) {
    setDarkMode
  };

  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>AAAAA</button>
    </>
  )
}

export default DarkMode;