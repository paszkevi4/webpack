export function getMyTaxes(salary) {
  return (salary * this.tax).toFixed(2);
}

export function getMiddleTaxes() {
  return (this.middleSalary * this.tax).toFixed(2);
}

export function getTotalTaxes() {
  return this.middleSalary * this.tax * this.vacancies;
}

export function getMySalary(salary) {
  let answ = { salary };
  answ.taxes = getMyTaxes.call(this, salary);
  answ.profit = salary - answ.taxes;
  return answ;
}
