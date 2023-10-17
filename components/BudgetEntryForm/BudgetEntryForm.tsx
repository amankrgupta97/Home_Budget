import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import { Link } from "expo-router";
import {
  appendToSavedItemList,
  budgetEntry,
  setBudgetEntry,
} from "../../store/slices/budgetSlice";
import { Formik } from "formik";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { budgetEntryFormValidation } from "../../validation/formValidation";
import styles from "./budgetEntryForm.style";

const BudgetEntryForm = () => {
  const initialValue = {
    itemName: "",
    plannedAmount: "",
    actualAmount: "",
  } as budgetEntry;
  const dispatch = useAppDispatch();
  return (
    <ScrollView>
      <Formik
        initialValues={{ ...initialValue }}
        validationSchema={budgetEntryFormValidation}
        onSubmit={(values, formikHelpers) => {
          dispatch(setBudgetEntry(values));
          dispatch(appendToSavedItemList());
          alert("Successfully saved you Entry!");
          formikHelpers.resetForm();
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <View style={styles.fieldContainer}>
            <TextInput
              style={styles.inputField}
              mode={"outlined"}
              label="Item Name"
              value={values.itemName}
              onChangeText={handleChange("itemName")}
            />
            {errors.itemName && touched.itemName ? (
              <Text style={styles.errorText}>{errors.itemName}</Text>
            ) : null}
            <TextInput
              style={styles.inputField}
              mode={"outlined"}
              label="Planned Amount"
              keyboardType={"numeric"}
              value={values.plannedAmount}
              onChangeText={handleChange("plannedAmount")}
            />
            {errors.plannedAmount && touched.plannedAmount ? (
              <Text style={styles.errorText}>{errors.plannedAmount}</Text>
            ) : null}

            <TextInput
              style={styles.inputField}
              mode={"outlined"}
              label="Actual Amount"
              keyboardType={"numeric"}
              value={values.actualAmount}
              onChangeText={handleChange("actualAmount")}
            />
            {errors.actualAmount && touched.actualAmount ? (
              <Text style={styles.errorText}>{errors.actualAmount}</Text>
            ) : null}
            <Button mode="contained" onPress={() => handleSubmit()}>
              Save
            </Button>
          </View>
        )}
      </Formik>
      <Link href={"/savedItems"} asChild>
        <TouchableOpacity style={styles.showbutton}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Show Item</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
};

export default BudgetEntryForm;
