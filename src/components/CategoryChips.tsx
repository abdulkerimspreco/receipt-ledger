import { colors } from "@/theme";
import type { Category } from "@/types";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

export type CategoryFilter = Category | "all";

const CHIPS: Array<{ value: CategoryFilter; label: string }> = [
    { value: "all", label: "All" },
    { value: "food", label: "Food" },
    { value: "transport", label: "Transport" },
    { value: "bills", label: "Bills" },
    { value: "shopping", label: "Shopping" },
    { value: "other", label: "Other" },
];

interface CategoryChipsProps {
    selected: CategoryFilter;
    onSelect: (value: CategoryFilter) => void;
};

export default function CategoryChips(props: CategoryChipsProps) {
    const { selected, onSelect } = props;

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scroll}
            contentContainerStyle={styles.row}
        >
            {CHIPS.map((chip) => {
                const active = chip.value === selected;
                return (
                    <Pressable
                        key={chip.value}
                        onPress={() => onSelect(chip.value)}
                        style={[styles.chip, active && styles.chipActive]}
                    >
                        <Text style={[styles.label, active && styles.labelActive]}>
                            {chip.label}
                        </Text>
                    </Pressable>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: { flexGrow: 0 },
    row: { gap: 8 },
    chip: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 999,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.border,
    },
    chipActive: { backgroundColor: colors.ink, borderColor: colors.ink },
    label: { fontSize: 13, fontWeight: "600", color: colors.ink },
    labelActive: { color: colors.white },
});