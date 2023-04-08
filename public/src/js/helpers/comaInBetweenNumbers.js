function addCommaToNumber(number) {
    return Number(String(number).replace(/[^0-9]/g, '')).toLocaleString()

}

export default addCommaToNumber