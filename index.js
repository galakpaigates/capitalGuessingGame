var capitalsList = [
    {country: 'Afghanistan', capital: 'Kabul'},
    {country: 'Albania', capital: 'Tirana (Tirane)'},
    {country: 'Algeria', capital: 'Algiers'},
    {country: 'Andorra', capital: 'Andorra la Vella'},
    {country: 'Angola', capital: 'Luanda'},
    {country: 'Antigua and Barbuda', capital: "Saint John's"},
    {country: 'Argentina', capital: 'Buenos Aires'},
    {country: 'Armenia', capital: 'Yerevan'},
    {country: 'Australia', capital: 'Canberra'},
    {country: 'Austria', capital: 'Vienna'},
    {country: 'Azerbaijan', capital: 'Baku'},
    {country: 'Bahamas', capital: 'Nassau'},
    {country: 'Bahrain', capital: 'Manama'},
    {country: 'Bangladesh', capital: 'Dhaka'},
    {country: 'Barbados', capital: 'Bridgetown'},
    {country: 'Belarus', capital: 'Minsk'},
    {country: 'Belgium', capital: 'Brussels'},
    {country: 'Belize', capital: 'Belmopan'},
    {country: 'Benin', capital: 'Porto Novo'},
    {country: 'Bhutan', capital: 'Thimphu'},
    {country: 'Bolivia', capital: 'La Paz / Sucre'},
    {country: 'Bosnia and Herzegovina', capital: 'Sarajevo'},
    {country: 'Brazil', capital: 'Brasilia'},
    {country: 'Brunei', capital: 'Bandar Seri Begawan'},
    {country: 'Bulgaria', capital: 'Sofia'},
    {country: 'Bostwana', capital: 'Gaborone'},
    {country: 'Burkina Faso', capital: 'Ouagadougou'},
    {country: 'Burundi', capital: 'Gitega'},
    {country: 'Cambodia', capital: 'Phnom Penh'},
    {country: 'Cameroon', capital: 'Yaounde'},
    {country: 'Canada', capital: 'Ottawa'},
    {country: 'Cape Verde', capital: 'Praia'},
    {country: 'Central African Republic', capital: 'Banjui'},
    {country: 'Chad', capital: "N'Djamena"},
    {country: 'Chile', capital: 'Santiago'},
    {country: 'China', capital: 'Beijing'},
    {country: 'Colombia', capital: 'Bogota'},
    {country: 'Comoros', capital: 'Moroni'},
    {country: 'Democratic Republic of Congo', capital: 'Kinshasa'},
    {country: 'Republic of Congo', capital: 'Brazzavile'},
    {country: 'Costa Rica', capital: 'San Jose'},
    {country: "Côte d'Ivoire (Ivory Coast)", capital: 'Yamoussoukro'},
    {country: 'Croatia', capital: 'Zagreb'},
    {country: 'Cuba', capital: 'Havana'},
    {country: 'Cyprus', capital: 'Nicosia'},
    {country: 'Czech Republic (Czechia)', capital: 'Prague'},
    {country: 'Denmark', capital: 'Copenhagen'},
    {country: 'Djibouti', capital: 'Djibouti'},
    {country: 'Dominica', capital: 'Roseau'},
    {country: 'Dominican Republic', capital: 'Santo Domingo'},
    {country: 'East Timor', capital: 'Dili'},
    {country: 'Ecuador', capital: 'Quito'},
    {country: 'Egypt', capital: 'Cairo'},
    {country: 'El Salvador', capital: 'San Salvador'},
    {country: 'England', capital: 'London'},
    {country: 'Equatorial Guinea', capital: 'Malabo'},
    {country: 'Eritrea', capital: 'Asmara'},
    {country: 'Estonia', capital: 'Tallinn'},
    {country: 'Eswatini (Swaziland)', capital: 'Mbabana'},
    {country: 'Ethiopia', capital: 'Addis Ababa'},
    {country: 'Federated States of Micronesia', capital: 'Palikir'},
    {country: 'Fiji', capital: 'Suva'},
    {country: 'Finland', capital: 'Helsinki'},
    {country: 'France', capital: 'Paris'},
    {country: 'Gabon', capital: 'Libreville'},
    {country: 'Gambia', capital: 'Banjul'},
    {country: 'Georgia', capital: 'Tbilisi'},
    {country: 'Germany', capital: 'Berlin'},
    {country: 'Ghana', capital: 'Accra'},
    {country: 'Greece', capital: 'Athens'},
    {country: 'Grenada', capital: "Saint George's"},
    {country: 'Guatemala', capital: 'Guatemala City'},
    {country: 'Guinea', capital: 'Conakry'},
    {country: 'Guinea-Bissau', capital: 'Bissau'},
    {country: 'Guyana', capital: 'Georgetown'},
    {country: 'Haiti', capital: 'Port au Prince'},
    {country: 'Honduras', capital: 'Tegucigalpa'},
    {country: 'Hungary', capital: 'Budapest'},
    {country: 'Iceland', capital: 'Reykjavik'},
    {country: 'India', capital: 'New Delhi'},
    {country: 'Indonesia', capital: 'Jakarta'},
    {country: 'Iran', capital: 'Tehran'},
    {country: 'Iraq', capital: 'Baghdad'},
    {country: 'Ireland', capital: 'Dublin'},
    {country: 'Israel', capital: 'Jerusalem'},
    {country: 'Italy', capital: 'Rome'},
    {country: 'Jamaica', capital: 'Kingston'},
    {country: 'Japan', capital: 'Tokyo'},
    {country: 'Jordan', capital: 'Amman'},
    {country: 'Kazakhstan', capital: 'Astana'},
    {country: 'Kenya', capital: 'Nairobi'},
    {country: 'Kiribati', capital: 'Tarawa Atoll'},
    {country: 'Kosovo', capital: 'Pristina'},
    {country: 'Kuwait', capital: 'Kuwait City'},
    {country: 'Kyrgyzstan', capital: 'Bishkek'},
    {country: 'Laos', capital: 'Vientiane'},
    {country: 'Latvia', capital: 'Riga'},
    {country: 'Lebanon', capital: 'Beirut'},
    {country: 'Lesotho', capital: 'Maseru'},
    {country: 'Liberia', capital: 'Monrovia'},
    {country: 'Libya', capital: 'Tripoli'},
    {country: 'Liechtenstein', capital: 'Vaduz'},
    {country: 'Lithuania', capital: 'Vilnius'},
    {country: 'Luxembourg', capital: 'Luxembourg'},
    {country: 'Madagascar', capital: 'Antananarivo'},
    {country: 'Malawi', capital: 'Lilongwe'},
    {country: 'Malaysia', capital: 'Kuala Lumpur'},
    {country: 'Maldives', capital: 'Male'},
    {country: 'Mali', capital: 'Bamako'},
    {country: 'Malta', capital: 'Valletta'},
    {country: 'Marshall Islands', capital: 'Majuro'},
    {country: 'Mauritania', capital: 'Nouakchott'},
    {country: 'Mauritius', capital: 'Port Louis'},
    {country: 'Mexico', capital: 'Mexico City'},
    {country: 'Moldova', capital: 'Chisinau'},
    {country: 'Monaco', capital: 'Monaco'},
    {country: 'Mongolia', capital: 'Ulaanbaatar'},
    {country: 'Montenegro', capital: 'Podgorica'},
    {country: 'Morocco', capital: 'Rabat'},
    {country: 'Mozambique', capital: 'Maputo'},
    {country: 'Myanmar (Burma)', capital: 'Nay Pyi Taw'},
    {country: 'Namibia', capital: 'Windhoek'},
    {country: 'Nepal', capital: 'Kathmandu'},
    {country: 'Netherlands', capital: 'Amsterdam'},
    {country: 'New Zealand', capital: 'Wellington'},
    {country: 'Nicaragua', capital: 'Managua'},
    {country: 'Niger', capital: 'Niamey'},
    {country: 'Nigeria', capital: 'Abuja'},
    {country: 'North Korea', capital: 'Pyongyang'},
    {country: 'North Macedonia (Macedonia)', capital: 'Skopje'},
    {country: 'Northern Ireland', capital: 'Belfast'},
    {country: 'Norway', capital: 'Oslo'},
    {country: 'Oman', capital: 'Muscat'},
    {country: 'Pakistan', capital: 'Islamabad'},
    {country: 'Palau', capital: 'Melekeok'},
    {country: 'Palestine', capital: 'Jerusalem'},
    {country: 'Panama', capital: 'Panama City'},
    {country: 'Papua New Guinea', capital: 'Port Moresby'},
    {country: 'Paraguay', capital: 'Asuncion'},
    {country: 'Peru', capital: 'Lima'},
    {country: 'Philippines', capital: 'Manila'},
    {country: 'Poland', capital: 'Warsaw'},
    {country: 'Portugal', capital: 'Lisbon'},
    {country: 'Qatar', capital: 'Doha'},
    {country: 'Romania', capital: 'Bucharest'},
    {country: 'Russia', capital: 'Moscow'},
    {country: 'Rwanda', capital: 'Kigali'},
    {country: 'Saint Kitts and Nevis', capital: 'Basseterre'},
    {country: 'Saint Lucia', capital: 'Castries'},
    {country: 'Saint Vincent and the Grenadines', capital: 'Kingstown'},
    {country: 'Samoa', capital: 'Apia'},
    {country: 'San Marino', capital: 'San Marino'},
    {country: 'Sao Tome and Principe', capital: 'Sao Tome'},
    {country: 'Saudi Arabia', capital: 'Riyadh'},
    {country: 'Scotland', capital: 'Edinburgh'},
    {country: 'Senegal', capital: 'Dakar'},
    {country: 'Serbia', capital: 'Belgrade'},
    {country: 'Seychelles', capital: 'Victoria'},
    {country: 'Sierra Leone', capital: 'Freetown'},
    {country: 'Singapore', capital: 'Singapore'},
    {country: 'Slovakia', capital: 'Bratislava'},
    {country: 'Slovenia', capital: 'Ljubljana'},
    {country: 'Solomon Islands', capital: 'Honiara'},
    {country: 'Somalia', capital: 'Mogadishu'},
    {country: 'South Africa', capital: 'Pretoria / Cape Town'},
    {country: 'South Korea', capital: 'Seoul'},
    {country: 'South Sudan', capital: 'Juba'},
    {country: 'Spain', capital: 'Madrid'},
    {country: 'Sri Lanka', capital: 'Sri Jayawardenapura Kotte'},
    {country: 'Sudan', capital: 'Khartoum'},
    {country: 'Suriname', capital: 'Paramaribo'},
    {country: 'Sweden', capital: 'Stockholm'},
    {country: 'Switzerland', capital: 'Bern'},
    {country: 'Syria', capital: 'Damascus'},
    {country: 'Taiwan', capital: 'Taipei'},
    {country: 'Tajikistan', capital: 'Dushanbe'},
    {country: 'Tanzania', capital: 'Dodoma'},
    {country: 'Thailand', capital: 'Bangkok'},
    {country: 'Togo', capital: 'Lome'},
    {country: 'Tonga', capital: "Nuku'alofa"},
    {country: 'Trinidad and Tobago', capital: 'Port of Spain'},
    {country: 'Tunisia', capital: 'Tunis'},
    {country: 'Türkiye (Turkey)', capital: 'Ankara'},
    {country: 'Turkmenistan', capital: 'Ashgabat'},
    {country: 'Tuvalu', capital: 'Funafuti'},
    {country: 'Uganda', capital: 'Kampala'},
    {country: 'Ukraine', capital: 'Kyiv'},
    {country: 'United Arab Emirates', capital: 'Abu Dhabi'},
    {country: 'United Kingdom', capital: 'London'},
    {country: 'United States', capital: 'Washington D.C.'},
    {country: 'Uruguay', capital: 'Montevideo'},
    {country: 'Uzbekistan', capital: 'Tashkent'},
    {country: 'Vanuatu', capital: 'Port Vila'},
    {country: 'Vatican City', capital: 'Vatican City'},
    {country: 'Venezuela', capital: 'Caracas'},
    {country: 'Vietnam', capital: 'Hanoi'},
    {country: 'Wales', capital: 'Cardiff'},
    {country: 'Yemen', capital: "Sana'a"},
    {country: 'Zambia', capital: "Lusaka"},
    {country: 'Zimbabwe', capital: 'Harare'},
]

