'use strict';

// search button behaivor
var searchField = document.querySelector('#search input');
var searchButton = document.querySelector('#search button');

if (document.getElementById('search') != undefined) {
  searchField.addEventListener('change', function () {
    if (searchField.value != "") {
      searchButton.disabled = false;
    } else {
      searchButton.disabled = true;
    }
  });
}

// sort results behaivor
var filterLinks = document.querySelectorAll('.filterBar a');

filterLinks.forEach(function (link) {
  return link.addEventListener('click', function (e) {
    if (link.classList.contains('sorted')) {
      link.classList.toggle('asc');
    } else {
      filterLinks.forEach(function (sibling) {
        return sibling.classList.remove('sorted');
      });
      link.classList.add('sorted');
    }
    e.preventDefault();
  });
});

var userData = [{
  firstName: "Christian",
  lastName: "Hopkins",
  age: 31,
  gender: "female",
  phone: {
    primary: 4173286310,
    primaryType: "home",
    secondary: 4171236334,
    secondaryType: "cell"
  },
  email: {
    primary: "christian.hopkins34@gmail.com",
    primaryType: "home",
    secondary: "christian.hopkins34@church.com",
    secondaryType: "work"
  },
  address: {
    primaryStreet: "2830 Cherry St",
    primaryCity: "Springfield",
    primaryState: "TN",
    primaryZip: 65898,
    primaryType: "home",
    secondaryStreet: "2830 Cherry St",
    secondaryCity: "Springfield",
    secondaryState: "TN",
    secondaryZip: 65898,
    secondaryType: "work"
  },
  thumbnail: "https://joshwilkerson.com/PCO/users/female-1.jpg"
}, {
  firstName: "Josh",
  lastName: "Wilkerson",
  age: 33,
  phone: {
    primary: 6157398522,
    primaryType: "cell"
  },
  email: {
    primary: "josh@joshwilkerson.com",
    primaryType: "home",
    secondary: "josh.wilkerson@dvlseigenthaler",
    secondaryType: "work"
  },
  address: {
    primaryStreet: "401 Chelsey Cove",
    primaryCity: "Franklin",
    primaryState: "TN",
    primaryZip: 37064,
    primaryType: "home",
    secondaryStreet: "400 12th Ave South",
    secondaryCity: "Nashville",
    secondaryState: "TN",
    secondaryZip: 37023,
    secondaryType: "work"
  },
  thumbnail: "https://joshwilkerson.com/PCO/users/joshwilkerson-avatar-lg.jpg"
}, {
  firstName: "Curtis",
  lastName: "Ganes",
  age: 40,
  phone: {
    primary: 6153922812,
    primaryType: "cell",
    secondary: 6152193202,
    secondaryType: "work"
  },
  email: {
    primary: "curtisganes@gmail.com",
    primaryType: "home",
    secondary: "curtis.ganes@business.com",
    secondaryType: "work"
  },
  address: {
    primaryStreet: "302 Old Hickory Blvd",
    primaryCity: "Nashville",
    primaryState: "TN",
    primaryZip: 37230,
    primaryType: "home",
    secondaryStreet: "2011 3rd Ave N",
    secondaryCity: "Nashville",
    secondaryState: "TN",
    secondaryZip: 37023,
    secondaryType: "work"
  },
  thumbnail: "https://joshwilkerson.com/PCO/users/male-4.jpg"
}, {
  firstName: "John",
  lastName: "Harwell",
  age: 35,
  phone: {
    primary: 2103232903,
    primaryType: "cell",
    secondary: 6153016442,
    secondaryType: "work"
  },
  email: {
    primary: "john.harwell02@gmail.com",
    primaryType: "home",
    secondary: "johnharwell@church.com",
    secondaryType: "work"
  },
  address: {
    primaryStreet: "2820 Maple Ln",
    primaryCity: "Columbia",
    primaryState: "TN",
    primaryZip: 37019,
    primaryType: "home",
    secondaryStreet: "102 Main St",
    secondaryCity: "Columbia",
    secondaryState: "TN",
    secondaryZip: 37019,
    secondaryType: "work"
  },
  thumbnail: "https://joshwilkerson.com/PCO/users/male-2.jpg"
}, {
  firstName: "Sarah",
  lastName: "Ramsey",
  age: 29,
  phone: {
    primary: 615311948,
    primaryType: "cell",
    secondary: 6158392912,
    secondaryType: "work"
  },
  email: {
    primary: "sararamsey02@gmail.com",
    primaryType: "home",
    secondary: "sarah@business.com",
    secondaryType: "work"
  },
  address: {
    primaryStreet: "245 Royal Oaks Pkwy",
    primaryCity: "Franklin",
    primaryState: "TN",
    primaryZip: 37067,
    primaryType: "home",
    secondaryStreet: "1564 Franklin Rd",
    secondaryCity: "Nashville",
    secondaryState: "TN",
    secondaryZip: 37203,
    secondaryType: "work"
  },
  thumbnail: "https://joshwilkerson.com/PCO/users/female-2.jpg"
}, {
  firstName: "Beth",
  lastName: "Robertson",
  age: 34,
  phone: {
    primary: 6159289313,
    primaryType: "cell",
    secondary: 6153016442,
    secondaryType: "work"
  },
  email: {
    primary: "bethrobertson@outlook.com",
    primaryType: "home",
    secondary: "sarah@bethrobertson@business.com",
    secondaryType: "work"
  },
  address: {
    primaryStreet: "3021 Concord Rd",
    primaryCity: "Brentwood",
    primaryState: "TN",
    primaryZip: 37027,
    primaryType: "home",
    secondaryStreet: "102 Main St",
    secondaryCity: "Columbia",
    secondaryState: "TN",
    secondaryZip: 37019,
    secondaryType: "work"
  },
  thumbnail: "https://joshwilkerson.com/PCO/users/female-3.jpg"
}, {
  firstName: "Stephen",
  lastName: "Adams",
  age: 30,
  phone: {
    primary: 6152931938,
    primaryType: "cell",
    secondary: 6152102059,
    secondaryType: "work"
  },
  email: {
    primary: "stephen.adams@yahoo.com",
    primaryType: "home",
    secondary: "stephen@business.com",
    secondaryType: "work"
  },
  address: {
    primaryStreet: "1492 Culbertson Rd",
    primaryCity: "Antioch",
    primaryState: "TN",
    primaryZip: 37013,
    primaryType: "home",
    secondaryStreet: "294 Old Hickory Blvd",
    secondaryCity: "Brentwood",
    secondaryState: "TN",
    secondaryZip: 37027,
    secondaryType: "work"
  },
  thumbnail: "https://joshwilkerson.com/PCO/users/male-3.jpg"
}, {
  firstName: "Katie",
  lastName: "Watson",
  age: 42,
  phone: {
    primary: 6155834921,
    primaryType: "cell",
    secondary: 6152321058,
    secondaryType: "work"
  },
  email: {
    primary: "katiewatson1@gmail.com",
    primaryType: "home",
    secondary: "katie@business.com",
    secondaryType: "work"
  },
  address: {
    primaryStreet: "1204 Grayline Cir",
    primaryCity: "Nashville",
    primaryState: "TN",
    primaryZip: 37203,
    primaryType: "home",
    secondaryStreet: "294 Old Hickory Blvd",
    secondaryCity: "Brentwood",
    secondaryState: "TN",
    secondaryZip: 37027,
    secondaryType: "work"
  },
  thumbnail: "https://joshwilkerson.com/PCO/users/female-4.jpg"
}, {
  firstName: "Mark",
  lastName: "Hammond",
  age: 39,
  phone: {
    primary: 6152146021,
    primaryType: "cell",
    secondary: 6157530301,
    secondaryType: "work"
  },
  email: {
    primary: "hammond_m@gmail.com",
    primaryType: "home",
    secondary: "mark@business.com",
    secondaryType: "work"
  },
  address: {
    primaryStreet: "2491 3rd Ave N",
    primaryCity: "Nashville",
    primaryState: "TN",
    primaryZip: 37203,
    primaryType: "home",
    secondaryStreet: "24021 Franklin Pk",
    secondaryCity: "Nashville",
    secondaryState: "TN",
    secondaryZip: 37205,
    secondaryType: "work"
  },
  thumbnail: "https://joshwilkerson.com/PCO/users/male-1.jpg"
}, {
  firstName: "Emily",
  lastName: "Smith",
  age: 39,
  phone: {
    primary: 6155373582,
    primaryType: "cell",
    secondary: 6157530301,
    secondaryType: "work"
  },
  email: {
    primary: "emilysmith@gmail.com",
    primaryType: "home",
    secondary: "emily@business.com",
    secondaryType: "work"
  },
  address: {
    primaryStreet: "312 Lipbsomb Dr",
    primaryCity: "Brentwood",
    primaryState: "TN",
    primaryZip: 37027,
    primaryType: "home",
    secondaryStreet: "24021 Franklin Pk",
    secondaryCity: "Nashville",
    secondaryState: "TN",
    secondaryZip: 37205,
    secondaryType: "work"
  },
  thumbnail: "https://joshwilkerson.com/PCO/users/female-5.jpg"
}];

