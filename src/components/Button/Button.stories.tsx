import { Button, ButtonProps } from "./Button";

import { Meta, StoryObj } from '@storybook/react';


// indicando a categoria e qual o componente a ser documentado (global)...
export default {
    title: 'Components/Button',
    component: Button,
    // Com o args, a gente pode controlar as propriedades que o componente recebe...
    // é basicamente onde a gente define as props padrão do componente na documentação do SB.
    args: {
        //Definindo Buttono padrão da propriedade que o componente a ser documentado no storybook vai possuir
        children: 'Criar uma conta'
    },
    argTypes: {}
} as Meta<ButtonProps>


// Com essa configuração a gente pode definir uma visualização "direta" de cada propriedade do componente
export const Default: StoryObj<ButtonProps> = {}