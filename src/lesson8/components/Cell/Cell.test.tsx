import React from 'react';
import { mount } from 'enzyme';
import { Cell } from './Cell';

//TODO дописать onclick

test.each`
	inputfilled | expected
	${true}     | ${'<div class="cell cell-filled"></div>'}
	${false}    | ${'<div class="cell cell-empty"></div>'}
`('renders cell for empty or filled', ({ inputfilled, expected }) => {
	const cellItem = mount(<Cell filled={inputfilled} x={1} y={2} />);

	expect(cellItem.html()).toBe(expected);
});