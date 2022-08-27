import reactLogo from "../assets/react.svg";
import styles from "./GlobalNav.module.css";

function GlobalNav() {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className={styles.logo} alt="Vite logo" />
      </a>
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className={styles.logo} alt="React logo" />
      </a>
    </div>
  );
}

export default GlobalNav;
