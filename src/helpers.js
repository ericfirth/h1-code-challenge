const add = (a, b) => a + b;
export const averageFrom = array => array.reduce(add, 0) / array.length;

export const loanAmountsAndAnnualIncomesBy = category => (categoryData, loanObj) => {
  const currentCategory = loanObj[category];
  let currentCategoryData = categoryData[currentCategory];

  if (currentCategoryData) {
    currentCategoryData.loanAmounts.push(loanObj.loan_amnt);
    currentCategoryData.annualIncome.push(loanObj.annual_inc);
  } else {
    currentCategoryData = {
      loanAmounts: [loanObj.loan_amnt],
      annualIncome: [loanObj.annual_inc],
    };
    categoryData[currentCategory] = currentCategoryData;
  }
  return categoryData;
};
