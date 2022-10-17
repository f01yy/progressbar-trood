import ProgressBar from './components/ProgressBar/ProgressBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProgressBar
        width={600}
        height={20}
        items={[
          { name: 'Sold', color: '#BD1FBE', value: 677 },
          { name: 'Got free', color: '#FC64FF', value: 23 },
          { name: 'Burned', value: 202, color: 'lightgreen' },
          { name: 'Free float', value: 323, color: 'lightgray' },
        ]}
      />
    </div>
  );
}

export default App;
