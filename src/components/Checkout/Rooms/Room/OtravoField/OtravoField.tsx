import React, { Component, ContextType} from 'react';
import TextField from '@material-ui/core/TextField';
import {translate} from '@hotels/translation';
import Keys from '@hotels/translation-keys';
import PropTypes from "prop-types";

export interface OtravoFieldProps {
  id: string;
  label: JSX.Element;
  value?: string;
  required?: boolean;
  maxLength?: number;
  error?: boolean;
  errorMessage?: string;
  onChange: (value:string, valid:boolean) => void;
  minLength?: number;
}

export interface OtravoFieldState {
  error: boolean;
  errorMessage: String;
}

export interface Props {
  otravoField: OtravoFieldProps;
  otravoFiledState: OtravoFieldState;
}


class OtravoField extends Component<OtravoFieldProps, OtravoFieldState>  {
  context: ContextType<any>;
  static contextTypes = {
    t: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = { 
      error: props.error ? props.error : false,
      errorMessage: props.errorMessage ? props.errorMessage : ""
    };

    this.onChange.bind(this);
    this.onBlur.bind(this);
    this.validate.bind(this);
  }
  
  onChange = (event): void => {
    let value = event.target.value;
    this.props.onChange(value, this.validate(event.target.value));
  }

  onBlur = (event): void => {
    this.validate(event.target.value);
  }

  validate = (value:string): boolean => {
    let errorMessage = "";
    let error = false;

    if(this.isEmpty(value)) {
      errorMessage = translate(this.context,Keys.checkout.format_is_invalid);
      error = true;
    } else if(this.isInvalidFormat(value)) {
      errorMessage = translate(this.context,Keys.checkout.field_is_required);
      error = true;
    }

    this.setState({
        error: error,
        errorMessage : errorMessage
    });

    return !error;
  }

  isEmpty(value:string): boolean {
    return ((this.props.required || false) && (value.length == 0) );
  }

  isInvalidFormat(value:string): boolean {
    return false;
  }

  render = () => {
    const inputProps = {
      maxLength: this.props.maxLength,
      minLength: this.props.minLength
    };

    return <TextField
            id={this.props.id}
            label={this.props.label}
            defaultValue = {this.props.value}
            color="primary"
            fullWidth={true}
            error={this.state.error}
            helperText = {this.state.errorMessage}
            onChange={this.onChange}
            onBlur={this.onBlur}
            inputProps={inputProps}
          />;
  }
}
export default OtravoField;