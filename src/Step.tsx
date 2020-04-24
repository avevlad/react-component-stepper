import React from "react";

interface StepProps {}

export const Step: React.FC<StepProps> = (props) => {
  console.log("props = ", props);

  return <div>Step</div>;
};
