
import PropTypes from 'prop-types';
import './input.css';

const InputField = ({ type, name, id, placeholder, value, onChange }) => {
  return (
    <input 
      placeholder={placeholder} 
      type={type} 
      name={name} 
      id={id} 
      value={value}
      onChange={onChange}
      className='inputfield'
    />
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
