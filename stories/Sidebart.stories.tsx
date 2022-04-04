import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Sidebar } from '../src/Sidebar/Sidebar';
import {
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiUser,
  FiCompass,
  FiGift,
  FiList,
  FiSettings,
} from 'react-icons/fi';


const sidebar = [
  {
    path: '/dashboard', // the url
    icon: FiGrid, // icon
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/products',
    icon: FiShoppingBag,
    name: 'Products',
  },
  {
    path: '/category',
    icon: FiList,
    name: 'Category',
  },
  {
    path: '/customers',
    icon: FiUsers,
    name: 'Customers',
  },
  {
    path: '/orders',
    icon: FiCompass,
    name: 'Orders',
  },
  {
    path: '/coupons',
    icon: FiGift,
    name: 'Coupons',
  },
  {
    path: '/our-staff',
    icon: FiUser,
    name: 'Our Staff',
  },
  {
    path: '/setting',
    icon: FiSettings,
    name: 'Setting',
  },
];

const meta: Meta = {
  title: 'Menu/Sidebar',
  component: Sidebar,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<any> = (args) => <Sidebar  {...args}> 
<ul className="mt-8">
    {sidebar.map((route) => (
      <li className="relative cursor-pointer" key={'i'}>
        <a
          className="px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-700 dark:hover:text-gray-200 "
        >
          <span
            className="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg"
            aria-hidden="true"
          ></span>
          <route.icon className="w-5 h-5" aria-hidden="true" />
          <span className="ml-4">Home</span>
        </a>
      </li>
    ))}
  </ul>
</Sidebar>;

export const Default = Template.bind({});
