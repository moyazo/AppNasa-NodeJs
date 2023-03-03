const Apod = require("../models/apod.js");

async function apiCallApod() {
    try {
        const response = await fetch(
            "https://api.nasa.gov/planetary/apod?start_date=2023-01-01&api_key=DEMO_KEY" 
        );
        console.log(response)
        const apods = await response.json();
        const newList = apods.map((apod) => ({
            title: apod.title,
            date: apod.date,
            explanation: apod.explanation,
            url: apod.url,
        }));
        const arrApodCreation = [];
        const apodFind = await Apod.find();

        for (const item of newList) {
            const exists = apodFind.find((existItem) => existItem.date === item.date);
            if (!exists)
                arrApodCreation.push(item);
        }

        if (arrApodCreation.length > 0)
            await Apod.insertMany(arrApodCreation);

        return [...apodFind, ...arrApodCreation];
    } catch (error) {
        console.log('Error at call apod API ' + error.message);
    }
}

module.exports = { apiCallApod };
