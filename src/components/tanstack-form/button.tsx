import { useCallback, type FC, type ReactNode } from 'react';
import { Button } from '../ui/button';
import { IconLoader } from '@tabler/icons-react';
import { Field } from '../ui/field';
import { useNavigate } from '@tanstack/react-router';
import { useAlertDialogStore } from '@/stores/alert-dialog-store';

interface TfSubmitButtonProps {
    isLoading: boolean;
    children: ReactNode;
}

interface TfCancelButtonProps {
    children: ReactNode;
    to: string;
    disabled?: boolean;
}

export const TfSubmitButton: FC<TfSubmitButtonProps> = ({
    isLoading,
    children,
}) => {
    return (
        <Field>
            <Button type="submit" disabled={isLoading}>
                {isLoading ? <IconLoader className="animate-spin" /> : children}
            </Button>
        </Field>
    );
};

export const TfCancelButton: FC<TfCancelButtonProps> = ({
    to,
    children,
    disabled = false,
}) => {
    const navigation = useNavigate();
    const { showConfirmation } = useAlertDialogStore();

    const handleCancel = useCallback(() => {
        showConfirmation(
            'Konfirmasi Pembatalan',
            () => {
                navigation({
                    to: to as any,
                });
            },
            'Apakah Anda yakin ingin membatalkan? Perubahan yang belum disimpan akan hilang.',
        );
    }, [showConfirmation, navigation, to]);

    return (
        <Field>
            <Button type='button' variant='destructive' disabled={disabled} onClick={handleCancel}>
                {children}
            </Button>
        </Field>
    );
};