import { TextInput, TextInputRootProps } from "./TextInput";

import { Meta, StoryObj } from '@storybook/react';

import { Envelope } from 'phosphor-react'


// indicando a categoria e qual o componente a ser documentado (global)...
export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    // Com o args, a gente pode controlar as propriedades que o componente recebe...
    // é basicamente onde a gente define as props padrão do componente na documentação do SB.
    args: {
        children: [
            <TextInput.icon>
                <Envelope />
            </TextInput.icon>,
            <TextInput.Input placeholder="Seu placeholder aqui..." />
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<TextInputRootProps>


// Com essa configuração a gente pode definir uma visualização "direta" de cada propriedade do componente
export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args:{
        children: (<TextInput.Input placeholder="Seu placeholder aqui..." />)
    }
}