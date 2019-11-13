import OtravoField from '../OtravoField';

class EmailField extends OtravoField {
  constructor(props) {
    super(props);
  }

  isInvalidFormat(value:string): boolean {
    let regExp = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/g;
    return (value.match(regExp) == null);
  }
}

export default EmailField;