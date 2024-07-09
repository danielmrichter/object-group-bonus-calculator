// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

for(let employee of employees){
  console.log(calculateIndividualEmployeeBonus(employee))
}


function calculateBonusNumber(employee){
  let bonusPercentage = 0
  if (employee.reviewRating === 3){
    bonusPercentage = .04
  } else if (employee.reviewRating === 4){
    bonusPercentage = .06
  } else if (employee.reviewRating === 5){
    bonusPercentage = .10
  }
  if (employee.employeeNumber.length === 4){
    bonusPercentage += .05
  }
  if (employee.annualSalary > 65000){
    bonusPercentage -= .01
  }
  if (bonusPercentage > .13){
    bonusPercentage = .13
  }
  if (bonusPercentage < 0){
    bonusPercentage = 0
  }
  return bonusPercentage

}
function calculateIndividualEmployeeBonus(employee) {
  let bonusPercentage = calculateBonusNumber(employee)
  let annualSalaryNumber = Number(employee.annualSalary)
  let totalBonus = annualSalaryNumber * bonusPercentage
  let totalCompensation = annualSalaryNumber + totalBonus

  return {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  }
}