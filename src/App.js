import { Toaster } from 'react-hot-toast';
import './App.css';
import Main from './layout/Main/Main';

function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Main></Main>
    </div>
  );
}

export default App;
