import PropTypes from 'prop-types';
import React from 'react';
import style from './HelloWorld.module.css';

const HelloWorld = ({ name, updateName }) => {

  const onKeyDown = () => {
    debugger
  }
  return (
  <div>
    <h3>
      Hello,
      {name}!
    </h3>
    <hr />
      <label className={style.bright} htmlFor="name">
        Say hello to:
        <input id="name" type="text" value={name} onKeyDown={onKeyDown} onChange={(e) => updateName(e.target.value)} />
      </label>
  </div>
)};

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default HelloWorld;
