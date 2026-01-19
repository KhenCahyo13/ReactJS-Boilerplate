import '@/index.css';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { FallbackAction } from '@/components/fallback/action';
import testImage from './assets/avif-test-image.avif';

const meta: Meta<typeof FallbackAction> = {
    title: 'Components/Fallback/Action',
    component: FallbackAction,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Fallback action component that shows an illustration and a primary action button (e.g., retry).',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [count, setCount] = useState(0);
        return (
            <div className="max-w-md">
                <FallbackAction
                    onAction={() => setCount((c) => c + 1)}
                    actionLabel={`Coba Lagi (${count})`}
                />
            </div>
        );
    },
};

export const CustomImage: Story = {
    render: () => {
        return (
            <div className="max-w-md">
                <FallbackAction
                    imagePath={testImage}
                    onAction={() => console.log('Retry clicked')}
                    actionLabel="Retry"
                    imageClassName="h-48 w-48"
                />
            </div>
        );
    },
};

export const WithoutImage: Story = {
    render: () => {
        return (
            <div className="max-w-md">
                <FallbackAction
                    imagePath={undefined}
                    onAction={() => console.log('Action only')}
                    actionLabel="Only Button"
                />
            </div>
        );
    },
};
