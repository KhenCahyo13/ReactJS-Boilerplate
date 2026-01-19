import '@/index.css';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { FallbackLoader } from '@/components/fallback/loader';

const meta: Meta<typeof FallbackLoader> = {
    title: 'Components/Fallback/Loader',
    component: FallbackLoader,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Simple loading indicator with a label for async states.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="max-w-md">
            <FallbackLoader label="Memuat data..." />
        </div>
    ),
};

export const CustomLabel: Story = {
    render: () => (
        <div className="max-w-md">
            <FallbackLoader label="Loading posts, please wait" />
        </div>
    ),
};
