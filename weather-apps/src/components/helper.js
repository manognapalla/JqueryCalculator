export const formatAMPM = (date) => {
    date = new Date(date);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    const strTime = `${hours}:${minutes} ${ampm}`;

    return strTime;
};



export const getWeathericon = (icon) => {
    let name;
    switch (icon) {
        case 'Clouds':
            name = 'CLOUDY';
            break;
        case 'Rain':
            name = 'RAIN';
            break;
        case 'Clear':
            name = 'CLEAR_DAY';
            break;
        case 'Snow':
            name = 'SNOW';
            break;
        default:
            name = 'CLEAR_DAY';
    }
    return name;
}

export const getWeatherIconColor = (icon) => {
    let name;
    switch (icon) {
        case 'Clouds':
            name = '#ddd';
            break;
        case 'Rain':
            name = '#aaa';
            break;
        case 'Clear':
            name = 'goldenrod';
            break;
        case 'Snow':
            name = 'lightskyblue';
            break;
        default:
            name = 'CLEAR_DAY';
    }
    return name;
}

export const getDate = (dateString) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var d = new Date(dateString) || new Date();
    let monthName = monthNames[d.getMonth()];
    return d.getDate() + " " + monthName

}

export const getDay = (dateString) => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dateString) || new Date();
    var dayName = days[d.getDay()];
    return dayName;
}