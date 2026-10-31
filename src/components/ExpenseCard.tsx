import type { Expense } from "@/types";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type ExpenseCardProps = {
  expense: Expense;
};

export default function ExpenseCard({ expense }: ExpenseCardProps) {
  return (
    <Pressable
      onPress={() => console.log("Open", expense.id)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Image source={{ uri: expense.photoUrl }} style={styles.photo} />
      <View style={styles.body}>
        <Text style={styles.title}>{expense.merchant}</Text>
        <Text style={styles.details}>
          {expense.category} · {expense.date} · {expense.total.toFixed(2)} KM
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 12, overflow: "hidden", backgroundColor: "#E6EEF7" },
  pressed: { opacity: 0.6 },
  photo: { width: "100%", height: 160 },
  body: { padding: 12, gap: 2 },
  title: { fontSize: 16, fontWeight: "700" },
  details: { fontSize: 13, color: "#55627A" },
});
