import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './Layout/MainLayout';

import Userlogin from './Mycomponents/Userlogin';
import Register from './Mycomponents/Register';
import Register_problem from './Mycomponents/Villagers/Register_problems';
import BrowseSchemes from './Mycomponents/Villagers/BrowseSchemes';
import VillagersHome from './Mycomponents/Villagers/VillagersHome';
import Viewproblems from './Mycomponents/Villagers/Viewproblems';

import GramSevakHome from './Mycomponents/GramSevak/GramSevakHome';
import Problem_approval from './Mycomponents/GramSevak/Problem_approval';
import Upload_scheme from './Mycomponents/GramSevak/Upload_scheme';
import Browse_Schemes from './Mycomponents/GramSevak/Browse_Schemes';
import Remove_scheme from './Mycomponents/GramSevak/Remove_scheme';
import Report_Register from './Mycomponents/GramSevak/Report_Register';

import PDOHome from './Mycomponents/PDO/PDOHome';
import Check_reports from './Mycomponents/PDO/Check_reports';
import Browse_scheme from './Mycomponents/PDO/Browse_scheme';
import Upload_Scheme from './Mycomponents/PDO/Upload_Scheme';

import Home from './Mycomponents/Home';
import LogOutComp from './Mycomponents/LogOutComp';
import Aboutus from './Mycomponents/Aboutus';
import Contact from './Mycomponents/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* MAIN LAYOUT */}
        <Route path="/" element={<MainLayout />}>

          {/* Public routes */}
          <Route path="Home" element={<Home />} />
          <Route path="Userlogin" element={<Userlogin />} />
          <Route path="Register" element={<Register />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="logout" element={<LogOutComp />} />

          {/* Villagers */}
          <Route path="VillagersHome" element={<VillagersHome />}>
            <Route path="BrowseSchemes" element={<BrowseSchemes />} />
            <Route path="Register_problem" element={<Register_problem />} />
            <Route path="Viewproblems" element={<Viewproblems />} />
          </Route>

          {/* GramSevak */}
          <Route path="GramSevakHome" element={<GramSevakHome />}>
            <Route path="Problem_approval" element={<Problem_approval />} />
            <Route path="Upload_scheme" element={<Upload_scheme />} />
            <Route path="Browse_Schemes" element={<Browse_Schemes />} />
            <Route path="Remove_scheme" element={<Remove_scheme />} />
            <Route path="Report_Register" element={<Report_Register />} />
          </Route>

          {/* PDO */}
          <Route path="PDOHome" element={<PDOHome />}>
            <Route path="Check_reports" element={<Check_reports />} />
            <Route path="Browse_scheme" element={<Browse_scheme />} />
            <Route path="Upload_Scheme" element={<Upload_Scheme />} />
          </Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
