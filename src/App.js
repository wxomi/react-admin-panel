import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoices from "./scenes/invoices";
// import Bar from './scenes/bar';
import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geography';
// import Calender from './scenes/calender';

function App() {
  const [theme, colorMode] = useMode("dark");
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path='/team' element={<Team />}></Route>
              <Route path='/contacts' element={<Contacts />}></Route>
              <Route path='/invoices' element={<Invoices />}></Route>
              {/* <Route path='/bar' element={<Bar />}></Route> */}
              <Route path='/form' element={<Form />}></Route>
              {/* <Route path='/line' element={<Line />}></Route> */}
              {/* <Route path='/pie' element={<Pie />}></Route> */}
              {/* <Route path='/faq' element={<FAQ />}></Route> */}
              {/* <Route path='/geography' element={<Geography />}></Route> */}
              {/* <Route path='/calender' element={<Calender />}></Route> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
