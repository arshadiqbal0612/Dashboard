import "./App.css";
import { DrawerD } from "./components/drawer/DrawerD";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <DrawerD/> */}

      <div className="flex h-screen">
        <DrawerD />

        <div className="flex flex-col flex-grow">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
