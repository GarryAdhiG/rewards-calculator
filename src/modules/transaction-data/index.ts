import { month } from '../../utils/constants';
import { SORT_DIRECTION } from '../../utils/constants';
import { ITransactionList, ITransactions } from '../../types';

import { getThreeMonthDate, sortData } from '../../utils/helpers';
import Transaction from '../transaction';

export default class TransactionDataSet implements ITransactionList {
    transactionList: ITransactions;
    constructor() {
        this.transactionList = [];
    }
    addTransaction(price: number) {
        this.transactionList.push(new Transaction(price));
    }
    getTotalRewards = (): number => {
        return this.transactionList.length ? this.transactionList.reduce((acc, key) => key.rewards + acc, 0) : 0;
    };
    getLastThreeMonthsRecords = (): ITransactions => {
        let filteredList = this.transactionList.filter(trans => trans.transactionDate > getThreeMonthDate());
        return sortData('transactionDate', filteredList, SORT_DIRECTION.DESCENDING);
    };
    rewardPerMonth() {
        const rewards = [];
        for (let i = 0; i < month; i++) {
            let filteredList = this.transactionList.filter(
                trans => trans.transactionDate.getMonth() == new Date().getMonth() - i
            );
            rewards[i] = filteredList.reduce((acc, key) => key.rewards + acc, 0);
        }
        return rewards;
    }
    getAllRecords = (): ITransactions => {
        return sortData('transactionDate', this.transactionList, SORT_DIRECTION.DESCENDING);
    };
}
