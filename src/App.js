import './App.css';
import MainPage from './pages/mainPage.jsx'

const { GA_ID } = process.env;
ReactGA.initialize(GA_ID);

function App() {
  return (
      <MainPage></MainPage>
  );
}

export default App;
