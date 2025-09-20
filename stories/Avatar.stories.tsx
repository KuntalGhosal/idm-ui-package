/**
 * Avatar component wraps MUI Avatar. Supports all MUI Avatar props.
 *
 * **Props:**
 * - `alt`: string
 * - `src`: string
 *
 * **Usage:**
 * ```tsx
 * <Avatar alt="A" src="/avatar.png" />
 * ```
 */
import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '../src/components/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI Avatar wrapper. Supports all MUI Avatar props.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    alt: 'A',
    src: '/avatar.png',
  },
};

export const Image: Story = {
  args: {
    src: 'https://mui.com/static/images/avatar/1.jpg',
    alt: 'User',
  },
};
