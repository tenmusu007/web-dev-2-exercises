class Account  {
  constructor(name){
    this.name = name
    this.balance = 0
    this.history =[]
  }
  create(){
    console.log(`${this.name}'s acount is created. The balance is ${this.balance}`)
  }

}
class Transaction {
  constructor(account, amount,) {
    this.user = account
    this.amount = amount;
  }
  isAllowed(){
    if(-this.value < this.user.history[this.user.history.length - 1]){
      console.log("Your deposit is ok");
      // this.user.balance -= this.amount;
      // this.user.history.push(this.user.balance)
      return true
    }else{
      console.log("You can't withdrawal");
      return false
    }
  }
  commit(){
    if(this.value < 0){
      if(this.isAllowed() == true){
        console.log("Your deposit is ok");
        this.user.balance -= this.amount;
        this.user.history.push(this.user.balance)
        return
      }else{
        console.log("You can't withdrawal");
        return false
      }
    }else{
      this.user.balance += this.amount;
      this.user.history.push(this.user.balance)
    }
  }
}
class Withdrawal extends Transaction{
  constructor(account, amount,) {
    super(account,amount,)
  }
  get value(){
    let sub = -(this.amount)
    console.log(sub);
    return sub
  }
}
class Deposit extends Transaction {
  constructor(account, amount,){
    super(account,amount,)
  }
get value(){
  return this.amount
}
}
// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('snow-patrol');
myAccount.create();
console.log(myAccount);
console.log('Balance:', myAccount.balance);


t1 = new Withdrawal(myAccount, 50.25);
t1.commit();
// t1.isAllowed();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(myAccount, 9.99);
t2.commit();
// t2.isAllowed();
console.log('Transaction 2:', t2);
t3 = new Deposit(myAccount, 120.0);
t3.commit();
// t3.isAllowed();
console.log('Transaction 3:', t3);

console.log('Balance:', myAccount.balance);
