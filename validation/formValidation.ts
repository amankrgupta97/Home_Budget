import * as Yup from "yup";

export const budgetEntryFormValidation = Yup.object({
  itemName: Yup.string().required("Item Name is missing"),
  plannedAmount: Yup.number()
    .positive()
    .required("please enter planned amount"),
  actualAmount: Yup.number()
    .positive()
    .required("please enter the actual amount"),
});
