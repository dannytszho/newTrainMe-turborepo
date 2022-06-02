import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { Button } from './Button';
import { NavvButton } from './NavvButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: {action: 'clicked'},
    backgroundColor: { control: 'color' },
    navButtonSizee: { options: ['w-20 h-6', 'w-28 h-8', 'w-36 h-10'] },
    size: { options: ['w-14 h-14', 'w-20 h-20', 'w-32 h-32'] },
    label: { control: { disable: true }},
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const StopwatchButton = (args) => {
  const [isActive, setIsActive] = useState(args.isActive ?? '')
  
  return <Button 
    {...args} 
    onClick={(...params) => {
      args.onClick(...params);
      setIsActive(!isActive);
    }} 
    label={isActive ? 'Pause' : 'Start'} 
  />
};

// const Template = (args) => <StopwatchButton {...args} />;
StopwatchButton.args = {}

export const NavButton = (navButtonSize) => {
  return <NavvButton navButtonSize={navButtonSize} />
}

NavButton.args = {}


