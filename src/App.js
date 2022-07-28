import "./App.css";
import { Routes } from "./Routes/Routes";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // border: "1px solid red",
        marginTop: "60px",
        paddingBottom: "40px",
        background: "white",
      }}
    >
      <Routes />
    </div>
  );
}

export default App;
