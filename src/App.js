import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ContentHead from './components/ContentHead';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container mx-auto px-5 lg:px-40 mt-10'>
        <h1 className='text-left text-3xl my-4'>News 🔥</h1>
        <ContentHead />
      </div>
    </div>
  );
}

export default App;
