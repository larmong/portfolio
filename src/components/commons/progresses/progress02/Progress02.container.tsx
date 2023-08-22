import { useEffect, useState } from "react";
import { DonutProgress, ProgressCont, Wrapper } from "./Progress02.style";

export default function Progress02({ progress, color }: any) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let t = 0;
    const animation = setInterval(() => {
      setPercent(t);
      t >= progress && clearInterval(animation);
      t++;
    }, 20);

    return () => clearInterval(animation);
  }, [progress]);

  return (
    <Wrapper>
      <DonutProgress
        style={{
          background: `conic-gradient(#${color} 0% ${percent}%, #ffffff ${percent}% 100%)`,
        }}
      ></DonutProgress>
      <ProgressCont></ProgressCont>
    </Wrapper>
  );
}
