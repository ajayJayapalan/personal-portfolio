import React, { useEffect } from "react";

interface DarkModeToggleProps {
  isLight: boolean;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  isLight,
  setIsLight,
}) => {
  const toggle = () => {
    setIsLight((prev) => !prev);
  };

  //   useEffect(() => {
  //     if (isLight) {
  //       document.body.classList.add("light");
  //     } else {
  //       document.body.classList.remove("light");
  //     }

  //     return () => {
  //       document.body.classList.remove("light");
  //     };
  //   }, [isLight]);

  return (
    <div className={`tdnn${isLight ? " day" : ""}`} onClick={toggle}>
      <div className={`moon${isLight ? " sun" : ""}`} />
    </div>
  );
};

export default DarkModeToggle;
