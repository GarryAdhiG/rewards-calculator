import TransactionDataSet from '.';

jest.mock('.');

it('TransactionDataSet class should called with constructor constructor', () => {
    const transactionObj = new TransactionDataSet();
    expect(TransactionDataSet).toHaveBeenCalledTimes(1);
});
