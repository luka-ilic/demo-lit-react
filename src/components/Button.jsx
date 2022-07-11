import React from 'react';
import { createComponent } from '@lit-labs/react';
import { SimpleBtn } from '../litComponents/simple-btn';

export const Button = createComponent(
    React,
    'simple-btn',
    SimpleBtn,
    {
        onClick: 'click'
    }
);