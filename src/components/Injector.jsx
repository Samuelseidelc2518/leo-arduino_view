import styles from "../App.module.css";

const Injector = ({ on }) => {
  return <div class={on ? styles.grid_element : styles.grid_element_on}></div>;
};

export default Injector;
