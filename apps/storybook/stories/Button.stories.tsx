import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: {action: 'clicked'},
    backgroundColor: { control: 'color' },
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

const Template = (args) => <StopwatchButton {...args} />;
StopwatchButton.args = {}


export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
