import { colors } from "@/theme";
import type { Expense } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface MonthCardProps {
    monthLabel: string,
    expenses: Array<Expense>,
    onPrev: () => void,
    onNext: () => void,
}

export default function MonthCard(props: MonthCardProps) {
    const {
        monthLabel,
        expenses,
        onPrev,
        onNext
    } = props;

    const total = expenses.reduce((sum, e) => sum + e.total, 0);

    return (
        <View style={styles.card}>
            <View style={styles.monthRow}>
                <Pressable onPress={onPrev} hitSlop={12}>
                    <Ionicons name="chevron-back" size={18} color={colors.white} />
                </Pressable>
                <Text style={styles.month}>{monthLabel}</Text>
                <Pressable onPress={onNext} hitSlop={12}>
                    <Ionicons name="chevron-forward" size={18} color={colors.white} />
                </Pressable>
            </View>

            <Text style={styles.label}>Spent this month</Text>
            <Text style={styles.total}>{total.toFixed(2)} KM</Text>

            <View style={styles.legend}>
                <LegendDot color={colors.food} label="Food" />
                <LegendDot color={colors.bills} label="Bills" />
                <LegendDot color={colors.other} label="Other" />
            </View>
        </View>
    );
}

interface LegendDotProps {
    color: string,
    label: string
}

function LegendDot(props: LegendDotProps) {
    const { color, label } = props;

    return (
        <View style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: color }]} />
            <Text style={styles.legendText}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { backgroundColor: colors.green, borderRadius: 16, padding: 16, gap: 4 },
    monthRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    month: { color: colors.white, fontSize: 13, fontWeight: "600" },
    label: { color: colors.greenSoft, fontSize: 12, marginTop: 8 },
    total: { color: colors.white, fontSize: 32, fontWeight: "700" },
    legend: { flexDirection: "row", gap: 12, marginTop: 8 },
    legendItem: { flexDirection: "row", alignItems: "center", gap: 4 },
    dot: { width: 8, height: 8, borderRadius: 4 },
    legendText: { color: colors.greenSoft, fontSize: 11 },
});