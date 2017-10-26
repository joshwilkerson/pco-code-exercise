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
var sortLinks = document.querySelectorAll('.filter a');

sortLinks.forEach(function (link) {
  return link.addEventListener('click', function () {
    alert('click');
  });
});

// search results data
new Vue({
  el: "#results",

  data: function data() {
    return {
      users: [{
        "name": {
          "first": "Christian",
          "last": "Hopkins"
        },
        "age": "31",
        "phone": {
          "primary": {
            "number": "(417) 328-6310",
            "type": "home"
          },
          "secondary": {
            "number": "(417) 123-6334",
            "type": "cell"
          }
        },
        "email": {
          "primary": {
            "address": "christian.hopkins34@gmail.com",
            "type": "home"
          },
          "secondary": {
            "address": "christian.hopkins34@church.com",
            "type": "work"
          }
        },
        "address": {
          "primary": {
            "street": "2830 Cherry St",
            "city": "Springfield",
            "state": "TN",
            "zipcode": 65898,
            "type": "home"
          },
          "secondary": {
            "street": "2830 Cherry St",
            "city": "Springfield",
            "state": "TN",
            "zipcode": 65898,
            "type": "work"
          }
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/59.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/59.jpg"
        }
      }, {
        "name": {
          "first": "Josh",
          "last": "Wilkerson"
        },
        "age": "31",
        "phone": {
          "primary": {
            "number": "(615) 739-8522",
            "type": "cell"
          },
          "secondary": null
        },
        "email": {
          "primary": {
            "address": "josh@joshwilkerson.com",
            "type": "home"
          },
          "secondary": {
            "address": "josh@dvlseigenthaler.com",
            "type": "work"
          }
        },
        "address": {
          "primary": {
            "street": "401 Chelsey Cove",
            "city": "Franklin",
            "state": "TN",
            "zipcode": 37064,
            "type": "home"
          },
          "secondary": {
            "street": "700 12th Ave South",
            "city": "Nashville",
            "state": "TN",
            "zipcode": 37203,
            "type": "work"
          }
        },
        "picture": {
          "large": "images/joshwilkerson-avatar-lg.jpg",
          "medium": "images/joshwilkerson-avatar-sm.jpg"
        }
      }, {
        "name": {
          "first": "Curtis",
          "last": "Ganes"
        },
        "age": "40",
        "phone": {
          "primary": {
            "number": "(615) 392-2812",
            "type": "cell"
          },
          "secondary": {
            "number": "(615) 219-3202",
            "type": "work"
          }
        },
        "email": {
          "primary": {
            "address": "curtisganes@gmail.com",
            "type": "home"
          },
          "secondary": {
            "address": "curtis.ganes@business.com",
            "type": "work"
          }
        },
        "address": {
          "primary": {
            "street": "302 Old Hickory Blvd",
            "city": "Nashville",
            "state": "TN",
            "zipcode": 37230,
            "type": "home"
          },
          "secondary": {
            "street": "2011 3rd Ave N",
            "city": "Nashville",
            "state": "TN",
            "zipcode": 37203,
            "type": "work"
          }
        },
        "picture": {
          "large": "images/avatar-m-lg.png",
          "medium": "images/avatar-m-sm.png"
        }
      }, {
        "name": {
          "first": "John",
          "last": "Harwell"
        },
        "age": "35",
        "phone": {
          "primary": {
            "number": "(210) 323-2903",
            "type": "cell"
          },
          "secondary": {
            "number": "(615) 301-6442",
            "type": "work"
          }
        },
        "email": {
          "primary": {
            "address": "john.harwell02@gmail.com",
            "type": "home"
          },
          "secondary": {
            "address": "johnharwell@church.com",
            "type": "work"
          }
        },
        "address": {
          "primary": {
            "street": "2820 Maple Ln",
            "city": "Columbia",
            "state": "TN",
            "zipcode": 37019,
            "type": "home"
          },
          "secondary": {
            "street": "102 Main St",
            "city": "Columbia",
            "state": "TN",
            "zipcode": 37019,
            "type": "work"
          }
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/23.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/23.jpg"
        }
      }, {
        "name": {
          "first": "Sarah",
          "last": "Ramsey"
        },
        "age": "29",
        "phone": {
          "primary": {
            "number": "(615) 311-9482",
            "type": "cell"
          },
          "secondary": {
            "number": "(615) 839-2912",
            "type": "work"
          }
        },
        "email": {
          "primary": {
            "address": "sararamsey02@gmail.com",
            "type": "home"
          },
          "secondary": {
            "address": "sarah@business.com",
            "type": "work"
          }
        },
        "address": {
          "primary": {
            "street": "245 Royal Oaks Pkwy",
            "city": "Franklin",
            "state": "TN",
            "zipcode": 37067,
            "type": "home"
          },
          "secondary": {
            "street": "1564 Franklin Rd",
            "city": "Nashville",
            "state": "TN",
            "zipcode": 37203,
            "type": "work"
          }
        },
        "picture": {
          "large": "images/avatar-f-lg.png",
          "medium": "images/avatar-f-sm.png"
        }
      }, {
        "name": {
          "first": "Beth",
          "last": "Robertson"
        },
        "age": "34",
        "phone": {
          "primary": {
            "number": "(615) 928-9313",
            "type": "cell"
          },
          "secondary": {
            "number": "(615) 301-6442",
            "type": "work"
          }
        },
        "email": {
          "primary": {
            "address": "bethrobertson@outlook.com",
            "type": "home"
          },
          "secondary": {
            "address": "bethrobertson@business.com",
            "type": "work"
          }
        },
        "address": {
          "primary": {
            "street": "3021 Concord Rd",
            "city": "Brentwood",
            "state": "TN",
            "zipcode": 37027,
            "type": "home"
          },
          "secondary": {
            "street": "102 Main St",
            "city": "Columbia",
            "state": "TN",
            "zipcode": 37019,
            "type": "work"
          }
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/17.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/17.jpg"
        }
      }, {
        "name": {
          "first": "Stephen",
          "last": "Adams"
        },
        "age": "30",
        "phone": {
          "primary": {
            "number": "(615) 293-1938",
            "type": "cell"
          },
          "secondary": {
            "number": "(615) 210-2059",
            "type": "work"
          }
        },
        "email": {
          "primary": {
            "address": "stephen.adams@yahoo.com",
            "type": "home"
          },
          "secondary": {
            "address": "stephen@business.com",
            "type": "work"
          }
        },
        "address": {
          "primary": {
            "street": "1492 Culbertson Rd",
            "city": "Antioch",
            "state": "TN",
            "zipcode": 37013,
            "type": "home"
          },
          "secondary": {
            "street": "294 Old Hickory Blvd",
            "city": "Brentwood",
            "state": "TN",
            "zipcode": 37027,
            "type": "work"
          }
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/22.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/22.jpg"
        }
      }, {
        "name": {
          "first": "Katie",
          "last": "Watson"
        },
        "age": "42",
        "phone": {
          "primary": {
            "number": "(615) 583-4921",
            "type": "cell"
          },
          "secondary": {
            "number": "(615) 232-1058",
            "type": "work"
          }
        },
        "email": {
          "primary": {
            "address": "katiewatson1@gmail.com",
            "type": "home"
          },
          "secondary": {
            "address": "katie@business.com",
            "type": "work"
          }
        },
        "address": {
          "primary": {
            "street": "1204 Grayline Cir",
            "city": "Nashville",
            "state": "TN",
            "zipcode": 37203,
            "type": "home"
          },
          "secondary": {
            "street": "294 Old Hickory Blvd",
            "city": "Brentwood",
            "state": "TN",
            "zipcode": 37027,
            "type": "work"
          }
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/30.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/30.jpg"
        }
      }, {
        "name": {
          "first": "Mark",
          "last": "Hammond"
        },
        "age": "39",
        "phone": {
          "primary": {
            "number": "(615) 214-6021",
            "type": "cell"
          },
          "secondary": {
            "number": "(615) 753-0301",
            "type": "work"
          }
        },
        "email": {
          "primary": {
            "address": "hammond_m@gmail.com",
            "type": "home"
          },
          "secondary": {
            "address": "mark@business.com",
            "type": "work"
          }
        },
        "address": {
          "primary": {
            "street": "2491 3rd Ave N",
            "city": "Nashville",
            "state": "TN",
            "zipcode": 37203,
            "type": "home"
          },
          "secondary": {
            "street": "24021 Franklin Pk",
            "city": "Nashville",
            "state": "TN",
            "zipcode": 37205,
            "type": "work"
          }
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/10.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/10.jpg"
        }
      }, {
        "name": {
          "first": "Emily",
          "last": "Smith"
        },
        "age": "31",
        "phone": {
          "primary": {
            "number": "(615) 537-3582",
            "type": "cell"
          },
          "secondary": {
            "number": "(615) 753-0301",
            "type": "work"
          }
        },
        "email": {
          "primary": {
            "address": "emilysmith@gmail.com",
            "type": "home"
          },
          "secondary": {
            "address": "emily@business.com",
            "type": "work"
          }
        },
        "address": {
          "primary": {
            "street": "312 Lipbsomb Dr",
            "city": "Brentwood",
            "state": "TN",
            "zipcode": 37027,
            "type": "home"
          },
          "secondary": {
            "street": "24021 Franklin Pk",
            "city": "Nashville",
            "state": "TN",
            "zipcode": 37205,
            "type": "work"
          }
        },
        "picture": {
          "large": "images/avatar-f-lg.png",
          "medium": "images/avatar-f-sm.png"
        }
      }]
    };
  }
});
