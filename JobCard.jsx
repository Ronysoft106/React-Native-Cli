import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { THEME_COLOR } from "../utils/Dimensions";

export default function JobCard({ title, company, location, salary, tags, logo, isFirst }) {
  return (
    <View style={[styles.card, isFirst && { marginLeft: 20 }]}>
      <Image source={logo} style={styles.logo} />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.company}>{company}</Text>
        <Text style={styles.location}>{location}</Text>

        <Text style={styles.salary}>{salary}</Text>

        <View style={styles.tagContainer}>
          {tags.map((t, i) => (
            <View key={i} style={styles.tag}>
              <Text style={styles.tagText}>{t}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyText}>Apply now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: 260,
    borderRadius: 20,
    padding: 18,
    marginRight: 20,  
    elevation: 2,
  },
  logo: {
    width: 42,
    height: 42,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: { fontSize: 16, fontWeight: "bold", color: "#222" },
  company: { fontSize: 14, color: "#444", marginTop: 2 },
  location: { fontSize: 13, color: "#777", marginTop: 2 },
  salary: { fontSize: 14, color: THEME_COLOR, marginTop: 6 },

  tagContainer: { flexDirection: "row", marginTop: 10 },
  tag: {
    backgroundColor: "#EFEFFE",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 8,
  },
  tagText: { fontSize: 12, color: THEME_COLOR },

  applyButton: {
    backgroundColor: THEME_COLOR,
    marginTop: 14,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  applyText: { color: "#fff", fontWeight: "bold",},
});
