import { StylesConfig } from "react-select";

interface Option {
    value: string;
    label: string;
  }
  

export const customStyles: StylesConfig<Option> = {
    control: (provided) => ({
      ...provided,
      height: '46px',
      backgroundColor: 'transparent',
      border: '2px solid #3F72AF',
      boxShadow: 'none',
      fontSize: '20px',
      fontFamily: 'Roboto, sans-serif',
      color: '#000',
      textAlign: 'start',
      '&:focus': {
        borderColor: '#257FEA !important',
      },
      '&:hover': {
        borderColor: '#257FEA',
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#DBE2EF',
      border: '2px solid #3F72AF',
      borderRadius: '4px',
      boxShadow: '4px 4px 4px 0px #00000040',
      padding: '0',
      '&:focus': {
        borderColor: '#257FEA !important',
      },
      '&:hover': {
        borderColor: '#257FEA',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      height: '46px',
      padding: '5px',
      backgroundColor: state.isFocused ? '#257FEA4D' : state.isSelected ? '#3F72AF' : 'transparent',
      color: state.isSelected ? '#fff' : '#000',
      textAlign: 'start',
      fontSize: '20px',
      '&:active': {
        backgroundColor: '#3F72AF',
        color: '#fff'
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#00000080',
      fontSize: '20px',
    }),
    valueContainer: (provided) => ({
      ...provided,
    }),
    menuList: (provided) => ({
      ...provided,
      padding: '0',
    })
  };