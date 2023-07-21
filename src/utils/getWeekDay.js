export default function getWeekDay() {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const date = new Date();

    return days[date.getDay()];
}