import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function TopCompanyIcon({ logoUrl, companyName }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={logoUrl} style={styles.logo} resizeMode="contain" />
      </View>

      <Text style={styles.name}>{companyName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    alignItems: "center",
    marginRight: 16,
  },

  logoWrapper: {
    width: 76,
    height: 76,
    borderRadius: 22,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  logo: {
    width: 42,
    height: 42,
  },

  name: {
    fontSize: 13,
    color: "#333",
    marginTop: 4,
    textAlign: "center",
  },
});
