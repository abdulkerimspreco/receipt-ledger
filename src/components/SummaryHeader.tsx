import type { Expense } from "@/types";
import { StyleSheet, Text } from "react-native";

type SummaryHeaderProps = {
  expenses: Array<Expense>;
};

export default function SummaryHeader({ expenses }: SummaryHeaderProps) {
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.total, 0);

  return (
    <Text style={styles.summary}>
      {expenses.length} expenses · {totalSpent.toFixed(2)} KM
    </Text>
  );
}

const styles = StyleSheet.create({
  summary: { fontSize: 15, fontWeight: "600", color: "#0F1B2D" },
});
