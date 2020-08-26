import React, { FC } from 'react';
import { InputSpeedType } from '../../../types/Interfaces/InputSpeedType';

export const InputSpeed: FC<InputSpeedType> = ({ speedValue, onChange }) => {
	return (
		<>
			<input
				type="range"
				name="speedValue"
				min="50"
				max="1000"
				step="50"
				value={speedValue}
				onChange={onChange}
			/>
			<label htmlFor="speedValue">{'Изменить скорость'}</label>
		</>
	);
};
