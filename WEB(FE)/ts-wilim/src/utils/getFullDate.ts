const getFullDate = () => {
    const date = new Date().getDate.length === 1 ? `0${new Date().getDate}` : new Date().getDate;
    const month = new Date().getMonth.length === 1 ? `0${new Date().getMonth}` : new Date().getMonth;
    const year = new Date().getFullYear;
    return `${year}${month}${date}`;
}

export default getFullDate;