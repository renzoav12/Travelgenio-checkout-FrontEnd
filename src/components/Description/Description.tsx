import React, { SFC } from 'react';
import { Typography, Box } from '@material-ui/core';

export interface DescriptionProps {
  readonly text: string;
}

const Description: SFC<DescriptionProps> = props => {
  let description: JSX.Element | Array<JSX.Element>;

  if(!props.text || props.text.indexOf("\n") === -1) {
    description = <Typography paragraph={true} align="justify">{props.text}</Typography>;
  } else {
    description = props.text
      .split("\n")
      .map((paragraph, index) => <div><Typography paragraph={true} align="justify" key={index}>{paragraph}</Typography></div>)
  }
  
  return <Box>{description}</Box>;
}

export default Description;
