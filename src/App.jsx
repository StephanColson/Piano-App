import {Normalize} from "styled-normalize";
import {HomeTab} from "./tabs/HomeTab.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {InstrumentTab} from "./tabs/InstrumentTab.jsx";
import {PlayTab} from "./tabs/PlayTab.jsx";
import {ContactTab} from "./tabs/ContactTab.jsx";
import {INSTRUMENTS} from "./data/Data.js";
import {MusicTab} from "./tabs/MusicTab.jsx";

function App() {

  return (
      <>
          <Normalize/>
          <Tabs>
              <TabList>
                  <Tab>Home</Tab>
                  <Tab>Play</Tab>
                  <Tab>Instruments</Tab>
                  <Tab>Music</Tab>
                  <Tab>Contact</Tab>
              </TabList>

              <TabPanel>
                  <HomeTab/>
              </TabPanel>
              <TabPanel>
                  <PlayTab/>
              </TabPanel>
              <TabPanel>
                  <InstrumentTab instruments={INSTRUMENTS}/>
              </TabPanel>
              <TabPanel>
                  <MusicTab/>
              </TabPanel>
              <TabPanel>
                  <ContactTab/>
              </TabPanel>
          </Tabs>
      </>
  )
}

export default App
