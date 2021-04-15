
let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "name" : "Noyer",
    "image_url" : "https://uploads-ssl.webflow.com/5cd1e68968db65ba07de7bfb/5ef278b160c40c06837c5d98_noyer-3d-website-1280x850-p-500.jpeg",
    "price": "87,000",
    "rating": "9.2/10",
    "size": 331,
    "sleeps": 4,
    "color": "#ebf1f5"
  },
  {
    "name" : "Draper",
    "image_url" : "https://uploads-ssl.webflow.com/5cd1e68968db65ba07de7bfb/5ef278a7850f982f8148ec45_la-draper-web-15-1024x683-p-500.jpeg",
    "price": "154,900",
    "rating": "9.2/10",
    "size": 255,
    "sleeps": 4,
    "color" : "#d8e3ec"
  },
  {
    "name" : "Jupe",
    "image_url" : "https://uploads-ssl.webflow.com/5cd1e68968db65ba07de7bfb/5fee46ab47d282950f001ff1_Jupe%20Lit%20Exterior%20(photo%20credit_%20Sam%20Gezari)-p-500.jpeg",
    "price": "17,000",
    "rating": "9/10",
    "size": 111,
    "sleeps": 2,
    "color" : "#c4d4e2"
  },
  {
    "name" : "Cornelia",
    "image_url" : "https://uploads-ssl.webflow.com/5cd1e68968db65ba07de7bfb/5ec867e44966c2c90253c1f3_5eab03752c048c3a2992c506_4351-Cato-Rd-The-Corneilia-print-021-35-The-Corneilia-4200x2804-300dpi-copy-p-500.jpeg",
    "price": "132,000",
    "rating": "7.2/10",
    "size": 205,
    "sleeps": 4,
    "color" : "#b1c6d9"
  },
  {
    "name" : "Alpha",
    "image_url" : "https://uploads-ssl.webflow.com/5cd1e68968db65ba07de7bfb/5ec85e9dd0fb9bf8c7a0e4fe_5eaae68d690fd9182bdce235_4371-W-Old-Hickory-Blvd-print-091-120-021-Alpha-Final-4200x2330-300dpi-05-43-04-090-p-500.jpeg",
    "price": "158,000",
    "rating": "8/10",
    "size": 205,
    "sleeps": 2,
    "color" : "#9db8cf"
  },
  {
    "name" : "Orchid",
    "image_url" : "https://uploads-ssl.webflow.com/5cd1e68968db65ba07de7bfb/5ec85e9d05a9e14e440f734d_5e84ea5925b6c4cac3741dd3_Orchid-Tiny-House-Exterior-D-2-p-500.jpeg",
    "price": "155,000",
    "rating": "9/10",
    "size": 225,
    "sleeps": 4,
    "color" : "#89aac5"
  },
  {
    "name" : "Road Haus",
    "image_url" : "https://uploads-ssl.webflow.com/5cd1e68968db65ba07de7bfb/5ff61d6f3b91b94292b936cc_krafty_photos_kamphaus-13-p-500.jpeg",
    "price": "89,500",
    "rating": "6.7/10",
    "size": 250,
    "sleeps": 2,
    "color" : "#769cbc"
  },
  {
    "name" : "The Phoenix",
    "image_url" : "https://uploads-ssl.webflow.com/5cd1e68968db65ba07de7bfb/605b7c5c6b9d2dffd23eeff2_5fda89cdfa0620010a8373b3_8efbbde44fafe64da26cdcc85094dd52-p-500.jpeg",
    "price": "141,000",
    "rating": "7.2/10",
    "size": 303,
    "sleeps": 4,
    "color" : "#628db2"
  },
  {
    "name" : "Kubrick",
    "image_url" : "https://uploads-ssl.webflow.com/5cd1e68968db65ba07de7bfb/5ef278c059045267a5b4036e_IMG_6306-p-1080.jpeg",
    "price": "90,000",
    "rating": "8.2/10",
    "size": 204,
    "sleeps": 2,
    "color" : "#4f7fa9"
  }
];

//adding all of the tiny houses to the website
for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}

//function that receives one json
function createElement(incomingJSON) {

  //style a div for each content
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');
  newContentElement.style.backgroundColor = incomingJSON['color'];

  //title of each tiny home
  //let newContentHeading = document.createElement("H3");
  //newContentHeading.classList.add('contentTitle');
  //newContentHeading.innerText = incomingJSON['name'];
  //newContentElement.appendChild(newContentHeading); //adding the headline to the items

  // create and add image of the houses
  let newImage = document.createElement("IMG");
  newImage.classList.add("houseImage");
  newImage.src = incomingJSON['image_url'];
  newContentElement.appendChild(newImage);

  //title of each tiny home
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['name'];
  newContentElement.appendChild(newContentHeading); //adding the headline to the items

  //starting price of tiny home
  let newContentPrice = document.createElement('H4');
  newContentPrice.classList.add('contentFeatures');
  newContentPrice.innerText = "Starting at: $" + incomingJSON["price"],
  newContentElement.appendChild(newContentPrice);

  //tiny home rating
  let newContentRating = document.createElement('H4');
  newContentRating.classList.add('contentFeatures');
  newContentRating.innerText = "Rating: " + incomingJSON["rating"],
  newContentElement.appendChild(newContentRating);

  //tiny home size in square feet
  let newContentSize = document.createElement('H4');
  newContentSize.classList.add('contentFeatures');
  newContentSize.innerText = "Size: " + incomingJSON['price'] + " sq ft",
  newContentElement.appendChild(newContentSize);

  //maximum number of people that sleep in the tiny home
  let newContentSleep = document.createElement('H4');
  newContentSleep.classList.add('contentFeatures');
  newContentSleep.innerText = "Sleeps up to " + incomingJSON['sleeps'],
  newContentElement.appendChild(newContentSleep);

  //add the items on the page
  contentGridElement.appendChild(newContentElement);

}
