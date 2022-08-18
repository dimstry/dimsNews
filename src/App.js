import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ContentHead from './components/ContentHead';
import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // init
  const [datas, setDatas] = useState([])

  // get data dari api
  const getDatas = () => { 
      axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
              country: 'id',
              apiKey: 'da3148f0a64b42e4b43d6fa816a0d3f8',
          }
      })
      .then(res => {
        //set data
          const value = res.data
          setDatas(value)
      })
      .catch(err => console.warn(err));
  }
  useEffect(() => {
      getDatas();
  }, [])

  return (
    <div className="App">
      <NavBar />
      <div className='container mx-auto px-5 lg:px-40 mt-10'>
        <h1 className='text-left text-3xl my-4'>News 🔥</h1>
        <ContentHead {...datas}/>
      </div>
      <div className='h-48 bg-slate-400  container mx-auto px-5 lg:px-40 flex justify-center'>
        <div className='w-64 main_left bg-slate-50'>
          <h2>Left</h2>
        </div>
        <div className='main_right'>
          <h2>Right</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
