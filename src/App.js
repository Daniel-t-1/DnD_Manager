import logo from './logo.svg';
import './App.css';

import {SpellItem, Spells} from './CharacterSheetItems/SpellItem';
function App() {
  return (
    <Spells Spells={["Sacred Flame","Spare the dying"]}></Spells>
  );
}

export default App;
