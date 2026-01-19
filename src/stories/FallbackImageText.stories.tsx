import '@/index.css';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { FallbackImageText } from '@/components/fallback/image';
import testImage from './assets/avif-test-image.avif';

const meta: Meta<typeof FallbackImageText> = {
    title: 'Components/Fallback/ImageText',
    component: FallbackImageText,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Fallback image + text component to indicate empty or error states.',
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
            <FallbackImageText
                imagePath={testImage}
                label="Data tidak ditemukan"
            />
        </div>
    ),
};

export const WithoutImage: Story = {
    render: () => (
        <div className="max-w-md">
            <FallbackImageText label="Tidak ada gambar, hanya teks" />
        </div>
    ),
};

export const CustomSize: Story = {
    render: () => (
        <div className="max-w-md">
            <FallbackImageText
                imagePath={testImage}
                label="Ukuran kustom"
                imageClassName="h-72 w-72"
            />
        </div>
    ),
};
