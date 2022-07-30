import { SORT_DIRECTION } from '../utils/constants';
import { calculateRewards, sortData } from '../utils/helpers';
import { actualTransactionList } from '../../src/mocks/transactions';

describe('Utility-helper test suites', () => {
    test('Should return the rewards point if price is greater than or equal to 50 and price less than 100 ', async () => {
        const price = 70;
        expect(calculateRewards(price)).toBe(20);
    });
    test('Should return 0 reward points if price is < 100 and < 50 ', async () => {
        const price = 20;
        expect(calculateRewards(price)).toBe(0);
    });
    test('Should return the rewards point if price is > 100 ', async () => {
        const price = 120;
        expect(calculateRewards(price)).toBe(90);
    });
    test('Should return the array in sorted form in desending order for transaction data', async () => {
        expect(sortData('transactionDate', actualTransactionList, SORT_DIRECTION.DESCENDING)).toHaveLength(3);
        expect(sortData('transactionDate', actualTransactionList, SORT_DIRECTION.DESCENDING)[0].price).toBe(154);
        expect(sortData('transactionDate', actualTransactionList, SORT_DIRECTION.DESCENDING)[1].price).toBe(54);
        expect(sortData('transactionDate', actualTransactionList, SORT_DIRECTION.DESCENDING)[2].price).toBe(5500);
    });
});
