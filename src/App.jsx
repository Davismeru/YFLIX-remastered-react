import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Playlist from "./pages/Playlist";
import Channel from "./pages/Channel";
import PlayVideo from "./pages/PlayVideo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/videos/:category" element={<Videos />}></Route>
        <Route path="/playlist/:id" element={<Playlist />}></Route>
        <Route path="/channel/:id" element={<Channel />}></Route>
        <Route path="/playing/:id" element={<PlayVideo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
