import React from "react";
import { Progress } from "@material-tailwind/react";

export const ProgressLabel: React.FC<{ value: number }> = ({ value }) => {
  console.log(value, "va");

  if (value < 20) {
    return <Progress value={value ?? 0} color="red" label="Progress" />;
  } else if (value >= 20 && value < 40) {
    return <Progress value={value ?? 0} color="orange" label="Progress" />;
  } else if (value >= 40 && value < 60) {
    return <Progress value={value ?? 0} color="yellow" label="Progress" />;
  } else if (value >= 60 && value < 80) {
    return <Progress value={value ?? 0} color="blue" label="Progress" />;
  } else {
    return <Progress value={value ?? 0} color="green" label="Progress" />;
  }
};

// export const ProgressBar:
