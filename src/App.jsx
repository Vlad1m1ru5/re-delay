import styles from "./App.module.css";
import GlobalNav from "./components/GlobalNav";
import DelayInput from "./components/DelayInput";

function App() {
  return (
    <div>
      <GlobalNav />
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <DelayInput delay={1000} isDebounce />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
