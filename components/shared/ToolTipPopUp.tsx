"use client";
import { Tooltip } from "react-tooltip";

const ToolTipPopUp = ({ id, content }: { id: string, content:string }) => {
  return (
    <Tooltip
      anchorSelect={id}
      content={content}
      place="left"
      className="dark:!bg-primary"
    />
  );
};

export default ToolTipPopUp;
