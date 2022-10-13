import { Heading, HeadingProps } from "./Heading";

import { Meta, StoryObj } from '@storybook/react';


// indicando a categoria e qual o componente a ser documentado (global)...
export default {
    title: 'Components/Heading',
    component: Heading,
    // Com o args, a gente pode controlar as propriedades que o componente recebe...
    // é basicamente onde a gente define as props padrão do componente na documentação do SB.
    args: {
        //Definindo Heading padrão da propriedade que o componente a ser documentado no storybook vai possuir
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
} as Meta<HeadingProps>


// Com essa configuração a gente pode definir uma visualização "direta" de cada propriedade do componente
export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Tag h1 no componente de Heading.</h1>
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