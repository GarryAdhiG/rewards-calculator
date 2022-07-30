# Rewards Calculator

Rewards Calculator calculates the reward points based on the spent amount and follows this logic:

# Problem Statement

A retailer offers a rewards program to its customers awarding points based on each recorded purchase as follows:
For every dollar spent over $50 on the transaction, the customer receives one point.
In addition, for every dollar spent over $100, the customer receives another point.
Ex: for a $120 purchase, the customer receives
(120 - 50) x 1 + (120 - 100) x 1 = 90 points
Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total. 
Make up a data set to best demonstrate your solution.


## Tech stack
- NodeJS
- JavaScript
- Typescript
- Jest (Testing Framework)

## Prerequisites
You need to have [Node.js and npm](https://nodejs.org/en/)
- Support Node v4+ - latest
- Support npm v3+ - latest

## Install dependencies
```
npm install
```

## Generate build via typescript
```
npm run build
```

## Run tests using JEST
```
npm test
```

## Brief about the Project
In this app, there are two modules ```transaction``` and ```transaction-data```. They implements two interfaces to set the transaction and provide the record list to user Interfaces. Both of them are defined in the types directory.
- ITransaction
- ITransactionDataList

Transaction: Responsible to set the transaction data values
Transactions: List of transactions
ITransactionDataList: Responsible to create a data set of all the transactions with respect to transaction date

## Sample code to test the functionality
ITransactionDataList has below methods to expose
```getAllRecords```
```addTransaction```
```getTotalRewards```
```rewardPerMonth```

Create an object of TransactionDataSet class and call the add transaction method with price value.
```
let myTransactionList = new TransactionDataSet();
myTransactionList.addTransaction(10);
myTransactionList.addTransaction(20);
console.log(myTransactionList.getAllRecords());
```
