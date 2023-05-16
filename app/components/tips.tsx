import React, { useEffect, useState } from "react";
import styles from "./button.module.scss";

export function Tips(props: {}) {
  const [showPopup, setShowPopup] = useState(false);

  function closePopup() {
    setShowPopup(false);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    }

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {showPopup && (
        <div id="popup" className={styles.popup}>
          <p>请确保进行正确的操作。</p>
          <button onClick={closePopup}>同意</button>
        </div>
      )}
    </div>
  );
}
