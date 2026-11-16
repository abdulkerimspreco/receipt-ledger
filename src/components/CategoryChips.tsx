import { FontSize, Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import type { Category } from "@/types";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

export type CategoryFilter = Category | "all";

const CHIPS: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "food", label: "Food" },
  { value: "transport", label: "Transport" },
  { value: "bills", label: "Bills" },
  { value: "shopping", label: "Shopping" },
  { value: "other", label: "Other" },
];

type CategoryChipsProps = {
  selected: CategoryFilter;
  onSelect: (value: CategoryFilter) => void;
};

export default function CategoryChips({
  selected,
  onSelect,
}: CategoryChipsProps) {
  const theme = useTheme();

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
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
            hitSlop={{ top: Spacing.sm, bottom: Spacing.sm }}
            style={[
              styles.chip,
              {
                backgroundColor: active ? theme.primary : theme.card,
                borderColor: active ? theme.primary : theme.border,
              },
            ]}
          >
            <Text
              style={[
                styles.label,
                { color: active ? theme.onPrimary : theme.text },
              ]}
            >
              {chip.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 0 },
  row: { gap: Spacing.sm },
  chip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
  label: { fontSize: FontSize.small, fontWeight: "600" },
});
