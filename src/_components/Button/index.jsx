import { Component } from 'react';

export default class Button extends Component {
  render = ({ type, className, children }) => {
    return (
      <button type={type} className={`${className ? className : ''}`}>
        {children}
      </button>
    )
  }
}