import styles from "./App.module.css";
import Coils from "./sections/Coils";
import Injectors from "./sections/Injectors";
import PanelControls from "./sections/PanelControls";
import PanelLogo from "./sections/PanelLogo";
import Potentiometers from "./sections/Potentiometers";
import { onMount, createSignal, createMemo } from "solid-js";

import { socket } from "./socket";

function App() {
  const [getData, setData] = createSignal(
    Array.from({ length: 45 }, (x, ind) => {
      if (ind < 23 || ind > 26) {
        return 0;
      }
      return 2.7;
    })
  );

  const injectors = createMemo(() => {
    return getData().slice(0, 8);
  });

  const coils = createMemo(() => {
    return getData().slice(8, 16);
  });

  const controls = createMemo(() => {
    return getData().slice(16, 23);
  });

  const potentiometers = createMemo(() => {
    return getData().slice(23, 45);
  });

  onMount(() => {
    socket.on("arduino", (data) => {
      console.log(data.split(","));
      setData(data.split(","));
    });
  });

  return (
    <div class={styles.panel}>
      <Injectors data={injectors} />
      <Coils data={coils} />
      <PanelLogo />
      <PanelControls data={controls} />
      <Potentiometers data={potentiometers} />
    </div>
  );
}

export default App;
