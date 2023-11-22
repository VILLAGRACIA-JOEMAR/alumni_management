import { Component } from 'react';

export default class Input extends Component {
  render = () => {
    return (
      <div>
        <label htmlFor={label}>{title}</label>
        <input
          id={label}
          name={label}
          value={label}
          type={type}
          onInput={onInput}
          onChange={onChange}
        />
      </div>
    )
  }
}