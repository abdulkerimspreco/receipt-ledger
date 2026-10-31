export type Category = "food" | "bills" | "transport" | "shopping" | "other";

export type Expense = {
    id: string,
    merchant: string,
    date: string,
    total: number,
    category: Category,
    photoUrl: string,
    note?: string
};