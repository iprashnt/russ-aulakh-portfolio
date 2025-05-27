import React, { useEffect } from "react";

const PreviewImage = ({ imageUrl, onClose }) => {
  // FUNCTIONS
  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };
  const handleClickOutside = (event) => {
    if (!event.target.closest(".max-w-4xl")) {
      onClose();
    }
  };

  //   EFFECTS
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-75">
      <div className="relative max-w-4xl">
        <img
          src={imageUrl}
          alt="Full Screen"
          className="max-w-full max-h-full"
        />
      </div>
    </div>
  );
};

export default PreviewImage;
