import './App.css';
import { siteName } from './data/constants';
import { Quote } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{siteName}</h1>
        <Quote></Quote>
      </header>
    </div>
  );
}

export default App;
