import React from 'react';
import { createComponent } from '@lit-labs/react';
import { SimpleTitle } from '../litComponents/simple-title';

const Heading = createComponent(React, 'simple-title', SimpleTitle, {});

export default Heading;
