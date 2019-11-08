import OtravoField from '../OtravoField';

class PhoneNumberField extends OtravoField {
  constructor(props) {
    super(props);
  }

  isInvalidFormat(value:string): boolean {
    let regExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
    return (value.match(regExp) == null);
  }
}

export default PhoneNumberField;