import "./services/firebase.js";
import {Normalize} from "styled-normalize";
import {HomeTab} from "./tabs/HomeTab.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {PlayTab} from "./tabs/PlayTab.jsx";
import {ContactTab} from "./tabs/ContactTab.jsx";
import {MusicFromDB} from "./tabs/MusicFromDB.jsx";
import {InstrumentFromDB} from "./tabs/InstrumentFromDB.jsx";
import {AddSongsTab} from "./tabs/AddSongsTab.jsx";
import {useState} from "react";

function App() {
    const [instrumentData, setInstrumentData] = useState(null); // Store instruments
    const [musicData, setMusicData] = useState(null);


  return (
      <>
          <Normalize/>

          <Tabs>
              <TabList>
                  <Tab>Home</Tab>
                  <Tab>Play</Tab>
                  <Tab>Music</Tab>
                  <Tab>Instruments</Tab>
                  <Tab>Sequencing</Tab>
                  <Tab>Contact</Tab>
              </TabList>

              <TabPanel>
                  <HomeTab/>
              </TabPanel>
              <TabPanel>
                  <PlayTab
                      instrumentData={instrumentData}
                      musicData={musicData}/>
              </TabPanel>
              <TabPanel>
                  <MusicFromDB onDataFetched={setMusicData}/>
              </TabPanel>
              <TabPanel>
                  <InstrumentFromDB onDataFetched={setInstrumentData}/>
              </TabPanel>
              <TabPanel>
                  <AddSongsTab/>
              </TabPanel>
              <TabPanel>
                  <ContactTab/>
              </TabPanel>
          </Tabs>
      </>
  )
}

export default App
