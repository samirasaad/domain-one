import React from "react";

const DomainContainer = () => {
  const redirectToSubDomain = () => {
    window.location.href = `https://github.com/samirasaad/domain-sub-domain-cookies`;
  };

  return (
    <div>
      <p>welcome to domain</p>
      <button onClick={redirectToSubDomain}>take me to the sub domain</button>
    </div>
  );
};

export default DomainContainer;
