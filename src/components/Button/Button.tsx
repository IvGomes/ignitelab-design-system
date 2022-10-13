import clsx from 'clsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';


export interface ButtonProps {
    children?: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const CustomTag = asChild ? Slot : 'button';


    return (
        <CustomTag
            className={clsx(
                'w-full text-black bg-cyan-500 px-4 py-3 rounded text-sm font-semibold transition-colors hover:bg-cyan-300'
            )

            }
        >
            {children}
        </CustomTag>
    )
}