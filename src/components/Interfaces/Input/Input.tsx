/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/core';

export type inputAttributes = {
	type: string;
	name: string;
	placeholder?: string;
	min?: string;
	max?: string;
	step?: string;
	value?: number | string;
	border?: string;
	size?: number;
	onChange?: (ev: React.FormEvent<HTMLInputElement>) => void;
};

const styleComponent = (style: Pick<inputAttributes, 'border' | 'size'>) => css`
	border: ${style.border || '1px solid grey'};
	size: ${style.size || 10};
`;

const renderCondition = (
	prevProps: React.HTMLProps<HTMLInputElement>,
	nextProps: React.HTMLProps<HTMLInputElement>,
) => prevProps.value === nextProps.value;

const InputComponent = (props: React.HTMLProps<HTMLInputElement>) => {
	const [value, setValue] = useState('');
	return (
		<input
			value={value}
			onChange={(e) => setValue(e.target.value)}
			{...props}
			css={styleComponent}
		/>
	);
};

export const Input = React.memo(InputComponent, renderCondition);
Input.displayName = 'Input';
