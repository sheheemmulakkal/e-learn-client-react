import "./App.css";
import { VideoProvider } from "./components/student/learning page/VideoContext";
import RoutePage from "./routes/Routes";

function App() {
  return (
    <VideoProvider>
      <RoutePage />
    </VideoProvider>
  );
}

export default App;
