document.addEventListener('DOMContentLoaded', () => {
    const token = sessionStorage.getItem('token');
    const countries = [{name: "Afghanistan", code2: "AF", code3: "AFG", codeNumber: 4},
        {name: "Albania", code2: "AL", code3: "ALB", codeNumber: 8},
        {name: "Algeria", code2: "DZ", code3: "DZA", codeNumber: 12},
        {name: "American Samoa", code2: "AS", code3: "ASM", codeNumber: 16},
        {name: "Andorra", code2: "AD", code3: "AND", codeNumber: 20},
        {name: "Angola", code2: "AO", code3: "AGO", codeNumber: 24},
        {name: "Anguilla", code2: "AI", code3: "AIA", codeNumber: 660},
        {name: "Antigua and Barbuda", code2: "AG", code3: "ATG", codeNumber: 28},
        {name: "Argentina", code2: "AR", code3: "ARG", codeNumber: 32},
        {name: "Armenia", code2: "AM", code3: "ARM", codeNumber: 51},
        {name: "Aruba", code2: "AW", code3: "ABW", codeNumber: 533},
        {name: "Australia", code2: "AU", code3: "AUS", codeNumber: 36},
        {name: "Austria", code2: "AT", code3: "AUT", codeNumber: 40},
        {name: "Azerbaijan", code2: "AZ", code3: "AZE", codeNumber: 31},
        {name: "Bahamas", code2: "BS", code3: "BHS", codeNumber: 44},
        {name: "Bahrain", code2: "BH", code3: "BHR", codeNumber: 48},
        {name: "Bangladesh", code2: "BD", code3: "BGD", codeNumber: 50},
        {name: "Barbados", code2: "BB", code3: "BRB", codeNumber: 52},
        {name: "Belarus", code2: "BY", code3: "BLR", codeNumber: 112},
        {name: "Belgium", code2: "BE", code3: "BEL", codeNumber: 56},
        {name: "Belize", code2: "BZ", code3: "BLZ", codeNumber: 84},
        {name: "Benin", code2: "BJ", code3: "BEN", codeNumber: 204},
        {name: "Bermuda", code2: "BM", code3: "BMU", codeNumber: 60},
        {name: "Bhutan", code2: "BT", code3: "BTN", codeNumber: 64},
        {name: "Bolivia", code2: "BO", code3: "BOL", codeNumber: 68},
        {name: "Bonaire, Sint Eustatius and Saba", code2: "BQ", code3: "BES", codeNumber: 535},
        {name: "Bosnia and Herzegovina", code2: "BA", code3: "BIH", codeNumber: 70},
        {name: "Botswana", code2: "BW", code3: "BWA", codeNumber: 72},
        {name: "Bouvet Island", code2: "BV", code3: "BVT", codeNumber: 74},
        {name: "Brazil", code2: "BR", code3: "BRA", codeNumber: 76},
        {name: "British Indian Ocean Territory", code2: "IO", code3: "IOT", codeNumber: 86},
        {name: "Brunei Darussalam", code2: "BN", code3: "BRN", codeNumber: 96},
        {name: "Bulgaria", code2: "BG", code3: "BGR", codeNumber: 100},
        {name: "Burkina Faso", code2: "BF", code3: "BFA", codeNumber: 854},
        {name: "Burundi", code2: "BI", code3: "BDI", codeNumber: 108},
        {name: "Cabo Verde", code2: "CV", code3: "CPV", codeNumber: 132},
        {name: "Cambodia", code2: "KH", code3: "KHM", codeNumber: 116},
        {name: "Cameroon", code2: "CM", code3: "CMR", codeNumber: 120},
        {name: "Canada", code2: "CA", code3: "CAN", codeNumber: 124},
        {name: "Cayman Islands", code2: "KY", code3: "CYM", codeNumber: 136},
        {name: "Central African Republic", code2: "CF", code3: "CAF", codeNumber: 140},
        {name: "Chad", code2: "TD", code3: "TCD", codeNumber: 148},
        {name: "Chile", code2: "CL", code3: "CHL", codeNumber: 152},
        {name: "China", code2: "CN", code3: "CHN", codeNumber: 156},
        {name: "Christmas Island", code2: "CX", code3: "CXR", codeNumber: 162},
        {name: "Cocos (Keeling) Islands", code2: "CC", code3: "CCK", codeNumber: 166},
        {name: "Colombia", code2: "CO", code3: "COL", codeNumber: 170},
        {name: "Comoros", code2: "KM", code3: "COM", codeNumber: 174},
        {name: "Congo", code2: "CG", code3: "COG", codeNumber: 178},
        {name: "Cook Islands", code2: "CK", code3: "COK", codeNumber: 184},
        {name: "Costa Rica", code2: "CR", code3: "CRI", codeNumber: 188},
        {name: "Croatia", code2: "HR", code3: "HRV", codeNumber: 191},
        {name: "Cuba", code2: "CU", code3: "CUB", codeNumber: 192},
        {name: "Curaçao", code2: "CW", code3: "CUW", codeNumber: 531},
        {name: "Cyprus", code2: "CY", code3: "CYP", codeNumber: 196},
        {name: "Czechia", code2: "CZ", code3: "CZE", codeNumber: 203},
        {name: "Côte d'Ivoire", code2: "CI", code3: "CIV", codeNumber: 384},
        {name: "Denmark", code2: "DK", code3: "DNK", codeNumber: 208},
        {name: "Djibouti", code2: "DJ", code3: "DJI", codeNumber: 262},
        {name: "Dominica", code2: "DM", code3: "DMA", codeNumber: 212},
        {name: "Dominican Republic", code2: "DO", code3: "DOM", codeNumber: 214},
        {name: "Ecuador", code2: "EC", code3: "ECU", codeNumber: 218},
        {name: "Egypt", code2: "EG", code3: "EGY", codeNumber: 818},
        {name: "El Salvador", code2: "SV", code3: "SLV", codeNumber: 222},
        {name: "Equatorial Guinea", code2: "GQ", code3: "GNQ", codeNumber: 226},
        {name: "Eritrea", code2: "ER", code3: "ERI", codeNumber: 232},
        {name: "Estonia", code2: "EE", code3: "EST", codeNumber: 233},
        {name: "Eswatini", code2: "SZ", code3: "SWZ", codeNumber: 748},
        {name: "Ethiopia", code2: "ET", code3: "ETH", codeNumber: 231},
        {name: "Falkland Islands", code2: "FK", code3: "FLK", codeNumber: 238},
        {name: "Faroe Islands", code2: "FO", code3: "FRO", codeNumber: 234},
        {name: "Fiji", code2: "FJ", code3: "FJI", codeNumber: 242},
        {name: "Finland", code2: "FI", code3: "FIN", codeNumber: 246},
        {name: "France", code2: "FR", code3: "FRA", codeNumber: 250},
        {name: "French Guiana", code2: "GF", code3: "GUF", codeNumber: 254},
        {name: "French Polynesia", code2: "PF", code3: "PYF", codeNumber: 258},
        {name: "French Southern Territories", code2: "TF", code3: "ATF", codeNumber: 260},
        {name: "Gabon", code2: "GA", code3: "GAB", codeNumber: 266},
        {name: "Gambia", code2: "GM", code3: "GMB", codeNumber: 270},
        {name: "Georgia", code2: "GE", code3: "GEO", codeNumber: 268},
        {name: "Germany", code2: "DE", code3: "DEU", codeNumber: 276},
        {name: "Ghana", code2: "GH", code3: "GHA", codeNumber: 288},
        {name: "Gibraltar", code2: "GI", code3: "GIB", codeNumber: 292},
        {name: "Greece", code2: "GR", code3: "GRC", codeNumber: 300},
        {name: "Greenland", code2: "GL", code3: "GRL", codeNumber: 304},
        {name: "Grenada", code2: "GD", code3: "GRD", codeNumber: 308},
        {name: "Guadeloupe", code2: "GP", code3: "GLP", codeNumber: 312},
        {name: "Guam", code2: "GU", code3: "GUM", codeNumber: 316},
        {name: "Guatemala", code2: "GT", code3: "GTM", codeNumber: 320},
        {name: "Guernsey", code2: "GG", code3: "GGY", codeNumber: 831},
        {name: "Guinea", code2: "GN", code3: "GIN", codeNumber: 324},
        {name: "Guinea-Bissau", code2: "GW", code3: "GNB", codeNumber: 624},
        {name: "Guyana", code2: "GY", code3: "GUY", codeNumber: 328},
        {name: "Haiti", code2: "HT", code3: "HTI", codeNumber: 332},
        {name: "Heard Island and McDonald Islands", code2: "HM", code3: "HMD", codeNumber: 334},
        {name: "Holy See", code2: "VA", code3: "VAT", codeNumber: 336},
        {name: "Honduras", code2: "HN", code3: "HND", codeNumber: 340},
        {name: "Hong Kong", code2: "HK", code3: "HKG", codeNumber: 344},
        {name: "Hungary", code2: "HU", code3: "HUN", codeNumber: 348},
        {name: "Iceland", code2: "IS", code3: "ISL", codeNumber: 352},
        {name: "India", code2: "IN", code3: "IND", codeNumber: 356},
        {name: "Indonesia", code2: "ID", code3: "IDN", codeNumber: 360},
        {name: "Iran", code2: "IR", code3: "IRN", codeNumber: 364},
        {name: "Iraq", code2: "IQ", code3: "IRQ", codeNumber: 368},
        {name: "Ireland", code2: "IE", code3: "IRL", codeNumber: 372},
        {name: "Isle of Man", code2: "IM", code3: "IMN", codeNumber: 833},
        {name: "Israel", code2: "IL", code3: "ISR", codeNumber: 376},
        {name: "Italy", code2: "IT", code3: "ITA", codeNumber: 380},
        {name: "Jamaica", code2: "JM", code3: "JAM", codeNumber: 388},
        {name: "Japan", code2: "JP", code3: "JPN", codeNumber: 392},
        {name: "Jersey", code2: "JE", code3: "JEY", codeNumber: 832},
        {name: "Jordan", code2: "JO", code3: "JOR", codeNumber: 400},
        {name: "Kazakhstan", code2: "KZ", code3: "KAZ", codeNumber: 398},
        {name: "Kenya", code2: "KE", code3: "KEN", codeNumber: 404},
        {name: "Kiribati", code2: "KI", code3: "KIR", codeNumber: 296},
        {name: "Democratic People's Republic of Korea", code2: "KP", code3: "PRK", codeNumber: 408},
        {name: "Korea (the Republic of)", code2: "KR", code3: "KOR", codeNumber: 410},
        {name: "Kuwait", code2: "KW", code3: "KWT", codeNumber: 414},
        {name: "Kyrgyzstan", code2: "KG", code3: "KGZ", codeNumber: 417},
        {name: "Lao People's Democratic Republic", code2: "LA", code3: "LAO", codeNumber: 418},
        {name: "Latvia", code2: "LV", code3: "LVA", codeNumber: 428},
        {name: "Lebanon", code2: "LB", code3: "LBN", codeNumber: 422},
        {name: "Lesotho", code2: "LS", code3: "LSO", codeNumber: 426},
        {name: "Liberia", code2: "LR", code3: "LBR", codeNumber: 430},
        {name: "Libya", code2: "LY", code3: "LBY", codeNumber: 434},
        {name: "Liechtenstein", code2: "LI", code3: "LIE", codeNumber: 438},
        {name: "Lithuania", code2: "LT", code3: "LTU", codeNumber: 440},
        {name: "Luxembourg", code2: "LU", code3: "LUX", codeNumber: 442},
        {name: "Macao", code2: "MO", code3: "MAC", codeNumber: 446},
        {name: "Madagascar", code2: "MG", code3: "MDG", codeNumber: 450},
        {name: "Malawi", code2: "MW", code3: "MWI", codeNumber: 454},
        {name: "Malaysia", code2: "MY", code3: "MYS", codeNumber: 458},
        {name: "Maldives", code2: "MV", code3: "MDV", codeNumber: 462},
        {name: "Mali", code2: "ML", code3: "MLI", codeNumber: 466},
        {name: "Malta", code2: "MT", code3: "MLT", codeNumber: 470},
        {name: "Marshall Islands", code2: "MH", code3: "MHL", codeNumber: 584},
        {name: "Martinique", code2: "MQ", code3: "MTQ", codeNumber: 474},
        {name: "Mauritania", code2: "MR", code3: "MRT", codeNumber: 478},
        {name: "Mauritius", code2: "MU", code3: "MUS", codeNumber: 480},
        {name: "Mayotte", code2: "YT", code3: "MYT", codeNumber: 175},
        {name: "Mexico", code2: "MX", code3: "MEX", codeNumber: 484},
        {name: "Micronesia", code2: "FM", code3: "FSM", codeNumber: 583},
        {name: "Moldova", code2: "MD", code3: "MDA", codeNumber: 498},
        {name: "Monaco", code2: "MC", code3: "MCO", codeNumber: 492},
        {name: "Mongolia", code2: "MN", code3: "MNG", codeNumber: 496},
        {name: "Montenegro", code2: "ME", code3: "MNE", codeNumber: 499},
        {name: "Montserrat", code2: "MS", code3: "MSR", codeNumber: 500},
        {name: "Morocco", code2: "MA", code3: "MAR", codeNumber: 504},
        {name: "Mozambique", code2: "MZ", code3: "MOZ", codeNumber: 508},
        {name: "Myanmar", code2: "MM", code3: "MMR", codeNumber: 104},
        {name: "Namibia", code2: "NA", code3: "NAM", codeNumber: 516},
        {name: "Nauru", code2: "NR", code3: "NRU", codeNumber: 520},
        {name: "Nepal", code2: "NP", code3: "NPL", codeNumber: 524},
        {name: "Netherlands", code2: "NL", code3: "NLD", codeNumber: 528},
        {name: "New Caledonia", code2: "NC", code3: "NCL", codeNumber: 540},
        {name: "New Zealand", code2: "NZ", code3: "NZL", codeNumber: 554},
        {name: "Nicaragua", code2: "NI", code3: "NIC", codeNumber: 558},
        {name: "Niger", code2: "NE", code3: "NER", codeNumber: 562},
        {name: "Nigeria", code2: "NG", code3: "NGA", codeNumber: 566},
        {name: "Niue", code2: "NU", code3: "NIU", codeNumber: 570},
        {name: "Norfolk Island", code2: "NF", code3: "NFK", codeNumber: 574},
        {name: "Northern Mariana Islands", code2: "MP", code3: "MNP", codeNumber: 580},
        {name: "Norway", code2: "NO", code3: "NOR", codeNumber: 578},
        {name: "Oman", code2: "OM", code3: "OMN", codeNumber: 512},
        {name: "Pakistan", code2: "PK", code3: "PAK", codeNumber: 586},
        {name: "Palau", code2: "PW", code3: "PLW", codeNumber: 585},
        {name: "Palestine, State of", code2: "PS", code3: "PSE", codeNumber: 275},
        {name: "Panama", code2: "PA", code3: "PAN", codeNumber: 591},
        {name: "Papua New Guinea", code2: "PG", code3: "PNG", codeNumber: 598},
        {name: "Paraguay", code2: "PY", code3: "PRY", codeNumber: 600},
        {name: "Peru", code2: "PE", code3: "PER", codeNumber: 604},
        {name: "Philippines", code2: "PH", code3: "PHL", codeNumber: 608},
        {name: "Pitcairn", code2: "PN", code3: "PCN", codeNumber: 612},
        {name: "Poland", code2: "PL", code3: "POL", codeNumber: 616},
        {name: "Portugal", code2: "PT", code3: "PRT", codeNumber: 620},
        {name: "Puerto Rico", code2: "PR", code3: "PRI", codeNumber: 630},
        {name: "Qatar", code2: "QA", code3: "QAT", codeNumber: 634},
        {name: "Republic of North Macedonia", code2: "MK", code3: "MKD", codeNumber: 807},
        {name: "Romania", code2: "RO", code3: "ROU", codeNumber: 642},
        {name: "Russian Federation", code2: "RU", code3: "RUS", codeNumber: 643},
        {name: "Rwanda", code2: "RW", code3: "RWA", codeNumber: 646},
        {name: "Réunion", code2: "RE", code3: "REU", codeNumber: 638},
        {name: "Saint Barthélemy", code2: "BL", code3: "BLM", codeNumber: 652},
        {name: "Saint Helena, Ascension and Tristan da Cunha", code2: "SH", code3: "SHN", codeNumber: 654},
        {name: "Saint Kitts and Nevis", code2: "KN", code3: "KNA", codeNumber: 659},
        {name: "Saint Lucia", code2: "LC", code3: "LCA", codeNumber: 662},
        {name: "Saint Vincent and the Grenadines", code2: "VC", code3: "VCT", codeNumber: 670},
        {name: "Samoa", code2: "WS", code3: "WSM", codeNumber: 882},
        {name: "San Marino", code2: "SM", code3: "SMR", codeNumber: 674},
        {name: "Sao Tome and Principe", code2: "ST", code3: "STP", codeNumber: 678},
        {name: "Saudi Arabia", code2: "SA", code3: "SAU", codeNumber: 682},
        {name: "Senegal", code2: "SN", code3: "SEN", codeNumber: 686},
        {name: "Serbia", code2: "RS", code3: "SRB", codeNumber: 688},
        {name: "Seychelles", code2: "SC", code3: "SYC", codeNumber: 690},
        {name: "Sierra Leone", code2: "SL", code3: "SLE", codeNumber: 694},
        {name: "Singapore", code2: "SG", code3: "SGP", codeNumber: 702},
        {name: "Sint Maarten", code2: "SX", code3: "SXM", codeNumber: 534},
        {name: "Slovakia", code2: "SK", code3: "SVK", codeNumber: 703},
        {name: "Slovenia", code2: "SI", code3: "SVN", codeNumber: 705},
        {name: "Solomon Islands", code2: "SB", code3: "SLB", codeNumber: 90},
        {name: "Somalia", code2: "SO", code3: "SOM", codeNumber: 706},
        {name: "South Africa", code2: "ZA", code3: "ZAF", codeNumber: 710},
        {name: "South Georgia and the South Sandwich Islands", code2: "GS", code3: "SGS", codeNumber: 239},
        {name: "South Sudan", code2: "SS", code3: "SSD", codeNumber: 728},
        {name: "Spain", code2: "ES", code3: "ESP", codeNumber: 724},
        {name: "Sri Lanka", code2: "LK", code3: "LKA", codeNumber: 144},
        {name: "Sudan", code2: "SD", code3: "SDN", codeNumber: 729},
        {name: "Suriname", code2: "SR", code3: "SUR", codeNumber: 740},
        {name: "Svalbard and Jan Mayen", code2: "SJ", code3: "SJM", codeNumber: 744},
        {name: "Sweden", code2: "SE", code3: "SWE", codeNumber: 752},
        {name: "Switzerland", code2: "CH", code3: "CHE", codeNumber: 756},
        {name: "Syrian Arab Republic", code2: "SY", code3: "SYR", codeNumber: 760},
        {name: "Taiwan", code2: "TW", code3: "TWN", codeNumber: 158},
        {name: "Tajikistan", code2: "TJ", code3: "TJK", codeNumber: 762},
        {name: "Tanzania, United Republic of", code2: "TZ", code3: "TZA", codeNumber: 834},
        {name: "Thailand", code2: "TH", code3: "THA", codeNumber: 764},
        {name: "Timor-Leste", code2: "TL", code3: "TLS", codeNumber: 626},
        {name: "Togo", code2: "TG", code3: "TGO", codeNumber: 768},
        {name: "Tokelau", code2: "TK", code3: "TKL", codeNumber: 772},
        {name: "Tonga", code2: "TO", code3: "TON", codeNumber: 776},
        {name: "Trinidad and Tobago", code2: "TT", code3: "TTO", codeNumber: 780},
        {name: "Tunisia", code2: "TN", code3: "TUN", codeNumber: 788},
        {name: "Turkey", code2: "TR", code3: "TUR", codeNumber: 792},
        {name: "Turkmenistan", code2: "TM", code3: "TKM", codeNumber: 795},
        {name: "Turks and Caicos Islands", code2: "TC", code3: "TCA", codeNumber: 796},
        {name: "Tuvalu", code2: "TV", code3: "TUV", codeNumber: 798},
        {name: "Uganda", code2: "UG", code3: "UGA", codeNumber: 800},
        {name: "Ukraine", code2: "UA", code3: "UKR", codeNumber: 804},
        {name: "United Arab Emirates", code2: "AE", code3: "ARE", codeNumber: 784},
        {name: "United Kingdom of Great Britain and Northern Ireland", code2: "GB", code3: "GBR", codeNumber: 826},
        {name: "United States Minor Outlying Islands", code2: "UM", code3: "UMI", codeNumber: 581},
        {name: "United States of America", code2: "US", code3: "USA", codeNumber: 840},
        {name: "Uruguay", code2: "UY", code3: "URY", codeNumber: 858},
        {name: "Uzbekistan", code2: "UZ", code3: "UZB", codeNumber: 860},
        {name: "Vanuatu", code2: "VU", code3: "VUT", codeNumber: 548},
        {name: "Venezuela", code2: "VE", code3: "VEN", codeNumber: 862},
        {name: "Viet Nam", code2: "VN", code3: "VNM", codeNumber: 704},
        {name: "Virgin Islands", code2: "VI", code3: "VIR", codeNumber: 850},
        {name: "Wallis and Futuna", code2: "WF", code3: "WLF", codeNumber: 876},
        {name: "Western Sahara", code2: "EH", code3: "ESH", codeNumber: 732},
        {name: "Yemen", code2: "YE", code3: "YEM", codeNumber: 887},
        {name: "Zambia", code2: "ZM", code3: "ZMB", codeNumber: 894},
        {name: "Zimbabwe", code2: "ZW", code3: "ZWE", codeNumber: 716},
        {name: "Åland Islands", code2: "AX", code3: "ALA", codeNumber: 248}
    ];
    
    // setting global variables
    
    const countryField = document.getElementById('userCountry');
    const cityField = document.getElementById('userCity');
    const htmlArray = [];
    
    // function for getting data from API
    const getData = async (url) => {
        try {
           const response = await fetch(url);
           const data = await response.json();
           return data;
        } catch (error) {
            console.log(error);
            return 'sorry, nothing found';
        }
    };
    
    // filling select for countries after page load
    for (let i = 0; i < countries.length; i++) {
         let newOption = document.createElement('option');
         newOption.value = countries[i].code2;
         newOption.textContent = countries[i].name;
         countryField.appendChild(newOption);
    };
    
    
    // filling select for cities, gets triggered after uses chooses country
    const getCities = async () => {
        const data = await getData(`http://api.geonames.org/searchJSON?country=${countryField.value}&featureClass=P&maxRows=1000&username=qwerty`);
        cityField.innerHTML = '<option disabled selected>then choose a city</option>';
        for (let i = 0; i < data.geonames.length; i++) {
            let newOption = document.createElement('option');
            newOption.value = data.geonames[i].toponymName;
            newOption.textContent = data.geonames[i].toponymName;
            cityField.appendChild(newOption);
        }
    };
    
    // converts country ISO code to its name to be fed to the API to get coordinates;
    const getCountryFromCode = countryCode => {
        const country = countries.find(item => item.code2 === countryCode).name;
        return country;
    };
    
    // gets user input from select boxes
    const getUserInput = () => {
        const countryCode = countryField.value;
        const city = cityField.value;
        return [countryCode, city];
    };
    
    // takes input from country and city select and returns location coordinates
    const getCoordinates = async (city, country) => {
        const data = await getData(`https://nominatim.openstreetmap.org/search?q=${city},${country}&format=json&limit=1`);
        const latitude = data[0].lat;
        const longitude = data[0].lon;
        return [latitude, longitude];
    };
    
    // gets the weather object from the API
    const getWeather = async (latitude, longitude) => {
        const data = await getData(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,wind_speed_10m`);
        return data;
    };
    
    // translates the weather code from API to words
    const explainWeather = (weatherCode) => {
        if (weatherCode < 1) {
            return 'clear sky';
        } else if (weatherCode >= 1 && weatherCode < 2) {
            return 'mainly clear';
        } else if (weatherCode >= 2 && weatherCode < 3) {
            return 'partially cloudy';
        } else if (weatherCode >= 3 && weatherCode < 4) {
            return 'overcast';
        } else if (weatherCode >= 45 && weatherCode < 46) {
            return 'fog';
        } else if (weatherCode >= 48 && weatherCode < 49) {
            return 'depositing rime fog';
        } else if (weatherCode >= 51 && weatherCode < 52) {
            return 'light drizzle';
        } else if (weatherCode >= 53 && weatherCode < 54) {
            return 'moderate drizzle';
        } else if (weatherCode >= 55 && weatherCode < 56) {
            return 'heavy drizzle';
        } else if (weatherCode >= 56 && weatherCode < 57) {
            return 'light freezing drizzle';
        } else if (weatherCode >= 57 && weatherCode < 58) {
            return 'heavy freezing drizzle';
        } else if (weatherCode >= 61 && weatherCode < 62) {
            return 'slight rain';
        } else if (weatherCode >= 63 && weatherCode < 64) {
            return 'moderate rain';
        } else if (weatherCode >= 65 && weatherCode < 66) {
            return 'heavy rain';
        } else if (weatherCode >= 66 && weatherCode < 67) {
            return 'light freezing rain';
        } else if (weatherCode >= 67 && weatherCode < 68) {
            return 'heavy freezing rain';
        } else if (weatherCode >= 71 && weatherCode < 73) {
            return 'slight snow fall';
        } else if (weatherCode >= 73 && weatherCode < 75) {
            return 'moderate snow fall';
        } else if (weatherCode >= 75 && weatherCode < 77) {
            return 'heavy snow fall';
        } else if (weatherCode >= 77 && weatherCode < 80) {
            return 'snow grains';
        } else if (weatherCode >= 80 && weatherCode < 81) {
            return 'slight rain showers';
        } else if (weatherCode >= 81 && weatherCode < 82) {
            return 'moderate rain showers';
        } else if (weatherCode >= 82 && weatherCode < 85) {
            return 'violent rain showers';
        } else if (weatherCode >= 85 && weatherCode < 86) {
            return 'slight snow showers';
        } else if (weatherCode >= 86 && weatherCode < 87) {
            return 'heavy snow showers';
        } else if (weatherCode >= 95 && weatherCode < 96) {
            return 'violent rain showers';
        } else if (weatherCode >= 96 && weatherCode < 99) {
            return 'slight snow showers';
        } else if (weatherCode >= 99 && weatherCode < 100) {
            return 'heavy snow showers';
        }
    };
    
    // getting pictures for the weather
    const visualizeWeather = (weatherCode) => {
        if (weatherCode < 2) {
            return 'weather1';
        } else if (weatherCode >= 2 && weatherCode < 3) {
            return 'weather7';
        } else if (weatherCode >= 3 && weatherCode < 4) {
            return 'weather9';
        } else if (weatherCode >= 45 && weatherCode < 49) {
            return 'weather13';
        } else if (weatherCode >= 51 && weatherCode < 56) {
            return 'weather3';
        } else if (weatherCode >= 56 && weatherCode < 58) {
            return 'weather10';
        } else if (weatherCode >= 61 && weatherCode < 66) {
            return 'weather2';
        } else if (weatherCode >= 66 &&  weatherCode < 68) {
            return 'weather10';
        } else if (weatherCode >= 71 && weatherCode < 80) {
            return 'weather5';
        } else if (weatherCode >= 80 && weatherCode < 85) {
            return 'weather12';
        } else if (weatherCode >= 85 && weatherCode < 87) {
            return 'weather8';
        } else if (weatherCode >= 95 && weatherCode < 96) {
            return 'weather12';
        } else if (weatherCode >= 96 && weatherCode < 100) {
            return 'weather8';
        }
    };
    
    // since the value arrays come in 168-item arrays, this function takes the values from/to hours
    const getDataForNumberHrs = (dataArr, hrsFrom, hrsTo) => {
        const valueArr = [];
        for (let i = hrsFrom; i < (hrsFrom + hrsTo); i++) {
            valueArr.push(dataArr[i]);
        }
        return valueArr;
    };
    
    // converting an array of weather values to understandable values
    const getWeatherForNumberHrs = (dataArr, hrsFrom, hrsTo, translateFunction) => {
        const valueArr = [];
        for (let i = hrsFrom; i < (hrsFrom + hrsTo); i++) {
            const value = translateFunction(dataArr[i]);
            valueArr.push(value);
        }
        return valueArr;
    };
    
    // gathering all weather information together into arrays for specifi hour interval from the weather object
    const getTotalWeatherValsForHrs = (weatherObj, hrsFrom, hrsTo) => {
        let startDayHrs = hrsFrom - new Date().getHours();
        const dailyTemperatureArray = getDataForNumberHrs(weatherObj.hourly.temperature_2m, startDayHrs, 23);
        const minTemperature = getMinValue(dailyTemperatureArray);
        const maxTemperature = getMaxValue(dailyTemperatureArray);
        const temperatureArr = getDataForNumberHrs(weatherObj.hourly.temperature_2m, hrsFrom, hrsTo);
        const weatherValArr = getWeatherForNumberHrs(weatherObj.hourly.precipitation, hrsFrom, hrsTo, explainWeather);
        const weatherImgArr = getWeatherForNumberHrs(weatherObj.hourly.precipitation, hrsFrom, hrsTo, visualizeWeather);
        const windSpeedValArr = getDataForNumberHrs(weatherObj.hourly.wind_speed_10m, hrsFrom, hrsTo);
        return [temperatureArr, weatherValArr, weatherImgArr, windSpeedValArr, minTemperature, maxTemperature];
    };
    // these two functions calculate min and max temperature from the temperature arr
    const getMinValue = valueArr => {
        let minValue = valueArr[0];
        for (let value of valueArr) {
            if (value < minValue) {
                minValue = value;
            }
        }
        return minValue;
    };
    
    const getMaxValue = valueArr => {
        let maxValue = valueArr[0];
        for (let value of valueArr) {
            if (value > maxValue) {
                maxValue = value;
            }
        }
        return maxValue;
    };
    
    // creating html with dynmically inserted values
    const renderWeatherDiv = (city, country, temperatureArr, weatherValArr, weatherImgArr, windSpeedValArr, minTemperature, maxTemperature, hoursFromNow) => {
        let html = `
            <div class="weather-container-large">
                <h1 class="city-name">${city}, ${country}</h1>
                <p class="min-max-temp">Min: ${minTemperature} °C   Max: ${maxTemperature} °C</p>
                <div class="weather-detail">
                    <div class="weather-box">
                        <p class="weather-detail-text">${weatherValArr[hoursFromNow]}</p>
                    </div>
                    <div class="weather-box">
                        <img src="img/${weatherImgArr[0]}.png">
                    </div>
                    <div class="weather-box">
                        <p class="weather-detail-text">${temperatureArr[hoursFromNow]} °C</p>
                    </div>
                    <div class="weather-box">
                        <p class="weather-detail-text">wind speed: ${windSpeedValArr[hoursFromNow]} m/s</p>
                    </div>
                    
            </div>`;
        return html;
        };
    
    // takes the htmlArray (global) and injects it into the weather element
    const injectHtml = () => {
        const targetDiv = document.getElementById('weatherField');
        targetDiv.innerHTML = htmlArray.join('\n');
    };
    
    // returns weather for a given location
    const displayWeather = async (city, country) => {
        const [ latitude, longitude ] = await getCoordinates(city, country);
        const weatherObj = await getWeather(latitude, longitude);
        const [ temperatureArr, weatherValArr, weatherImgArr, windSpeedValArr, minTemperature, maxTemperature ] = getTotalWeatherValsForHrs(weatherObj, new Date().getHours(), 1);
        const newHtml = renderWeatherDiv(city, country, temperatureArr, weatherValArr, weatherImgArr, windSpeedValArr, minTemperature, maxTemperature, 0);
        htmlArray.splice(0, 0, newHtml); // adding the new array to the global varibale
        injectHtml();
    };
    
    // gets triggered after user selects city
    const displaySearchedWeather = () => {
        const [countryCode, city] = getUserInput();
        const country = getCountryFromCode(countryCode);
        displayWeather(city, country);
    };
    
    const initiateWeatherContent = countryCityArr => {
        for (let i = 0; i < countryCityArr.length; i++) {
            displayWeather(countryCityArr[i].city, countryCityArr[i].country);
        }
    };
    
    // event listeners for select elements
    countryField.addEventListener('change', getCities);
    cityField.addEventListener('change', displaySearchedWeather);
    
    
    // time displaying function
    const displayDateTime = () => {
        const now = new Date();
        const dateString = now.toLocaleDateString();
        const timeString = now.toLocaleTimeString();
        document.getElementById('date').innerText = dateString;
        document.getElementById('time').innerText = timeString;
    };
    setInterval(displayDateTime, 1000);
    
    if (token) {
        console.log('User is logged in');
        const firstName = sessionStorage.getItem('firstName');
        const lastName = sessionStorage.getItem('lastName');
        const email = sessionStorage.getItem('email');

        // functions for data transfer for logged in users
        
        const getCities = async () => {
            const token = sessionStorage.getItem('token');
            const url = 'http://127.0.0.1:3200/cities';
        
            const options = {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email})
            };
        
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                console.log(data);
                initiateWeatherContent(data);
            } catch (error) {
                console.log(error);
            }
        };

        document.getElementById('logMenu').innerHTML = `<span id="logout">Logout  </span><a href="update.html"> Update Info </a> ${firstName} ${lastName}`;

        getCities();

        document.getElementById('logout').addEventListener('click', () => {
            sessionStorage.removeItem('token');
            location.reload(true);
        });


    } else {
        console.log('user not logged in');
        const countryCityArr = [{country: 'Great Britain', city: 'London'}, {country: 'Japan', city: 'Tokyo'}, {country: 'United States of America', city: 'Los Angeles'}];
        initiateWeatherContent(countryCityArr);
    }
});

