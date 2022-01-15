
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ContactCreate from './pages/ContactCreate';
import ContactEdit from './pages/ContactEdit';
import ContactList from './pages/ContactList';
import NavBarComponent from './components/NavBarComponent';

function App() {
  return (
    <Router>
      <div className='container'>
        <NavBarComponent />
        <br />
        <Routes>
          <Route path="/" exact element={<ContactList  />}  />
          <Route path="/edit/:id" exact element={<ContactEdit  />}  />
          <Route path="/create" exact element={<ContactCreate  />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
