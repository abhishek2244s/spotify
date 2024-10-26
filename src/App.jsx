import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import useListSongs from './hooks/useListSongs'
import TopTracks from './pages/TopTracks'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/top_tracks" exact element={<TopTracks />} />

      </Routes>
    </>
  )
}

export default App
