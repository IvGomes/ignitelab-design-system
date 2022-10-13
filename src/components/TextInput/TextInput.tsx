import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';



// Usando pattern de composição de composição
export interface TextInputRootProps {
    children: ReactNode
    
}

function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <div className='flex h-12 items-center gap-3 w-full bg-gray-800 py-3 px-4 rounded focus-within:ring-2 ring-gray-400'>
            {children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'


interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className='flex-1 bg-transparent text-gray-100 text-xs outline-none placeholder:text-gray-400'
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'


export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon({children}: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'


export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    icon: TextInputIcon
}