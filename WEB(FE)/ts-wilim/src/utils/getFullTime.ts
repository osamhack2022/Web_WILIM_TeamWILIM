const getFullTime = () => {
    const date = new Date();
    const hour =  date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const min = date.getMinutes() < 9 ? `0${date.getMinutes() + 1}` : date.getMinutes() + 1;
    return `${hour}${min}`;
}

export default getFullTime;