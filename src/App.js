import Sidebar from "./Components/Sidebar/Sidebar";
import Wrapper from "./Components/Wrappers/wrappe";
import "./App.scss"

function App() {
  return (
    <>
      <main className="conta">
        <Sidebar />
        <Wrapper />
      </main>
    </>
);
}

export default App;