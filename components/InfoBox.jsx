import React from "react";

const InfoBox = ({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttoninfo,
  children,
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-lg`}>
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <a
        className={`inline-block ${buttoninfo.backgroundColor} rounded-lg text-white px-4 py-2 hover:opacity-80`}
        href={buttoninfo.link}
      >
        {buttoninfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
