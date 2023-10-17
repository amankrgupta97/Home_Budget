import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface budgetEntry {
  itemName: string;
  plannedAmount: string;
  actualAmount: string;
}

const savedItemList: budgetEntry[] = [];

const initialState = {
  budgetEntry: {} as budgetEntry,
  savedItemList,
};

const budgetSlice = createSlice({
  name: "budgetItem",
  initialState,
  reducers: {
    setBudgetEntry(state, action) {
      state.budgetEntry.itemName = action.payload.itemName;
      state.budgetEntry.plannedAmount = action.payload.plannedAmount;
      state.budgetEntry.actualAmount = action.payload.actualAmount;
    },
    appendToSavedItemList(state) {
      state.savedItemList.push(state.budgetEntry);
    },
  },
});

export const { setBudgetEntry } = budgetSlice.actions;
export const { appendToSavedItemList } = budgetSlice.actions;
export default budgetSlice.reducer;
export const getBudgetEntry = (state: RootState) => state.budget.budgetEntry;
export const getSavedItemList = (state: RootState) =>
  state.budget.savedItemList;
