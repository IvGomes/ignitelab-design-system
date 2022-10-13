import { Text, TextProps } from "./Text";

import { Meta, StoryObj } from '@storybook/react';


// indicando a categoria e qual o componente a ser documentado (global)...
export default {
    title: 'Components/Text',
    component: Text,
    // Com o args, a gente pode controlar as propriedades que o componente recebe...
    // é basicamente onde a gente define as props padrão do componente na documentação do SB.
    args: {
        //Definindo texto padrão da propriedade que o componente a ser documentado no storybook vai possuir
        children: 'Lorem Ipsum',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>


// Com essa configuração a gente pode definir uma visualização "direta" de cada propriedade do componente
export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Tag P no componente de texto.</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}