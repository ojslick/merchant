import React from 'react';
import Select from 'react-select';

import './SelectInput.css';

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: 'none',
    color: 'white',
    // match with the menu
    // borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
    // Overwrittes the different states of border
    border: '1px solid #DDE0E3',
    height: '31px',
    borderRadius: '4.25px',
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    // '&:hover': {
    //   // Overwrittes the different states of border
    //   borderColor: state.isFocused ? 'red' : 'blue',
    // },
  }),
  menu: (base) => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0,
    background: '#FFFFFF',
    color: '#414042',
  }),
  input: (base) => ({
    ...base,
    color: '#414042',
  }),
};

class SelectInput extends React.Component {
  render() {
    return (
      <Select
        placeholder={this.props.placeholder}
        className="select-styles"
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#F4F4F4',
            primary: '#F4F4F4',
          },
        })}
        options={this.props.options}
        value={this.props.value}
        onChange={this.props.onChange}
        isDisabled={this.props.isDisabled}
      />
    );
  }
}

export default SelectInput;
