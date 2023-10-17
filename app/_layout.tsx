import React from "react";
import { Stack } from "expo-router";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    secondary: "gray",
  },
};

let persistor = persistStore(store);

const RootLayout = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: "#10101E",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen
              name="index"
              options={{ headerTitle: "Home Budget", headerShown: true }}
            />
            <Stack.Screen
              name="savedItems"
              options={{ headerTitle: "Saved Items", headerShown: true }}
            />
          </Stack>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default RootLayout;
