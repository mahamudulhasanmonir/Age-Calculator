// script.js

document.getElementById('age-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let dobDay = document.getElementById('dob-day').value;
    let dobMonth = document.getElementById('dob-month').value;
    let dobYear = document.getElementById('dob-year').value;

    let currentDay = document.getElementById('current-day').value;
    let currentMonth = document.getElementById('current-month').value;
    let currentYear = document.getElementById('current-year').value;

    let dob = new Date(`${dobYear}-${dobMonth}-${dobDay}`);
    let currentDate = new Date(`${currentYear}-${currentMonth}-${currentDay}`);
    let result = calculateAge(dob, currentDate);
    document.getElementById('result').textContent = `Your age is ${result.years} years, ${result.months} months, and ${result.days} days.`;
});

function calculateAge(dob, currentDate) {
    let years = currentDate.getFullYear() - dob.getFullYear();
    let months = currentDate.getMonth() - dob.getMonth();
    let days = currentDate.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return {
        years: years,
        months: months,
        days: days
    };
}
