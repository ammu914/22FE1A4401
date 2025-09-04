import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShortenerPage from "./components/ShortenerPage";
import StatisticsPage from "./components/StatisticsPage";
import RedirectHandler from "./components/RedirectHandler";
import { AppBar, Toolbar, Button } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Shorten</Button>
          <Button color="inherit" component={Link} to="/stats">Statistics</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/stats" element={<StatisticsPage />} />
        <Route path="/:code" element={<RedirectHandler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
