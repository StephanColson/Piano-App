import {Normalize} from "styled-normalize";
import {HomeTab} from "./tabs/HomeTab.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {InformationTab} from "./tabs/InformationTab.jsx";
import {PlayTab} from "./tabs/PlayTab.jsx";
import {ContactTab} from "./tabs/ContactTab.jsx";

function App() {


  return (
      <>
          <Normalize/>
          <Tabs>
              <TabList>
                  <Tab>Home</Tab>
                  <Tab>Play</Tab>
                  <Tab>Information</Tab>
                  <Tab>Contact</Tab>
              </TabList>

              <TabPanel>
                  <HomeTab/>
              </TabPanel>
              <TabPanel>
                  <PlayTab/>
              </TabPanel>
              <TabPanel>
                  <InformationTab/>
              </TabPanel>
              <TabPanel>
                  <ContactTab/>
              </TabPanel>
          </Tabs>
      </>
  )
}

export default App
