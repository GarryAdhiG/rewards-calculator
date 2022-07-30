import Transaction from '.';

jest.mock('.');

it('Transaction class should called with constructor constructor', () => {
    const transactionObj = new Transaction(60);
    expect(Transaction).toHaveBeenCalledTimes(1);
});
