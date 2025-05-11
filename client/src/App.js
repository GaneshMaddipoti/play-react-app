import './App.css';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';

import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <LeftMenu />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
