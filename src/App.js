import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Chat from './components/chat/chat';
import Jaoin from './components/jaoin/jaoin';
function App() {
  console.log("app")
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Jaoin />} />
          <Route path='/chat' element={<Chat />} />
          
      </Routes>
      </Router>
    </div>
  );
}

export default App;
