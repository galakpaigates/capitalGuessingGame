document.addEventListener('DOMContentLoaded', function() {
    const randomCapitalDiv = document.querySelector('.randomCapitalDiv')

    const randomOptionsDiv = document.querySelector('.randomOptionsDiv')

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
        {country: 'Zimbabwe', capital: 'Harare'}
    ]
    
    // Declaration of Score variable to keep track of the number of correct answer, and Tries variable to keep track of the number of attempts the user makes.
    var score = 0
    var tries = 0

    getRandomCountryCapital()

    // Declaration of funciton to generate the random country and capital from the array above and append them to the Body of the Page using the for loop.
    function getRandomCountryCapital() {
        // Selecting the Particular Random Country and Capital that the User will have to guess from the array and storing it in the variable, randomCountry.
        var randomCountry = capitalsList[Math.floor(Math.random() * capitalsList.length)]

        // Adding the Capital of the Random Country generated from the Previous line of code to the Html page.
        randomCapitalDiv.innerHTML = `${randomCountry.capital}`

    // Gemerating some other random countries for the User to choose from and storing each of them inside a variable.
        var randomCountry1 = capitalsList[Math.floor(Math.random() * capitalsList.length)].country

        var randomCountry2 = capitalsList[Math.floor(Math.random() * capitalsList.length)].country

        var randomCountry3 = capitalsList[Math.floor(Math.random() * capitalsList.length)].country
    
        // Declaration of a object called Options the has the Correct Country and the other randomly generated Countries above to add to the Options.
        var options = [randomCountry1, randomCountry2, randomCountry.country, randomCountry3]

        // This Function randomly sorts the object declared above changing the order it will appear in on the HTML page randomly and return the value after the sorting.
        options.sort(function() {
            return 0.5 - Math.random()
        })

        // This LOOP goes through the options object declared above per the length of the object's content, and appends to the randomOptionsDiv each of object creating the options for the user to choose from.
        for (let i = 0; i < options.length; i++) {
            // Creates a div element each time the loop runs and assign a variable to it a call later.
            const div = document.createElement("div")
                
            // Updates the Content of the 'div' created above with the Current value of 'i' which would be one of the randomly sorted countries from the options object.
            div.innerText = options[i]

            // Appends the current value of 'div' to the HTML page.
            randomOptionsDiv.appendChild(div)
        }

        randomOptionsDiv.addEventListener('click', function checkClick(event) {
            // Targeting the Particular Element that was clicked on the Page and assigning a variable to it.
            const userChoice = event.target;

            if (userChoice.parentElement.className == "mainBody") {
                // Added Specificity to the type of element the user should click on. Only if is it one of the Divs created by the 'for' loop inside the randomCapitalsDiv
            }

            else if (userChoice.innerText != randomCountry.country.toUpperCase()) {
                //Changing the User's Choice Background Color to Red because their choice is correct and adding only the tries because the User's Choice was not the correct answer but they attempted.
                userChoice.style.backgroundColor = "red"

                document.getElementById('triesDiv').innerHTML = tries+=1;

                setTimeout(()=> {
                    randomCapitalDiv.innerHTML = "";
                    randomOptionsDiv.innerHTML = "";
                
                    getRandomCountryCapital()}, 400)
            }

            else if (userChoice.innerText === randomCountry.country.toUpperCase()) {
                //Changing the User's Choice Background Color to Green because their choice is correct and adding the score and tries.
                userChoice.style.backgroundColor = "limegreen";
                
                document.getElementById('triesDiv').innerHTML = tries+=1;
                
                document.getElementById('scoreDiv').innerHTML = score+=1;

                //Clearing the Randomly Generated Capitals and Rerunning the Function to Generate new ones.
                setTimeout(()=> {
                    randomCapitalDiv.innerHTML = "";
                    randomOptionsDiv.innerHTML = "";
                
                    getRandomCountryCapital()}, 400)
            }
        })
    }
})