import "./services/firebase.js";
import {Normalize} from "styled-normalize";
import {HomeTab} from "./tabs/HomeTab.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {InstrumentTab} from "./tabs/InstrumentTab.jsx";
import {PlayTab} from "./tabs/PlayTab.jsx";
import {ContactTab} from "./tabs/ContactTab.jsx";
import {INSTRUMENTS, SONGS} from "./data/Data.js";
import {MusicTab} from "./tabs/MusicTab.jsx";
import {useState} from "react";
import {MusicFromDB} from "./tabs/MusicFromDB.jsx";
import {InstrumentFromDB} from "./tabs/InstrumentFromDB.jsx";
import {AddSongsTab} from "./tabs/AddSongsTab.jsx";

function App() {
    const [selectedInstrument, setSelectedInstrument] = useState(INSTRUMENTS.find(inst => inst.name === 'cello'));

    const updateInstrument = (newInstrument) => {
        setSelectedInstrument(newInstrument);
    };

    const [searchQuery, setSearchQuery] = useState('');
  return (
      <>
          <Normalize/>

          <Tabs>
              <TabList>
                  <Tab>Home</Tab>
                  <Tab>Play</Tab>
                  <Tab>Instruments</Tab>
                  <Tab>Contact</Tab>
                  <Tab>Music</Tab>
                  <Tab>Instruments From Database</Tab>
                  <Tab>Sequencing</Tab>
              </TabList>

              <TabPanel>
                  <HomeTab/>
              </TabPanel>
              <TabPanel>
                  <PlayTab instruments={INSTRUMENTS} selectedInstrument={selectedInstrument}
                           updateInstrument={updateInstrument} songs={SONGS}/>
              </TabPanel>
              <TabPanel>
                  <InstrumentTab instruments={INSTRUMENTS} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
              </TabPanel>
              <TabPanel>
                  <ContactTab/>
              </TabPanel>
              <TabPanel>
                  <MusicFromDB/>
              </TabPanel>
              <TabPanel>
                  <InstrumentFromDB/>
              </TabPanel>
              <TabPanel>
                  <AddSongsTab/>
              </TabPanel>
          </Tabs>
      </>
  )
}

export default App
