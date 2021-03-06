import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Field } from '@/components/Field/Field';
import { GameOfLifeProto } from './GameOfLifeProto';

// eslint-disable-next-line no-restricted-syntax
export default {
	title: 'Modules / GameOfLifeProto',
	decorators: [withKnobs],
};

export const GameOfLifePrototip = () => (
	<GameOfLifeProto columns={20} rows={20} fieldComponent={Field} />
);

GameOfLifePrototip.story = {
	parameters: { loki: { skip: true } },
};
