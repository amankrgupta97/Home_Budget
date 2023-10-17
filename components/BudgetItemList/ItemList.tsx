import { Text, ScrollView } from "react-native";
import React from "react";
import { List } from "react-native-paper";
import { useAppSelector } from "../../hook/useAppSelector";
import { getSavedItemList } from "../../store/slices/budgetSlice";

const ItemList = () => {
  const savedItemsList = useAppSelector(getSavedItemList);
  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>Budget Entry Listing</List.Subheader>
        {savedItemsList.map((budgetEntry, idx) => (
          <List.Item
            title={budgetEntry.itemName}
            key={idx}
            description={() => (
              <>
                <Text>Planned Amount:{budgetEntry.plannedAmount}</Text>
                <Text>Actual Amount: {budgetEntry.actualAmount}</Text>
              </>
            )}
          />
        ))}
      </List.Section>
    </ScrollView>
  );
};

export default ItemList;
