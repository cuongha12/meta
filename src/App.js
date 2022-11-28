
import { useEffect } from 'react';
import './App.css';
import 'antd/dist/reset.css';
import Home from './pages/Home/Home';
function App() {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, [])
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
