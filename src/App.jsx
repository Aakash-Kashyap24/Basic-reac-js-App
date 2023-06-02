import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import store from './store';
import { getData } from './actions/action';
import ProductPage from './pages/ProductPage';
import ViewProduct from './pages/ViewProduct';
import Loader from './layout/Loader';
import { useSelector } from 'react-redux';

function App() {

  const { loading} = useSelector((state) => state.data)

  useEffect(() => {

    store.dispatch(getData())

    

  }, [])

  return (
    <div className='app'>
      {
        loading ? (
          <Loader />
        ) : (
          <div className=''>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<ProductPage/>} />
                <Route path='/:id' element={<ViewProduct/>} />

              </Routes>
            </BrowserRouter>
          </div>

        )
      }
    </div>
  )
}

export default App
