import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './_pages';
export default class App extends Component {
  render = () => {
    return (
      <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    )
  }
}