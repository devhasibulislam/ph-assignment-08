import './App.css';
import Cars from './components/Cars/Cars';
import Header from './components/Header/Header';
import QNA from './components/QNA/QNA';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Cars></Cars>
      <QNA></QNA>
    </div>
  );
}

export default App;
