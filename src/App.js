import "./App.css";
import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen font-medium">
      <div className="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
        <ToDo />
      </div>
    </div>
  );
}

export default App;
