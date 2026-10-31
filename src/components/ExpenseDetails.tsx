import type { Expense } from "@/types";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type ExpenseDetailsProps = {
  expense: Expense;
};

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

export default function ExpenseDetails({ expense }: ExpenseDetailsProps) {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Image source={{ uri: expense.photoUrl }} style={styles.photo} />
      <View style={styles.body}>
        <Text style={styles.total}>{expense.total.toFixed(2)} KM</Text>
        <Text style={styles.merchant}>{expense.merchant}</Text>
        <View style={styles.rows}>
          <Row label="Date" value={expense.date} />
          <Row label="Category" value={expense.category} />
          {expense.note ? <Row label="Note" value={expense.note} /> : null}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: 24 },
  photo: { width: "100%", height: 260 },
  body: { padding: 16, gap: 4 },
  total: { fontSize: 32, fontWeight: "700" },
  merchant: { fontSize: 18, fontWeight: "600" },
  rows: { marginTop: 16 },
  row: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#DCE2EA",
  },
  label: { fontSize: 12, color: "#55627A", textTransform: "uppercase" },
  value: { fontSize: 16, marginTop: 2, textTransform: "capitalize" },
});
