import React from 'react';
import { createComponent } from '@lit-labs/react';
import { SimpleInput } from '../litComponents/simple-input';

const Input = createComponent(React, 'simple-input', SimpleInput, {
  onChange: 'input-change',
});

export default Input;
