function calculateClockAngle(time) {
    const [hours, minutes] = time.split(':').map(Number);
    const normalizedHours = hours % 12;
    const angle = Math.abs(0.5 * (60 * normalizedHours - 11 * minutes));
    const normalizedAngle = Math.min(angle, 360 - angle);
    return normalizedAngle;
}
// Example usage:
const inputTime = "09:00";
const resultAngle = calculateClockAngle(inputTime);
console.log(`The smaller angle between the hour and minute hands is ${resultAngle.toFixed(2)} degrees.`);
