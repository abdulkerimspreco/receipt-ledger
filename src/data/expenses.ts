import type { Expense } from "@/types.ts";

export const expenses: Array<Expense> = [
  {
    id: "12345",
    merchant: "Aria Mall",
    date: "2026-10-23",
    total: 47.99,
    category: "food",
    photoUrl: "https://picsum.photos/seed/ariamall/600/400",
    note: "weekly groceries",
  },
  {
    id: "56789",
    merchant: "Bingo",
    date: "2026-09-27",
    total: 53.22,
    category: "shopping",
    photoUrl: "https://picsum.photos/seed/bingo/600/400",
    note: "shop for monthly outfit",
  },
  {
    id: "13579",
    merchant: "Energopetrol",
    date: "2026-09-29",
    total: 100.0,
    category: "transport",
    photoUrl: "https://picsum.photos/seed/energopetrol/600/400",
  },
  {
    id: "97531",
    merchant: "Vodovod i kanalizacije BiH",
    date: "2026-10-03",
    total: 23.33,
    category: "bills",
    photoUrl: "https://picsum.photos/seed/vikbih/600/400",
    note: "October water bills",
  },
  {
    id: "5",
    merchant: "Starlink",
    date: "2026-09-28",
    total: 87.99,
    category: "bills",
    photoUrl: "https://picsum.photos/seed/starlink/600/400",
    note: "Network bills",
  },
];
