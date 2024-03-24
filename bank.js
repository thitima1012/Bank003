//---customer---// 
class Customer {
    name = "";
    address = "";
    phone = "";
    email = "";
    accounts = [];
    constructor(
        name,
        address,
        phone,
        email
    ) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    //-ตรวจสอบว่าเป็นเจ้าของบัญชีไหม-//
    verify(
        name,
        address,
        phone,
        email
    ) {
        if (this.name === name &&
            this.address === address &&
            this.phone === phone &&
            this.email === email
        ) {
            return true;
        } else {
            return false;
        }
    }
    //-ทำความรู้จักบัญชี-//
    getAccount() {
        return this.accounts;
    }
    //-สร้างบัญชี-//
    createAccount(account) {
        this.accounts.push(account);
    }
    toString() {
        return `Customer [name = ${this.name}, address = ${this.address}, phone = ${this.phone}, email = ${this.email} , accounts = ${this.accounts}]`;
    }
}

//---account---//
class Account {
    accountNumber = "";
    balance = 0;
    constructor(
        accountNumber,
        balance
    ) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.transactions = [];
        this.customer = null;
    }
    deposit(amount) {
        console.log(`การฝากเงิน ${amount} เข้าไปที่บัญชี ${this.accountNumber}`);
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            console.log(`การถอน ${amount} จากบัญชี ${this.accountNumber}...`);
            this.balance -= amount;
        } else {
            console.error("เงินไม่เพียงพอ");
        }
    }
    createTransaction(transactionId, transactionType, amount, transactionDate, status) {
        console.log(`สร้างธุรกรรม ${transactionId} ประเภท ${transactionType}`);
        const transaction = new Transaction(transactionId, transactionType, amount, transactionDate, status);
        this.transactions.push(transaction);
    }
    getTransaction() { 
        return this.transactions;
    }
    getBalance() { 
        return this.balance;
    }
    getAccountType() { 
        return this.accountType;
    }
    setAccountType(accountType) {
        this.accountType = this.accountType;
    }
    getCustomer() {
        return this.customer;
     }
    setCustomer(customer) {
        this.customer = customer;
     }
}


//---currentaccount---//
class CurrentAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit, overdraftInterest) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
        this.overdraftInterest = overdraftInterest;
    }

    calculateInterest() {
        if (this.balance < 0) {
            const interest = Math.abs(this.balance) * this.overdraftInterest;
            console.log(`คำนวณดอกเบี้ยเงินที่เกิน: ${interest}`);
            return interest;
        } else {
            console.log(`ไม่มีดอกเบี้ยเนื่องจากยอดคงเหลือไม่ติดลบ`);
            return 0;
        }
    }

    getOverdraftLimit() {
        return this.overdraftLimit;
    }

    setOverdraftLimit(overdraftLimit) {
        this.overdraftLimit = overdraftLimit;
    }
}

//---savingsAccount---//
class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        const interest = this.balance * this.interestRate;
        console.log(`คำนวณดอกเบี้ย: ${interest}`);
        return interest;
    }

    getInterestRate() {
        return this.interestRate;
    }

    setInterestRate(interestRate) {
        this.interestRate = interestRate;
    }
}


//---transaction---//
//-บันทึกว่าทำรายการอะไรบ้าง-// 
class Transaction {
    transactionId = "";
    transactionType = "";
    amount = "";
    transactionDate = "";
    status = "";
    constructor(
        transactionId,
        transactionType,
        amount,
        transactionDate,
        status
    ) {
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.amount = amount;
        this.transactionDate = transactionDate;
        this.status = status;
    }
    getTransactionId() {
        return this.transactionId;
    }
    getTransactionType() {
        return this.transactionType;
    }

    setTransactionType(transactionType) {
        this.transactionType = transactionType;
    }

    getAmount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getTransactionDate() {
        return this.transactionDate;
    }
    setTransactionDate(transactionDate) {
        this.transactionDate = transactionDate;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
}

//---bank---// (คลาสนี้เสร็จแล้ว เพื่อนทำในห้อง)
class Bank {
    name = "";
    address = "";
    code = "";
    constructor(
        name,
        address,
        code
    ) {
        this.name = name;
        this.address = address;
        this.code = code;
    }
    manage() {
        console.log("การจัดการของธนาคาร");
    }

    maintain() {
        console.log("ดูแลระบบธนาคาร");
    }

    verify() {
        console.log("ตรวจสอบธนาคาร");
    }

    openAccount() {
        console.log("เปิดบัญชี");
    }

    closeAccount() {
        console.log("ปิดบัญชี");
    }

    createTransaction() {
        console.log("กำลังทำธุรกรรม");
    }

    createCustomer() {
        console.log("กำลังสร้างลูกค้าใหม่");
    }

    createATM() {
        console.log("กำลังสร้้างATM");
    }

    createAccount(accountNumber, balance) {
        console.log(`กำลังสร้างบัญชี ${accountNumber}  ${balance}`);
        return new Account(accountNumber, balance);
    }
}

//---atm---//
class ATM {
    location = "";
    mangedBy = "";
    constructor(
        location,
        mangedBy
    ) {
        this.location = location;
        this.mangedBy = mangedBy;
    }
    identify() {
        console.log("กำลังระบุตัวตนผู้ใช้");
    }

    checkBalance(account) {
        console.log(`ตรวจสอบเงินคงเหลือ ${account.accountNumber}`);
        return account.getBalance();
    }

    withdraw(account, amount) {
        console.log(`ถอนเงิน ${amount} จากบัญชี ${account.accountNumber}`);
        account.withdraw(amount);
    }

    deposit(account, amount) {
        console.log(`ฝากเงิน ${amount} ไปยังบัญชี ${account.accountNumber}`);
        account.deposit(amount);
    }

    changePin() {
        console.log("เปลี่ยนรหัส");
    }

    transfer() {
        console.log("");
    }

    verify() {
        console.log("");
    }
}

//---main---//
const main = () => {
    //ลิ้งค์ธนาคาร
    const bank = new Bank('SEnpru', 'npru', '10001');

    //สร้างลูกค้้า
    const customer = new Customer('Pim', 'Kanchanaburi', '0812345678', 'ppppimmm@gmail.com');

    //สร้างบัญชี
    const account = bank.createAccount("ออมทรัพย์", 500);


    //แสดงข้อมูลลูกค้า
    console.log(customer.toString());


    // เพิ่มบัญชีให้กับลูกค้า
    customer.createAccount(account);

    //การฝาก doposit
    account.deposit(500);

    //การถอน with
    account.withdraw(100);


    // Display account balance
    console.log(`ยอดเงินคงเหลือ: ${account.getBalance()}`);
}

main();