function getProfilePhoto(image, gender) {
  if (image) {
    return React.createElement('img', { src: image });
  } else {
    if (gender == "male") {
      return React.createElement('img', { src: 'https://joshwilkerson.com/PCO/users/default-user-m.jpg' });
    } else {
      return React.createElement('img', { src: 'https://joshwilkerson.com/PCO/users/default-user-f.jpg' });
    }
  }
}

function formatPhoneNumber(phone) {
  var phoneStr = phone.toString();
  var phone1 = phoneStr.substr(0, 3);
  var phone2 = phoneStr.substr(3, 3);
  var phone3 = phoneStr.substr(6, 4);
  return '(' + phone1 + ') ' + phone2 + '-' + phone3;
}

function DisplayUsers(props) {
  var userData = props.users;
  var showUser = userData.map(function (user) {
    return React.createElement(
      'div',
      { 'class': 'user' },
      React.createElement(
        'a',
        { href: '#' },
        React.createElement(
          'span',
          { 'class': 'avatar' },
          getProfilePhoto(user.thumbnail, user.gender)
        ),
        React.createElement(
          'span',
          { 'class': 'name' },
          user.firstName,
          ' ',
          user.lastName
        ),
        React.createElement(
          'span',
          { 'class': 'age' },
          user.age
        ),
        React.createElement(
          'span',
          { 'class': 'phone' },
          formatPhoneNumber(user.phone.primary)
        ),
        React.createElement(
          'span',
          { 'class': 'email' },
          user.email.primary
        ),
        React.createElement(
          'span',
          { 'class': 'address' },
          user.address.primaryStreet,
          ' ',
          user.address.primaryCity,
          ', ',
          user.address.primaryState,
          ' ',
          user.address.primaryZip
        )
      )
    );
  });
  return React.createElement(
    'div',
    { 'class': 'users' },
    showUser
  );
}

ReactDOM.render(React.createElement(DisplayUsers, { users: userData }), document.getElementById('results--items'));
//# sourceMappingURL=main.js.map
