import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SwitchButton } from '..';

export default {
  title: 'Example/SwitchButton',
  component: SwitchButton,
} as ComponentMeta<typeof SwitchButton>;

const Template: ComponentStory<typeof SwitchButton> = (args) => <SwitchButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    items: [{
        id: '1',
        title: 'Runtime',
        icon: 'preview'
    },
    {
        id: '2',
        title: 'Constructor',
        icon: 'ctor'
    }]
};
