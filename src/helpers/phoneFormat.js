export default function phoneFormat(value) {
    let phone = "";
    value.split('').forEach((symbol, index) => {
        if (index === 2) phone += " (" + symbol;
        else if (index === 4) phone += symbol + ") ";
        else if (index === 8 || index === 10) phone += " " + symbol;
        else phone += symbol;
    })
    return phone;
}