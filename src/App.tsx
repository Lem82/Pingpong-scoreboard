import './App.scss';
import { useAppDispatch } from './core/hooks';
import { loadConnectionDetails } from './core/signalr/signalr-utils';
import { setConnectionDetails } from './core/signalr/signalrSlice';
import Header from './modules/header/Header';
import ScoreContainer from './modules/score/ScoreContainer';

function App() {
  const dispath = useAppDispatch();

  loadConnectionDetails().then(details => {
    console.info('received connection details', details);
    dispath(setConnectionDetails(details));
  });

  return (
    <div className="App">
      <Header />
      <ScoreContainer />
    </div>
  );
}

export default App;
