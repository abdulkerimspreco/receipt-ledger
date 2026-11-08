import ExpenseDetails from "@/components/ExpenseDetails";
import { expenses } from "@/data/expenses";
import { Expense } from "@/types";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ExpenseDetailsScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const expense = expenses.find((expenseItem: Expense) => expenseItem.id === id);

    if (!expense) {
        return (
            <View style={styles.center}>
                <Text>Expense not found!</Text>
            </View>
        );
    }

    return (
        <>
            <Stack.Screen options={{ title: expense.merchant }} />
            <ExpenseDetails expense={expense} />
        </>
    )
}

const styles = StyleSheet.create({
    center: { flex: 1, alignItems: "center", justifyContent: "center" },
});