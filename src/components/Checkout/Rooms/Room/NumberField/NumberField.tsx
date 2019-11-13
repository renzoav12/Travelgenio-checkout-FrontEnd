import OtravoField from '../OtravoField';

class NumberField extends OtravoField {
  constructor(props) {
    super(props);
  }
  
  isInvalidFormat(value:string): boolean {
    let regExp = /^\d*$/i;
    return (value.match(regExp) == null);
  }
}

export default NumberField;