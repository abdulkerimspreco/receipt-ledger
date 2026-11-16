import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, Text, View } from "react-native";

export default function Settings() {
  const theme = useTheme();

  return (
    <View style={styles.center}>
      <Text style={{ color: theme.text }}>Settings coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
});
