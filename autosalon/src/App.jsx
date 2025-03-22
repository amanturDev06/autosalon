import './App.css'
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./Pages/HomePage.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} component={HomePage} />
          {/*<Route path={'admin'} component={Statistics}*/}
          {/*<Route path={'admin/reklama'} component={Statistics}*/}
      </Routes>
    </>
  )
}

export default App
