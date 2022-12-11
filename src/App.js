import { Toaster } from 'react-hot-toast';
import './App.css';
import Main from './layout/Main/Main';
import Routes from './Routes/Routes';

function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes></Routes>
    </div>
  );
}

export default App;
