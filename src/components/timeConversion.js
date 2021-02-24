export default function convertTime(unix) {
    var postTime = new Date(unix * 1000);
    var hours = postTime.getHours();
    var minutes = postTime.getMinutes() < 10 ? '0' + postTime.getMinutes() : postTime.getMinutes();
    var seconds = postTime.getSeconds() < 10 ? '0' + postTime.getSeconds() : postTime.getSeconds();

    var date = postTime.getDate();
    let date2;

    // Addresses the issue of ordinal numerals in English dating system
    function appendSuffix(date) {
        if (date === 1 || date === 21 || date === 31) {
            date2 = `${date}st`
        } else if (date === 2 || date === 22) {
            date2 = `${date}nd`
        } else if (date === 3 || date === 23) {
            date2 = `${date}rd`
        } else {
            date2 = `${date}th`
        }
    }

    appendSuffix(date);

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[postTime.getDay()];

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[postTime.getMonth()];

    var year = postTime.getFullYear();
    var time = `Posted at ${hours}:${minutes}:${seconds} on ${day}, ${date2} ${month} ${year}`
    return time;
}