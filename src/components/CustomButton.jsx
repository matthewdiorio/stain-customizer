import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const generateStyle = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: '#000',
        color: '#fff',
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  customStyles: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default CustomButton;