document.addEventListener('DOMContentLoaded', function() {
    const randomCapitalDiv = document.getElementById('randomCapitalDiv');
    const randomOptionsDiv = document.getElementById('randomOptionsDiv');
    const timerSpan = document.getElementById("timerSpan");

    var tries = 0;
    var score = 0;
    var randomCountry;
    var timerStatus = false;
    const triesDiv = document.getElementById('triesDiv');
    const scoreDiv = document.getElementById('scoreDiv');
    const container = document.getElementById("container");
    const gameOverDiv = document.getElementById("gameOverDiv");
    const replayBtn = document.getElementById("replayBtn");

    generateRandomCountry();

    function generateRandomCountry() {
        randomCountry = capitalsList[Math.floor(Math.random() * capitalsList.length) + 1];

        randomCapitalDiv.innerText = randomCountry.capital;

        const randomCountry1 = capitalsList[Math.floor(Math.random() * capitalsList.length)].country
        const randomCountry2 = capitalsList[Math.floor(Math.random() * capitalsList.length)].country
        const randomCountry3 = capitalsList[Math.floor(Math.random() * capitalsList.length)].country

        var options = [randomCountry1, randomCountry2, randomCountry.country, randomCountry3]

        options.sort(() => {
            return 0.5 - Math.random()
        })

        for (let i = 0; i < options.length; i++) {
            const div = document.createElement('button');

            div.className = "randomCountriesDiv";

            div.innerText = options[i];

            randomOptionsDiv.append(div);
        }
    }

    document.addEventListener("click", (event) => {
        const userChoice = event.target;

        if (randomCountry)
        {
            if (userChoice.className === "randomCountriesDiv") {
                new Audio("./click.mp3").play();
    
                if (timerStatus === false)
                {
                    startTimer();
                    timerStatus = true;
                }

                // Disable all the Other Options Buttons when any one of the buttons are clicked!
                userChoice.disabled = true;

                if (userChoice.innerText.toUpperCase() === randomCountry.country.toUpperCase()) {
                    userChoice.style.backgroundColor = "limegreen";

                    setTimeout(() => {
                        randomCapitalDiv.innerHTML = "";
                        randomOptionsDiv.innerHTML = "";
    
                        generateRandomCountry()
                    }, 300)

                    triesDiv.innerText = `${tries+=1}`
                    scoreDiv.innerText = `${score+=1}`
                }

                else if (userChoice.innerText.toUpperCase() != randomCountry.country) {
                    userChoice.style.backgroundColor = "red";

                    setTimeout(() => {
                        randomCapitalDiv.innerHTML = "";
                        randomOptionsDiv.innerHTML = "";
    
                        generateRandomCountry()
                    }, 300)

                    triesDiv.innerText = `${tries+=1}`
                }
                else {return false}
            }
        }
        else {replay()}
    })

    function startTimer() {
        var timer;
        var secs = 60;
        timerSpan.style.display = "inline";
        timerSpan.style.float = "right";
    
        timerSpan.innerText = secs;
        
        timer = setInterval(() => {
            secs--;
            timerSpan.innerText = secs;

            if (secs === 10)
                timerSpan.style.backgroundColor = "crimson";
    
            if (secs === 0)
            {
                clearInterval(timer);
                gameover();
            }
        }, 1000);
    }

    function gameover() {
        container.style.pointerEvents = "none";
        container.style.opacity = "0.3";

        scoreSpan.innerText = score;
        triesSpan.innerText = tries;

        gameOverDiv.style.display = "block";
    }
    
    function replay() {
        score = 0;
        tries = 0;

        scoreDiv.innerText = score;
        triesDiv.innerText = tries;

        randomOptionsDiv.innerHTML = "";
    
        generateRandomCountry();

        gameOverDiv.style.display = "none";
        container.style.pointerEvents = "auto";
        container.style.opacity = "1";

        timerSpan.style.backgroundColor = "limegreen";
        timerSpan.innerText = "60";
        timerStatus = false;

        timerSpan.style.display = "none";
    }

    replayBtn.addEventListener('click', replay);
})
