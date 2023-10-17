import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  heading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontWeight: "bold",
  },

  fieldContainer: {
    flex: 3,
    padding: 10,
  },

  inputField: {
    marginBottom: 10,
  },

  errorText: {
    color: "red",
    fontWeight: "normal",
    fontFamily: "serif",
  },

  showbutton: {
    alignItems: "center",
    backgroundColor: "#10101E",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default styles;
