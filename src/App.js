import MainLayout from "./layouts/MainLayout";
import "./components/main.scss";
import { DateProvider } from './components/ModalWindow';

function App() {
  return (
    <div className="App">
      <DateProvider>
        <MainLayout></MainLayout>
      </DateProvider>
    </div>
  );
}

export default App;
