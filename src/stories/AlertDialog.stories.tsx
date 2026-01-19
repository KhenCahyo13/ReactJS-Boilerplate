import '@/index.css';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { AlertDialogProvider } from '@/components/fallback/alert-dialog';
import { Button } from '@/components/ui/button';
import { useAlertDialogStore } from '@/stores/alert-dialog-store';

const meta: Meta<typeof AlertDialogProvider> = {
    title: 'Components/Fallback/AlertDialog',
    component: AlertDialogProvider,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Global alert/confirmation dialog provider using Zustand store. Trigger alerts via store methods.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

function DemoTriggers() {
    const { showSuccess, showError, showWarning, showInfo, showConfirmation } =
        useAlertDialogStore();

    const [confirmed, setConfirmed] = useState(false);

    return (
        <div className="grid grid-cols-2 gap-4 max-w-lg">
            <Button
                onClick={() => showInfo('Informasi', 'Ini adalah pesan info')}
            >
                Info
            </Button>
            <Button
                onClick={() =>
                    showSuccess('Berhasil', 'Operasi berhasil dilakukan')
                }
            >
                Success
            </Button>
            <Button
                onClick={() =>
                    showWarning(
                        'Peringatan',
                        'Ada sesuatu yang perlu diperhatikan'
                    )
                }
            >
                Warning
            </Button>
            <Button
                onClick={() =>
                    showError(
                        'Error',
                        'Terjadi kesalahan yang tidak diinginkan'
                    )
                }
            >
                Error
            </Button>
            <Button
                variant="secondary"
                onClick={() =>
                    showConfirmation(
                        'Konfirmasi',
                        () => setConfirmed(true),
                        'Apakah Anda yakin ingin melanjutkan?',
                        {
                            type: 'warning',
                            confirmText: 'Ya',
                            cancelText: 'Tidak',
                        }
                    )
                }
            >
                Confirmation
            </Button>
            <div className="text-sm text-muted-foreground">
                Confirmed: {confirmed ? 'Yes' : 'No'}
            </div>
        </div>
    );
}

export const Playground: Story = {
    render: () => {
        return (
            <div className="space-y-4">
                <DemoTriggers />
                <AlertDialogProvider />
            </div>
        );
    },
};
