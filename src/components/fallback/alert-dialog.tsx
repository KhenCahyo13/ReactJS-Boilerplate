import { IconAlertCircleFilled, IconCircleCheckFilled, IconCircleXFilled, IconInfoCircleFilled } from "@tabler/icons-react";

import { type AlertDialogState, type AlertType,useAlertDialogStore } from "@/stores/alert-dialog-store";

import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";

interface AlertDialogProps extends AlertDialogState {
    onOpenChange: (open: boolean) => void;
}

const alertDialogConfig = {
    success: {
        bgColor: 'bg-green-50 dark:bg-green-950',
        borderColor: 'border-green-200 dark:border-green-800',
        textColor: 'text-green-800 dark:text-green-200',
        icon: <IconCircleCheckFilled className="size-8 text-green-600 dark:text-green-400" />,
    },
    error: {
        bgColor: 'bg-destructive/10 dark:bg-destructive/20',
        borderColor: 'border-destructive/30 dark:border-destructive/40',
        textColor: 'text-destructive dark:text-destructive',
        icon: <IconCircleXFilled className="size-8 text-destructive dark:text-destructive" />,
    },
    warning: {
        bgColor: 'bg-orange-50 dark:bg-orange-950',
        borderColor: 'border-orange-200 dark:border-orange-800',
        textColor: 'text-orange-800 dark:text-orange-200',
        icon: <IconAlertCircleFilled className="size-8 text-orange-600 dark:text-orange-400" />,
    },
    info: {
        bgColor: 'bg-blue-50 dark:bg-blue-950',
        borderColor: 'border-blue-200 dark:border-blue-800',
        textColor: 'text-blue-800 dark:text-blue-200',
        icon: <IconInfoCircleFilled className="size-8 text-blue-600 dark:text-blue-400" />,
    },
};

export const Alert = ({
    open,
    onOpenChange,
    type,
    title,
    description,
    action = 'message',
    onConfirm,
    onCancel,
    confirmText = 'Ya',
    cancelText = 'Batalkan',
    isLoading = false,
    showCloseButton = true,
}: AlertDialogProps) => {
    const config = alertDialogConfig[type];
    const isConfirmation = action === 'confirmation';

    const handleConfirm = async () => {
        if (onConfirm) {
            await onConfirm();
        }
        onOpenChange(false);
    };

    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        }
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent showCloseButton={showCloseButton}>
                <DialogHeader>
                    <div className="flex items-center gap-3">
                        <div className="hidden md:block">
                            {config.icon}
                        </div>
                        <DialogTitle className={getTitleColorByType(type)}>{title}</DialogTitle>
                    </div>
                </DialogHeader>

                {description && (
                    <DialogDescription className="text-foreground" asChild>
                        {typeof description === 'string' ? <p>{description}</p> : description}
                    </DialogDescription>
                )}

                {isConfirmation && (
                    <DialogFooter>
                        <Button variant="outline" onClick={handleCancel} disabled={isLoading}>
                            {cancelText}
                        </Button>
                        <Button
                            onClick={handleConfirm}
                            disabled={isLoading}
                            className={getButtonColorByType(type)}
                        >
                            {confirmText}
                        </Button>
                    </DialogFooter>
                )}

                {!isConfirmation && (
                    <DialogFooter>
                        <Button
                            onClick={() => onOpenChange(false)}
                            className={getButtonColorByType(type)}
                        >
                            OK
                        </Button>
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    );
}

function getButtonColorByType(type: AlertType): string {
    switch (type) {
        case 'success':
            return 'bg-green-600 hover:bg-green-700 text-white';
        case 'error':
            return 'bg-destructive hover:bg-destructive/90 text-white';
        case 'warning':
            return 'bg-orange-600 hover:bg-orange-700 text-white';
        case 'info':
            return 'bg-blue-600 hover:bg-blue-700 text-white';
        default:
            return '';
    }
}

function getTitleColorByType(type: AlertType): string {
    switch (type) {
        case 'success':
            return 'text-green-600 dark:text-green-400';
        case 'error':
            return 'text-destructive dark:text-destructive/90';
        case 'warning':
            return 'text-orange-600 dark:text-orange-400';
        case 'info':
            return 'text-blue-600 dark:text-blue-400';
        default:
            return '';
    }
}

// Standalone Alert Dialog Container
export function AlertDialogProvider() {
    const state = useAlertDialogStore();
    const closeDialog = useAlertDialogStore((store) => store.closeDialog);

    const handleOpenChange = (open: boolean) => {
        if (!open) {
            closeDialog();
        }
    };

    return <Alert {...state} onOpenChange={handleOpenChange} />;
}