import React from 'react';
import { createComponent } from '@lit-labs/react';
import { SimpleBtn } from '../litComponents/simple-btn';

const Button = createComponent(React, 'simple-btn', SimpleBtn, {
  onClick: 'click',
});

export default Button;
