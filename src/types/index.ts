export interface ITransaction {
    transactionDate: Date;
    rewards: number;
    price: number;
}

export type ITransactions = ITransaction[];

export interface ITransactionList {
    getLastThreeMonthsRecords: () => ITransactions;
    getAllRecords: () => ITransactions;
    transactionList: ITransactions;
    getTotalRewards: () => number;
    addTransaction: (price: number) => void;
    rewardPerMonth: () => number[];
}
