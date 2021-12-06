import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComp from './components/NavBarComp';
// import route components here (pages)
import FeedPage from './pages/FeedPage';
import HomePage from './pages/HomePage';

// save router html template in a variable
const router = (
  <BrowserRouter>
    {/* Everything outside of "<Routes>" will be rendered globally (eg.: navbar) */}
    <NavBarComp />
    <Routes>
      {/* Default route: "/", renders the "HomePage" component */}
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/feed" element={<FeedPage />}></Route>
    </Routes>
  </BrowserRouter>
  )

function App() {
  return (
    <div className="App">
      {/* Render router */}
      {router}
    </div>
  );
}

export default App;
