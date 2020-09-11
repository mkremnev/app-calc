import { Action } from 'redux';
import * as actionTypes from '@/rdx/actions';

type GameFieldState = boolean[][];
const cellGridFillRandom = (
	rows: number,
	columns: number,
	cellStatus = () => Math.random() < 0.3,
) => {
	const grid: GameFieldState = [];
	for (let y = 0; y < rows; y++) {
		grid[y] = [];
		for (let x = 0; x < columns; x++) {
			grid[y][x] = cellStatus();
		}
	}
	return grid;
};

const defaultState: GameFieldState = cellGridFillRandom(20, 20);

export function field(
	state: GameFieldState = defaultState,
	action: Action & { payload?: any },
): GameFieldState {
	switch (action.type) {
		case actionTypes.SET_CELL: {
			const { x, y } = action.payload;
			const newState = state.map((row) => [...row]);
			newState[x][y] = !newState[x][y];
			return newState;
		}

		case actionTypes.CLEAR_BOARD: {
			const newState = cellGridFillRandom(20, 20, () => false);
			return newState;
		}

		case actionTypes.UPDATE_BOARD: {
			const newState = cellGridFillRandom(20, 20);
			return newState;
		}
	}

	return state;
}
