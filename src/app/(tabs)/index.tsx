import ExpenseCard from "@/components/ExpenseCard";
import SummaryHeader from "@/components/SummaryHeader";
import { expenses } from "@/data/expenses";
import { Expense } from "@/types";
import { ScrollView, StyleSheet } from "react-native";

export const ExpensesList = () => {
  return (
    <>
      {expenses.map((expense: Expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
    </>
  );
};

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <SummaryHeader expenses={expenses} />
      <ExpensesList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 12 },
  count: { fontSize: 14, color: "#55627A" },
});
