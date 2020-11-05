export const getIncomeExpenditureData = async () => {
    let response = await fetch('https://run.mocky.io/v3/6b16f50e-c63b-4809-ba3c-589e8bbc88e9');
    let respData = await response.json();
    return respData;
}