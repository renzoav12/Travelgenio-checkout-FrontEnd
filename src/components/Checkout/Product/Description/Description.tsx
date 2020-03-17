import React, { SFC } from 'react';
import { Box } from '@material-ui/core';
import parse from 'html-react-parser';

export interface DescriptionProps {
  readonly text: string;
}

const Description: SFC<DescriptionProps> = props => {
  return <Box>{parse(props.text)}</Box>;
}

export default Description;
