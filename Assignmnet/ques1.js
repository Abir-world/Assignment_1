function describeValue(value) {
    const type = typeof value;
    const any = value ? "truthy" : "falsy";
    return `${type} | ${any}`;
}
console.log(describeValue(22))
console.log(describeValue("0"))
console.log(describeValue(NaN))
console.log(describeValue(null))