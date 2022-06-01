import './App.css';
import MainPage from './pages/mainPage.jsx'
import ReactGA from 'react-ga';

const { GA_ID } = process.env;
ReactGA.initialize(GA_ID);

function App() {
  return (
      <MainPage></MainPage>
  );
}

export default App;
