import { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface TimerContextProps {
  blocked: boolean;
  block: () => void;
}

const TimerContext = createContext({} as TimerContextProps);

export function TimerProvider({ children }: Props) {
  const [blocked, setBlocked] = useState<boolean>(false);

  function block() {
    console.log("teste");
    setBlocked(true);
    setTimeout(() => setBlocked(false), 3 * 60 * 1000);
  }

  return (
    <TimerContext.Provider value={{ blocked, block }}>
      {children}
    </TimerContext.Provider>
  );
}

export const useTimer = () => useContext(TimerContext);

export default TimerContext;
