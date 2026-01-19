import type { ReactNode } from 'react';

interface LayoutProps {
    children?: ReactNode;
    className?: string;
}

export interface Filter {
    key: string;
    value: string | number | boolean;
}

// If you're going to use Tanstack Form Arrays
export interface TfField<TValue> {
    state: { value: unknown[] };
    removeValue: (arg0: unknown) => void;
    pushValue: (arg0: TValue) => void;
}

export interface TfSubField {
    state: {
        meta: {
            isTouched: boolean;
            isValid: boolean;
            errors: ({ message?: string } | undefined)[] | undefined;
        };
        value: string | undefined;
    };
    handleChange: (arg0: string) => void;
}

// If you're going to use Stepperize
export interface StepperData {
    id: string;
    title: string;
    description?: string;
}

export interface StepperMethods {
    all: StepperData[];
    current: StepperData;
    goTo: (stepId: string) => void;
    next: () => void;
    prev: () => void;
    isFirst: boolean;
    isLast: boolean;
    switch: (steps: Record<string, () => ReactNode>) => ReactNode;
}
