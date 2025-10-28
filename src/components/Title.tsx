import React from "react";

interface TitleProps {
  text: string;
}
function Title({ text }: TitleProps) {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h2 className="text-3xl font-medium tracking-wider capitalize">{text}</h2>
    </div>
  );
}

export default Title;
