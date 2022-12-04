import { useState } from "react";
import Menu from "./components/Menu";
import Taskbar from "./components/Taskbar";
const App = () => {
  const [power, setPower] = useState(false);
  const powerHandler = () => setPower(!power);

  return (
    <>
      <Menu power={power} onPower={powerHandler} />
      <Taskbar onPower={powerHandler} />
    </>
  );
};

export default App;
