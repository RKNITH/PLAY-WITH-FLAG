// declaring arrays

const num = [0,1,2,3,4,5,6,7,8,9];
const countryCodes = ['ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'ao', 'aq', 'ar', 'as', 'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg', 'bh', 'bi', 'bj', 'bl', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt', 'bv', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cu', 'cv', 'cw', 'cx', 'cy', 'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'eg', 'eh', 'er', 'es', 'et', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'ga', 'gb', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'id', 'ie', 'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo', 'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky', 'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv', 'ly', 'ma', 'mc', 'md', 'me', 'mf', 'mg', 'mh', 'mk', 'ml', 'mm', 'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np', 'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl', 'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sj', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'sv', 'sx', 'sy', 'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'um', 'us', 'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wf', 'ws', 'ye', 'yt', 'za', 'zm', 'zw'];
const countryNames = ['Andorra', 'United Arab Emirates', 'Afghanistan', 'Antigua and Barbuda', 'Anguilla', 'Albania', 'Armenia', 'Angola', 'Antarctica', 'Argentina', 'American Samoa', 'Austria', 'Australia', 'Aruba', 'Åland Islands', 'Azerbaijan', 'Bosnia and Herzegovina', 'Barbados', 'Bangladesh', 'Belgium', 'Burkina Faso', 'Bulgaria', 'Bahrain', 'Burundi', 'Benin', 'Saint Barthélemy', 'Bermuda', 'Brunei Darussalam', 'Bolivia', 'Bonaire, Sint Eustatius and Saba', 'Brazil', 'Bahamas', 'Bhutan', 'Bouvet Island', 'Botswana', 'Belarus', 'Belize', 'Canada', 'Cocos (Keeling) Islands', 'Congo, the Democratic Republic of the', 'Central African Republic', 'Congo', 'Switzerland', 'Côte d\'Ivoire', 'Cook Islands', 'Chile', 'Cameroon', 'China', 'Colombia', 'Costa Rica', 'Cuba', 'Cabo Verde', 'Curaçao', 'Christmas Island', 'Cyprus', 'Czechia', 'Germany', 'Djibouti', 'Denmark', 'Dominica', 'Dominican Republic', 'Algeria', 'Ecuador', 'Estonia', 'Egypt', 'Western Sahara', 'Eritrea', 'Spain', 'Ethiopia', 'Finland', 'Fiji', 'Falkland Islands (Malvinas)', 'Micronesia, Federated States of', 'Faroe Islands', 'France', 'Gabon', 'United Kingdom', 'Grenada', 'Georgia', 'French Guiana', 'Guernsey', 'Ghana', 'Gibraltar', 'Greenland', 'Gambia', 'Guinea', 'Guadeloupe', 'Equatorial Guinea', 'Greece', 'South Georgia and the South Sandwich Islands', 'Guatemala', 'Guam', 'Guinea-Bissau', 'Guyana', 'Hong Kong', 'Heard Island and McDonald Islands', 'Honduras', 'Croatia', 'Haiti', 'Hungary', 'Indonesia', 'Ireland' ,'Israel', 'Isle of Man', 'India', 'British Indian Ocean Territory', 'Iraq', 'Iran, Islamic Republic of', 'Iceland', 'Italy', 'Jersey', 'Jamaica', 'Jordan', 'Japan', 'Kenya', 'Kyrgyzstan', 'Cambodia', 'Kiribati', 'Comoros', 'Saint Kitts and Nevis', 'Korea, Democratic People\'s Republic of', 'Korea, Republic of', 'Kuwait', 'Cayman Islands', 'Kazakhstan', 'Lao People\'s Democratic Republic', 'Lebanon', 'Saint Lucia', 'Liechtenstein', 'Sri Lanka', 'Liberia', 'Lesotho', 'Lithuania', 'Luxembourg', 'Latvia', 'Libya', 'Morocco', 'Monaco', 'Moldova, Republic of', 'Montenegro', 'Saint Martin (French part)', 'Madagascar', 'Marshall Islands', 'North Macedonia', 'Mali', 'Myanmar', 'Mongolia', 'Macao', 'Northern Mariana Islands', 'Martinique', 'Mauritania', 'Montserrat', 'Malta', 'Mauritius', 'Maldives', 'Malawi', 'Mexico', 'Malaysia', 'Mozambique', 'Namibia', 'New Caledonia', 'Niger', 'Norfolk Island', 'Nigeria', 'Nicaragua', 'Netherlands', 'Norway', 'Nepal', 'Nauru', 'Niue', 'New Zealand', 'Oman', 'Panama', 'Peru', 'French Polynesia', 'Papua New Guinea', 'Philippines', 'Pakistan', 'Poland', 'Saint Pierre and Miquelon', 'Pitcairn', 'Puerto Rico', 'Palestinian Territory, Occupied', 'Portugal', 'Palau', 'Paraguay', 'Qatar', 'Réunion', 'Romania', 'Serbia', 'Russian Federation', 'Rwanda', 'Saudi Arabia', 'Solomon Islands', 'Seychelles', 'Sudan', 'Sweden', 'Singapore', 'Saint Helena, Ascension and Tristan da Cunha', 'Slovenia', 'Svalbard and Jan Mayen', 'Slovakia', 'Sierra Leone', 'San Marino', 'Senegal', 'Somalia', 'Suriname', 'South Sudan', 'Sao Tome and Principe', 'El Salvador', 'Sint Maarten (Dutch part)', 'Syrian Arab Republic', 'Eswatini', 'Turks and Caicos Islands', 'Chad', 'French Southern Territories', 'Togo', 'Thailand', 'Tajikistan', 'Tokelau', 'Timor-Leste', 'Turkmenistan', 'Tunisia', 'Tonga', 'Turkey', 'Trinidad and Tobago', 'Tuvalu', 'Taiwan, Province of China', 'Tanzania, United Republic of', 'Ukraine', 'Uganda', 'United States Minor Outlying Islands', 'United States', 'Uruguay', 'Uzbekistan', 'Holy See (Vatican City State)', 'Saint Vincent and the Grenadines', 'Venezuela, Bolivarian Republic of', 'Virgin Islands, British', 'Virgin Islands, U.S.', 'Viet Nam', 'Vanuatu', 'Wallis and Futuna', 'Samoa', 'Yemen', 'Mayotte', 'South Africa', 'Zambia', 'Zimbabwe'];
const answerRevealResponses = ["THIS WAS EASY!", "HAVEN'T SEEN THIS FLAG BEFORE?"];

// setting values for necessary variables

function getNewNum() {
    let newNum =  Math.floor(Math.random() * countryCodes.length);
    return newNum;
}
function getCountryCode() {
    let countryCode = countryCodes[currentNum];
    return countryCode;
}
function getCountryName() {
    let countryName = countryNames[currentNum];
    return countryName;
}
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// declaring global variables

let currentNum = getNewNum();
let currentCountryName = getCountryName();
let correctAnswerNumber;

// change text of the correct option to the correct country's name

function changeCorrectOptionText(correctAnswerNumber) {
    document.getElementById(String(correctAnswerNumber)).innerHTML = getCountryName();
}

// getting text of an option that is not the correct option

function getOtherOptionText() {
    let otherOptionText;
    do {
        otherOptionText = countryNames[Math.floor(Math.random() * countryNames.length)];
    } while (otherOptionText === currentCountryName);
    return otherOptionText;
}

// changing text of other options that are not the correct options to random country names

function changeTextOfOtherOptions() {
    for (let i = 1; i <= 4; i++) {
        if (i !== correctAnswerNumber) {
            document.getElementById(String(i)).innerHTML = getOtherOptionText();
        }
    }
}

// this test function literally crashes my browser lmfaoooo
// i wrote this test function to check if there are any duplicate country names in the other options
// this function was meant to replace the changeTextOfOtherOptions() function given above
// but it crashes the browser so bad I can't even close the browser tab after it runs

function test() {
    let option1Text = document.getElementById('1').innerHTML;
    let option2Text = document.getElementById('2').innerHTML;
    let option3Text = document.getElementById('3').innerHTML;
    let option4Text = document.getElementById('4').innerHTML;
    for (let i = 1; i <= 4; i++) {
        do {
            if (i !== correctAnswerNumber) {
                document.getElementById(String(i)).innerHTML = getOtherOptionText();
            }
        } while (document.getElementById(String(i)).innerHTML == option1Text || document.getElementById(String(i)).innerHTML == option2Text || document.getElementById(String(i)).innerHTML == option3Text || document.getElementById(String(i)).innerHTML == option4Text);
    }
}

// checking whether answer is correct or not

function checkAnswer(buttonID) {
    if (Number(buttonID) === correctAnswerNumber) {
        correct();
    } else {
        incorrect();
    }
}

// program starts, question is asked

function question() {

    // get new correct answer number
    correctAnswerNumber = generateRandomIntegerInRange(1, 4);

    // change button text of correct answer to correct country name
    changeCorrectOptionText(correctAnswerNumber);

    // change button text of other answers to random country names
    changeTextOfOtherOptions();

    // remove globe
    // document.querySelector('.background').style.display = 'none';
    document.querySelector('.globe').style.visibility = 'hidden';
    document.querySelector('.globe').style.opacity = '0';
    document.querySelector('.globe').style.transition = 'visibility 0s 0.3s, opacity 0.3s linear';

    // remove description
    document.querySelector('.introduction').style.display = 'none';

    // remove start button
    document.querySelector('.start').style.display = 'none';

    // change heading
    document.getElementById('headingText').innerHTML = "WHAT'S THE COUNTRY?";

    // display flag
    // 1. set flag div
    document.querySelector('.flag').style.display = 'flex';
    // 2. concatenate and get flag API URl
    let URLcomp1 = 'https://flagcdn.com/';
    let flagURL = URLcomp1.concat(getCountryCode(),'.svg');
    // 3. get flag image from concatenated URL
    document.querySelector('.flag').style.cssText+= `background-image: url(${flagURL})`;
    // 4. adjust image
    document.querySelector('.flag').style.backgroundSize = 'contain';
    document.querySelector('.flag').style.backgroundRepeat = 'no-repeat';
    document.querySelector('.flag').style.backgroundPositionX = 'center';

    // display option buttons
    document.querySelector('.options').style.display = 'block';
}

// correct answer is received

function correct() {

    // change heading
    document.getElementById('headingText').innerHTML = "CORRECT!";

    // leave flag as it is

    // display country name and description
    document.getElementById('countryName').innerHTML = currentCountryName;
    document.querySelector('.countryInformation').style.display = 'block';

    // remove option buttons
    document.querySelector('.options').style.display = 'none';

    // show next flag button
    document.querySelector('.next').style.display = 'block';
}

// incorrect answer is received

function incorrect() {
    
    // change heading
    document.getElementById('headingText').innerHTML = "WRONG ANSWER!";
    
    // leave flag as it is

    // display country name and description
    document.getElementById('countryName').innerHTML = currentCountryName;
    document.querySelector('.countryInformation').style.display = 'block';

    // remove option buttons
    document.querySelector('.options').style.display = 'none';

    // show next flag button
    document.querySelector('.next').style.display = 'block';
}

// user clicks "Show Answer" button

function showAnswer() {
    // change heading
    document.getElementById('headingText').innerHTML = "HAVEN'T SEEN THIS FLAG BEFORE?";
    
    // leave flag as it is

    // display country name and description
    document.querySelector('.countryInformation').style.display = 'block';
    document.getElementById('countryName').innerHTML = currentCountryName;

    // remove option buttons
    document.querySelector('.options').style.display = 'none';

    // show next flag button
    document.querySelector('.next').style.display = 'block';
}

// "Next Flag" button is clicked

function next() {

    // reset variables
    currentNum = getNewNum();
    currentCountryName = getCountryName();

    // remove country description
    document.querySelector('.countryInformation').style.display = 'none';

    // remove next flag button
    document.querySelector('.next').style.display = 'none';

    question();
}