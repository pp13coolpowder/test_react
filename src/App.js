import "./App.css";
import Hbar from "./page/Hbar";
import Fbar from "./page/Fbar";
import Tiktok from "./content/Tiktok";
import Me from "./page/Me";
import Inc from "./page/Inc";
import Home from "./page/Home";
import P404 from "./page/P404";
import { Route, Routes } from "react-router-dom";
import Youtube from "./content/Youtube";
import tank_y from "./content/Tank_y";
import tank_t from "./content/Tank_t";

const youtubeElement = tank_y.map((ytank, index) => {
  return <Youtube key={index} ytank={ytank} />;
});
const tiktokElement = tank_t.map((ttank, index) => {
  return <Tiktok key={index} ttank={ttank} />;
});

function App() {
  return (
    <div className="Page">
      <Hbar />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<P404 />} />
          <Route path="/tiktok" element={tiktokElement} />
          <Route path="/youtube" element={youtubeElement} />
          <Route path="/edit content" element={<Me />} />
          <Route path="/content" element={<Inc />} />
        </Routes>
      </div>
      <Fbar />
    </div>
  );
}

export default App;
