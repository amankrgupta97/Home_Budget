import { View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import BudgetEntryForm from "../components/BudgetEntryForm/BudgetEntryForm";
import styles from "../components/BudgetEntryForm/budgetEntryForm.style";

const BudgetEntryPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title} variant="headlineSmall">
          Budget Entry
        </Text>
      </View>
      <BudgetEntryForm />
    </View>
  );
};

export default BudgetEntryPage;
