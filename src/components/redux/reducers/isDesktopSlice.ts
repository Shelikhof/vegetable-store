import { createSlice } from '@reduxjs/toolkit';

type typeInitialState = {
	isDesktop: boolean;
};

const initialState: typeInitialState = {
	isDesktop: true,
};
const isDesktopSlice = createSlice({
	name: 'isDesktopSlice',
	initialState,
	reducers: {
		setIsDesktop(state, action) {
			state.isDesktop = action.payload;
		},
	},
});

export default isDesktopSlice.reducer;
export const { setIsDesktop } = isDesktopSlice.actions;
