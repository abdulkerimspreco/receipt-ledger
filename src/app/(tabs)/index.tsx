import ExpenseCard from "@/components/ExpenseCard";
import MonthCard from "@/components/MonthCard";
import { expenses } from "@/data/expenses";
import { Expense } from "@/types";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

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
  const [year, setYear] = useState(() => new Date().getFullYear());
  const [month, setMonth] = useState(() => new Date().getMonth());

  const monthExpenses = expenses.filter((e) => {
    const [y, m] = e.date.split("-").map(Number);
    return y === year && m === month + 1;
  });

  function shift(delta: number) {
    const next = month + delta;
    if (next < 0) { setMonth(11); setYear(year - 1); }
    else if (next > 11) { setMonth(0); setYear(year + 1); }
    else setMonth(next);
  }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <MonthCard
        monthLabel={`${MONTHS[month]} ${year}`}
        expenses={monthExpenses}
        onPrev={() => shift(-1)}
        onNext={() => shift(1)}
      />
      {monthExpenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 12 },
  count: { fontSize: 14, color: "#55627A" },
});
