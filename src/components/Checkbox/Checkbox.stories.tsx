import { Checkbox, CheckboxProps } from "./Checkbox";

import { Meta, StoryObj } from '@storybook/react';
import { Text } from "../Text";


// indicando a categoria e qual o componente a ser documentado (global)...
export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    // Com o args, a gente pode controlar as propriedades que o componente recebe...
    // é basicamente onde a gente define as props padrão do componente na documentação do SB.
    args: {},
    argTypes: {},
    decorators: [
        (story) => {
            return (
                <div className="flex items-center gap-2">
                    {story()}
                    <Text size="sm">Lembrar de mim por 30 dias</Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>


// Com essa configuração a gente pode definir uma visualização "direta" de cada propriedade do componente
export const Default: StoryObj<CheckboxProps> = {}