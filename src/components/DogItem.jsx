import React from 'react';
const { createComponent } = require("@lit-labs/react");
const { SimpleDogItem } = require("../litComponents/simple-dog-item");

export const DogItem = createComponent(
    React, 
    'simple-dog-item',
    SimpleDogItem,
)