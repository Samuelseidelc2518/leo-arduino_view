// import { createSignal, For, createEffect, onMount } from "solid-js";
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
      } else {
        return "0";
      }
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
    socket.on("message", (data) => {
      console.log(data);
      setData(data);
    });
  });

  return (
    <div class={styles.panel}>
      <Injectors data={injectors} />
      <Coils data={coils} />
      <PanelLogo />
      <PanelControls />
      <Potentiometers data={potentiometers} />
    </div>
  );
}

export default App;
