import { Progress, Wrapper } from "./Progress02.style";
import { useState } from "react";

export default function Progress02({ done }: any) {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 500);

  return (
    <Wrapper>
      <Progress className="progress-done" style={style}>
        {done}%
      </Progress>
    </Wrapper>
  );
}
