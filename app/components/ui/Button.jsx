"use client";
import { Button } from "@material-tailwind/react";

const DefaultButton = ({ text, cn }) => {
  return <Button className={cn}>{text}</Button>;
};

export default DefaultButton;
