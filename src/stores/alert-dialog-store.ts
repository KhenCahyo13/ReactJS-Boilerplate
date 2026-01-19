import type { ReactNode } from 'react';
import { create } from 'zustand';

export type AlertType = 'success' | 'error' | 'warning' | 'info';
export type AlertAction = 'message' | 'confirmation';

export interface AlertDialogState {
    open: boolean;
    type: AlertType;
    title: string;
    description?: ReactNode;
    action?: 'message' | 'confirmation';
    onConfirm?: () => void | Promise<void>;
    onCancel?: () => void;
    confirmText?: string;
    cancelText?: string;
    isLoading?: boolean;
    showCloseButton?: boolean;
}

interface AlertDialogActions {
    setState: (state: Partial<AlertDialogState>) => void;
    closeDialog: () => void;
    showMessage: (
        title: string,
        description?: ReactNode,
        type?: AlertType,
        showCloseButton?: boolean
    ) => void;
    showSuccess: (title: string, description?: ReactNode) => void;
    showError: (title: string, description?: ReactNode) => void;
    showWarning: (title: string, description?: ReactNode) => void;
    showInfo: (title: string, description?: ReactNode) => void;
    showConfirmation: (
        title: string,
        onConfirm: () => void | Promise<void>,
        description?: ReactNode,
        options?: {
            type?: AlertType;
            confirmText?: string;
            cancelText?: string;
            onCancel?: () => void;
            showCloseButton?: boolean;
        }
    ) => void;
}

export const useAlertDialogStore = create<
    AlertDialogState & AlertDialogActions
>((set) => ({
    // Initial state
    open: false,
    type: 'info',
    title: '',
    description: undefined,
    action: 'message',
    onConfirm: undefined,
    onCancel: undefined,
    confirmText: 'Ya',
    cancelText: 'Batalkan',
    isLoading: false,
    showCloseButton: true,

    // Actions
    setState: (newState) =>
        set((state) => ({
            ...state,
            ...newState,
        })),

    closeDialog: () =>
        set({
            open: false,
        }),

    showMessage: (title, description, type = 'info', showCloseButton) =>
        set({
            open: true,
            type,
            title,
            description,
            action: 'message',
            showCloseButton,
        }),

    showSuccess: (title, description) =>
        set({
            open: true,
            type: 'success',
            title,
            description,
            action: 'message',
        }),

    showError: (title, description) =>
        set({
            open: true,
            type: 'error',
            title,
            description,
            action: 'message',
        }),

    showWarning: (title, description) =>
        set({
            open: true,
            type: 'warning',
            title,
            description,
            action: 'message',
        }),

    showInfo: (title, description) =>
        set({
            open: true,
            type: 'info',
            title,
            description,
            action: 'message',
        }),

    showConfirmation: (title, onConfirm, description, options) =>
        set({
            open: true,
            type: options?.type || 'warning',
            title,
            description,
            action: 'confirmation',
            onConfirm,
            onCancel: options?.onCancel,
            confirmText: options?.confirmText || 'Ya',
            cancelText: options?.cancelText || 'Batalkan',
            showCloseButton: options?.showCloseButton ?? true,
        }),
}));
