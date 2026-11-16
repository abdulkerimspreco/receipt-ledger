import { Colors, type Theme } from "@/constants/theme";
import { useColorScheme } from "react-native";

export function useTheme(): Theme {
  const scheme = useColorScheme();
  return Colors[scheme === "dark" ? "dark" : "light"];
}
