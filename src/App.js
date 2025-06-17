import MainLayout from "./layouts/MainLayout";
import UpcomingTasks from "./features/UpcomingTasks";
import TodayTasks from "./features/TodayTasks";
import "./components/main.scss";
import { DateProvider } from './components/ModalWindow';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DateProvider>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<TodayTasks/>} />
          <Route path="upcoming-tasks" element={<UpcomingTasks/>}> </Route>
        </Route>
      </Routes>
        </DateProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
