import React from 'react';
import { Field } from './Field';
import type { FieldProps } from './Field';
import { Story } from '@storybook/react/types-6-0';

const arrayDiedCell = () =>
	Array.from<boolean[]>({ length: 10 }).fill(
		Array.from<boolean>({ length: 10 }).fill(false),
	);

const arrayAliveCell = () =>
	Array.from<boolean[]>({ length: 10 }).fill(
		Array.from<boolean>({ length: 10 }).fill(true),
	);

const arrayRandomCell = (cellStatus = () => Math.random() < 0.3) => {
	const grid: boolean[][] = [];
	for (let y = 0; y < 10; y++) {
		grid[y] = [];
		for (let x = 0; x < 10; x++) {
			grid[y][x] = cellStatus();
		}
	}
	return grid;
};

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Component / Board /Field',
	component: Field,
	argTypes: {
		field: {
			control: {
				type: 'inline-radio',
				options: {
					'"Мертвые" ячейки': arrayDiedCell(),
					'"Живые" ячейки': arrayAliveCell(),
					'Рандомное поле': arrayRandomCell(),
				},
			},
			description: 'Заполненость поля в соответствии со статусами ячеек',
			name: 'Заполненость поля',
		},
		onClick: {
			action: 'clicked',
			description: 'Событие нажатия на ячейку, обязательный параметр',
			name: 'Нажатие на ячейку',
		},
	},
	args: {
		field: arrayDiedCell(),
	},
};

export const Basic: Story<FieldProps> = (args: FieldProps) => (
	<Field {...args} />
);
