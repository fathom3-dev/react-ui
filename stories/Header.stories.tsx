import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Header, HeaderProps } from '../src';
import {
  IoMenu,
} from 'react-icons/io5';

const meta: Meta = {
  title: 'Menu/Header',
  component: Header,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<any> = (args) => <Header {...args}>
  <button
    className="p-1 mr-5 -ml-1 rounded-md focus:outline-none"
    aria-label="Menu"
  >
    <IoMenu className="w-6 h-6" aria-hidden="true" />
  </button>
</Header>;

export const Default = Template.bind({});

