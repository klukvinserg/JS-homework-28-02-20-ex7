let money = +prompt('Enter your payment');

while ( money <= 0 || isNaN(money)) {
    alert('Your money is not correct');
    money = +prompt('Enter your payment');  
}

if (money > 0 && money < 200) {
    alert('You have not discount')
} else if (money >= 200 && money < 300) {
    result = money - (money/100*3);
    alert('Your discount - 3%\nPayment: '+result+' USD');
} else if (money >= 300 && money < 500) {
    result = money - (money/100*5);
    alert('Your discount - 5%\nPayment: '+result+' USD');
} else if (money >= 500) {
    result = money - (money/100*7);
    alert('Your discount - 7%\nPayment: '+result+' USD');
} 