import clsx from 'clsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';


export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children?: ReactNode;
    asChild?: boolean;
}

export function Text({ size = 'md', children, asChild }: TextProps) {
    const CustomTag = asChild ? Slot : 'span';


    return (
        <CustomTag
            className={clsx(
                'text-gray-100 font-sans',
                {
                    'text-xs': size == 'sm',
                    'text-sm': size == 'md',
                    'text-md': size == 'lg'
                }
            )

            }
        >
            {children}
        </CustomTag>
    )
}