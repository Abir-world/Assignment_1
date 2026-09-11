function getDayType(day) {
    const normalized = day.toLowerCase();
    switch (normalized) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";        
    }
}
console.log(getDayType("Friday"));
console.log(getDayType("monday"));
console.log(getDayType("abir"));


