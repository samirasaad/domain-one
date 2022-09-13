import React from "react";

const DomainContainer = () => {
  const redirectToSubDomain = () => {
    window.location.href = `https://tempName.domain-sub-domain-cookies.vercel.app`;
  };

  return (
    <div>
      <p>welcome to domain</p>
      <button onClick={redirectToSubDomain}>take me to the sub domain</button>
    </div>
  );
};

export default DomainContainer;
