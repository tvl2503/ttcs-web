
import './App.css';
import RoutesConfig from './components/RoutesConfig/RoutesConfig';
import {useRoutes} from "react-router-dom"
import Navigation from './components/Navigation';
import "./scss/index.scss"
import SearchForm from './components/Search';
import { useState } from 'react';
function App() {
  const element = useRoutes(RoutesConfig)
  const [searchIsShow, setSearchIsShow] = useState(false);
  const showSearchHandler = () => setSearchIsShow(true);
  const hideSearchHandler = () => setSearchIsShow(false);
  return (
    <div className="App"> 
    {searchIsShow && <SearchForm onclose = {hideSearchHandler} />}
      <Navigation onShowSearch = {showSearchHandler} />
      {element}
    </div>
  );
}

export default App;
