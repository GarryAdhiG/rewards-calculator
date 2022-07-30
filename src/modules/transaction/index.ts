import { ITransaction } from '../../types';
import { calculateRewards } from '../../utils/helpers';

class Transaction implements ITransaction {
    rewards: number;
    transactionDate: Date;
    price: number;
    constructor(price: number) {
        this.price = price;
        this.rewards = calculateRewards(price);
        this.transactionDate = new Date();
    }
}
export default Transaction;
