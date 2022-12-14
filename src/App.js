import './App.css';
import { useEffect, useState } from "react";
import NavBar from './components/NavBar';
import ContentHead from './components/ContentHead';
import MainLeft from './components/MainLeft';
import MainRight from './components/MainRight';
import NavCategory from './components/NavCategory';
import MyFooter from './components/MyFooter';


function App() {
  // init
  const [datas, setDatas] = useState([])
  const axios = require('axios').default;

  // get data dari api
  
  const getDatas = async () => { 
    // axios.get('https://newsapi.org/v2/top-headlines', {
      //     params: {
        //         country: 'id',
        //         apiKey: 'da3148f0a64b42e4b43d6fa816a0d3f8',
        //     }
        // })
      await fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=da3148f0a64b42e4b43d6fa816a0d3f8")
      .then((serverPromise) => {
      serverPromise.json()
        .then(res => {
          //set data
            const value = res
            console.log(value)
            setDatas(value)
        })
      })
      .catch(err => console.warn(err));
  }
  
  useEffect(() => {
      getDatas();
  }, [])

  return (
    <div className="App">
      {/* Navbar */}
      <NavBar />
      {/* Content Head */}
      <div className='container mx-auto px-5 lg:px-40 mt-10'>
        <h1 className='text-left text-3xl my-4'>News 🔥</h1>
        <ContentHead {...datas}/>
      </div>
      {/* Main section */}
      <div className='main_section'>    
        <h2 className="text-sky-500 text-lg">Rekomedasi Untuk Anda</h2>
          <div className='container mx-auto px-5 mt-5 lg:px-40 flex justify-evenly'>
            {/* Content Main kiri */}
            <div className='main_left border-y-2 hidden lg:flex'>
              <MainLeft {...datas}/>
            </div>
            {/* Content Main */}
            <div className='main_right'>
              <MainRight {...datas} />
            </div>
          </div>
      </div>
      {/* Category Sectiom */}
      {/* <div className='container mx-auto px-5 lg:px-40 mt-10'>
        <h2 className='text-left text-3xl my-4'>Category</h2> */}
        {/* Nav Category */}
        {/* <NavCategory /> */}
      {/* </div> */}

      {/* Footer section */}
      <div className='mt-20 bottom-0'>
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
