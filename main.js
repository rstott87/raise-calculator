
 var salary = prompt("what is your pre-raise salary?");
 salary = parseInt(salary);

 var firstStatement = "hi";
 var secondStatement = "";
 var thirdStatement= "";

 function raise (salary) {
    var firstRaise = Math.round(((salary * .025)/12) *21);
    firstStatement = (`Retro money owed with an original salary of $${salary} at a rate 2.5% since 2020 (21 months) is $${firstRaise}.       
    `);
    var new2020Salary = Math.round(((salary * .025) + salary));
    var secondRaise = Math.round(((new2020Salary * .02)/12) * 9);
    var totalRaises = firstRaise + secondRaise;
    secondStatement = (`Retro money owed on a new 2020 salary of $${new2020Salary} at a rate 2% since Jan 2021 (9 months) is $${secondRaise}.   
    `);
    thirdStatement = (`Total amount in retro raises would be $ ${totalRaises} (${firstRaise} + ${secondRaise}). If you qualify for the $1,000 bonus, The total amount is $ ${totalRaises + 1000}
    `);

    const output = document.querySelector('#output');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = `${firstStatement} ${secondStatement} ${thirdStatement} `;   
    output.appendChild(content);
    
}



raise(salary);