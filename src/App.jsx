import { useState } from "react";
import "./App.css";

import LibraryHeader from "./Components/LibraryHeader";
import LibraryFooter from "./Components/LibraryFooter";
import LibraryBooks from "./Components/LibraryBooks";
import LibraryButton from "./Components/LibraryButton";
import LoginPage from "./Components/LoginPage";
import LibraryLogin from "./Components/LibraryLogin";
import Office from "./Components/Office";
import OfficeList from "./Components/OfficeList";
import { Route, Routes } from "react-router";
function App() {
  return (
    <div>
      <main>
        <LibraryHeader />
        <Routes>
          <Route path="/" element={<LibraryLogin />} />
          <Route path="/office" element={<Office />} />
          <Route path="/books" element={<LibraryBooks />} />
          <Route path="/officelist" element={<OfficeList />} />
          <Route path="*" element={<LibraryLogin />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
