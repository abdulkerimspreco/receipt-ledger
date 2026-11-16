import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import type { Expense } from "@/types";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ExpenseDetailsProps = {
  expense: Expense;
};

function Row({ label, value }: { label: string; value: string }) {
  const theme = useTheme();

  return (
    <View style={[styles.row, { borderBottomColor: theme.border }]}>
      <Text style={[styles.label, { color: theme.muted }]}>{label}</Text>
      <Text style={[styles.value, { color: theme.text }]}>{value}</Text>
    </View>
  );
}

export default function ExpenseDetails({ expense }: ExpenseDetailsProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: Spacing.lg + insets.bottom }}
    >
      <Image source={{ uri: expense.photoUrl }} style={styles.photo} />
      <View style={styles.body}>
        <Text style={[styles.total, { color: theme.text }]}>
          {expense.total.toFixed(2)} KM
        </Text>
        <Text style={[styles.merchant, { color: theme.text }]}>
          {expense.merchant}
        </Text>
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
  photo: { width: "100%", height: 260 },
  body: { padding: 16, gap: 4 },
  total: { fontSize: 32, fontWeight: "700" },
  merchant: { fontSize: 18, fontWeight: "600" },
  rows: { marginTop: 16 },
  row: {
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  label: { fontSize: 12, textTransform: "uppercase" },
  value: { fontSize: 16, marginTop: 2, textTransform: "capitalize" },
});
