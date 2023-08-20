import { format } from 'date-fns';

export default class DataGenerator {
    generateData() {
        const currentDate = new Date();
        let dataString = '';

        for (let i = 0; i < 7; i++) {
            const date = new Date(currentDate);
            date.setDate(date.getDate() + i);

            const formattedDay = this.getFormattedDay(date);

            const formattedDate = format(date, "dd MMM yyyy");

            // Convert object properties to string and concatenate them
            dataString += `{ "day": "${formattedDay}", "date": "${formattedDate}", "year": "${date.getFullYear().toString()}", "slots": [] },`;
        }

        // Remove trailing comma and convert the string back to an array of objects
        return JSON.parse(`[${dataString.slice(0, -1)}]`);
    }

    getFormattedDay(date) {
        const dayOptions = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return dayOptions[date.getDay()];
    }

    formatDate(date) {
        return format(date, "yyyy-MM-dd");
    }

    convertToDayName(dateString) {
        // Split the dateString into day, month, and year parts
        const [day, month, year] = dateString.split(' ');

        // Create a new Date object using the parsed values
        const dateObject = new Date(`${month} ${day}, ${year}`);

        // Get options for formatting as full weekday name (e.g., "Monday")
        const options = { weekday: 'long' };

        // Format the date string with specified options
        const dayName = dateObject.toLocaleString(undefined, options);

        return dayName;
    }
}