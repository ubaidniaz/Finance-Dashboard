export interface ExpensesByCategory{
    salaries: number;
    supplies: number;
    services: number;
}

export interface Month{
    id: string;
    month: string;

    revenue: number;
    expenses: number;
    nonOperationalExpenses: number;
    operationalExpenses: number;
}
export interface Day{
    id: string;
    month: string;

    revenue: number;
    expenses: number;
    nonOperationalExpenses: number;
    operationalExpenses: number;
}

export interface GetKpisResponse{
    id: string;
    _id: string;
    __v: number;
    totalProgit: number;
    totalRevenue: number;
    totalExpenses:number;
    expensesByCategory: ExpensesByCategory;
    monthlyData: Array<Month>;
}