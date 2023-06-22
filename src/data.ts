export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data = {
  report: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 7500,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid2',
      source: 'Youtube',
      amount: 2200,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid3',
      source: 'Food',
      amount: 4000,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
    type: ReportType;
  }[];
}
