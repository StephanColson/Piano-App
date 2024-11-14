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

function App() {
    const [selectedInstrument, setSelectedInstrument] = useState(INSTRUMENTS.find(inst => inst.name === 'cello'));

    const updateInstrument = (newInstrument) => {
        setSelectedInstrument(newInstrument);
    };
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
                  <PlayTab instruments={INSTRUMENTS} selectedInstrument={selectedInstrument} updateInstrument={updateInstrument} songs={SONGS}/>
              </TabPanel>
              <TabPanel>
                  <InstrumentTab instruments={INSTRUMENTS}/>
              </TabPanel>
              <TabPanel>
                  <MusicTab songs={SONGS}/>
              </TabPanel>
              <TabPanel>
                  <ContactTab/>
              </TabPanel>
          </Tabs>
      </>
  )
}

export default App
