"use client";
import { Button } from "@material-tailwind/react";

const DefaultButton = ({ onDownload, text, cn }) => {
  return (
    <Button className={cn} onClick={onDownload}>
      {text}
    </Button>
  );
};

export default DefaultButton;
