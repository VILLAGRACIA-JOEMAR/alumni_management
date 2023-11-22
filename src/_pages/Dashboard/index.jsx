import { Component } from 'react';
import { Login } from '../../_components';

export default class Dashboard extends Component {
  render = () => {
    return (
      <div className='p-3'>
        Welcome!
        <Login />
      </div>
    )
  }
}