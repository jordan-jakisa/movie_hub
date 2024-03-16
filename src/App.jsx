import { useState } from "react";
import "./App.css";
import SideNav from "./components/side_nav/SideNav";
import MainPage from "./components/main_page/MainPage";

function App() {
  const [selectedItem, setSelectedItem] = useState("Home");
  const NavItems = ["Home", "Browse", "Trending", "Saved", "Playlist"];

  return (
    <>
      <div className="bg-[url('https://media.vanityfair.com/photos/5e962efaac720b00089fd0a9/master/pass/0520-Dune-Tout-Lede-a.jpg')]  w-screen h-screen">
        <div className="flex flex-row h-screen bg-black bg-opacity-50">
          {/* side nav */}
          <div className="w-1/5">
            <SideNav
              NavItems={NavItems}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>

          {/* main page content */}
          <div>
            <MainPage title={selectedItem} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
