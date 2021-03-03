var properties = [
  {
    "street": "4817 E 36th St",
    "city-state-zip": "Sioux Falls, SD 57110",
    "price": "$3,000",
    "image": "home-1.jpg",
    "sqft": 2500,
    "garage": 2,
    "bdrm": 3,
    "bath": 2,
    "url": "property_details.html"
  },
  {
    "street": "5109 W 55th St",
    "city-state-zip": "Sioux Falls, SD 57106",
    "price": "$3,500",
    "image": "home-2.jpg",
    "sqft": 3200,
    "garage": 1,
    "bdrm": 4,
    "bath": 2.5
  },
  {
    "street": "6512 W 55th St",
    "city-state-zip": "Sioux Falls, SD 57106",
    "price": "$4,000",
    "image": "home-3.jpg",
    "sqft": 3100,
    "garage": 0,
    "bdrm": 4,
    "bath": 3
  },
  {
    "street": "5612 S Anthony Ave",
    "city-state-zip": "Sioux Falls, SD 57106",
    "price": "$2,500",
    "image": "home-4.jpg",
    "sqft": 3000,
    "garage": 2,
    "bdrm": 4,
    "bath": 2
  },
  {
    "street": "1600 S Comet Rd",
    "city-state-zip": "Sioux Falls, SD 57103",
    "price": "$2,000",
    "image": "home-5.jpg",
    "sqft": 2200,
    "garage": 1,
    "bdrm": 3,
    "bath": 1.5
  },
  {
    "street": "1601 E Dana Dr",
    "city-state-zip": "Sioux Falls, SD 57105",
    "price": "$5,000",
    "image": "home-6.jpg",
    "sqft": 4000,
    "garage": 1,
    "bdrm": 5,
    "bath": 3.5
  },
  {
    "street": "5512 S Danberry Dr",
    "city-state-zip": "Sioux Falls, SD 57106",
    "price": "$3,000",
    "image": "home-1.jpg",
    "sqft": 2500,
    "garage": 2,
    "bdrm": 3,
    "bath": 2
  },
  {
    "street": "2605 S Groveland Ave",
    "city-state-zip": "Sioux Falls, SD 57110",
    "price": "$3,500",
    "image": "home-2.jpg",
    "sqft": 3200,
    "garage": 1,
    "bdrm": 4,
    "bath": 2.5
  },
  {
    "street": "2612 S Groveland Ave",
    "city-state-zip": "Sioux Falls, SD 57110",
    "price": "$4,000",
    "image": "home-3.jpg",
    "sqft": 3100,
    "garage": 0,
    "bdrm": 4,
    "bath": 3
  },
  {
    "street": "1921 S Jefferson Ave",
    "city-state-zip": "Sioux Falls, SD 57105",
    "price": "$2,500",
    "image": "home-4.jpg",
    "sqft": 3000,
    "garage": 2,
    "bdrm": 4,
    "bath": 2
  },
  {
    "street": "3804 S Lewis Ave",
    "city-state-zip": "Sioux Falls, SD 57103",
    "price": "$2,000",
    "image": "home-5.jpg",
    "sqft": 2200,
    "garage": 1,
    "bdrm": 3,
    "bath": 1.5
  },
  {
    "street": "2717 S Maywood Dr",
    "city-state-zip": "Sioux Falls, SD 57110",
    "price": "$5,000",
    "image": "home-6.jpg",
    "sqft": 4000,
    "garage": 1,
    "bdrm": 5,
    "bath": 3.5
  },
  {
    "street": "2612 S Melanie Ln",
    "city-state-zip": "Sioux Falls, SD 57103",
    "price": "$3,000",
    "image": "home-1.jpg",
    "sqft": 2500,
    "garage": 2,
    "bdrm": 3,
    "bath": 2
  },
  {
    "street": "2600 W Minnehaha Dr",
    "city-state-zip": "Sioux Falls, SD 57105",
    "price": "$3,500",
    "image": "home-2.jpg",
    "sqft": 3200,
    "garage": 1,
    "bdrm": 4,
    "bath": 2.5
  },
  {
    "street": "1813 S Monticello Ave",
    "city-state-zip": "Sioux Falls, SD 57106",
    "price": "$4,000",
    "image": "home-3.jpg",
    "sqft": 3100,
    "garage": 0,
    "bdrm": 4,
    "bath": 3
  },
  {
    "street": "2809 S Pepper Ridge Ave",
    "city-state-zip": "Sioux Falls, SD 57103",
    "price": "$2,500",
    "image": "home-4.jpg",
    "sqft": 3000,
    "garage": 2,
    "bdrm": 4,
    "bath": 2
  },
  {
    "street": "4616 S Samantha Dr",
    "city-state-zip": "Sioux Falls, SD 57106",
    "price": "$2,000",
    "image": "home-5.jpg",
    "sqft": 2200,
    "garage": 1,
    "bdrm": 3,
    "bath": 1.5
  },
  {
    "street": "4016 S Tuscany Ct",
    "city-state-zip": "Sioux Falls, SD 57110",
    "price": "$5,000",
    "image": "home-6.jpg",
    "sqft": 4000,
    "garage": 1,
    "bdrm": 5,
    "bath": 3.5
  },
  {
    "street": "3000 S Walts Ave",
    "city-state-zip": "Sioux Falls, SD 57105",
    "price": "$3,000",
    "image": "home-1.jpg",
    "sqft": 2500,
    "garage": 2,
    "bdrm": 3,
    "bath": 2
  },
  {
    "street": "608 E Wiswall Pl",
    "city-state-zip": "Sioux Falls, SD 57105",
    "price": "$3,500",
    "image": "home-2.jpg",
    "sqft": 3200,
    "garage": 1,
    "bdrm": 4,
    "bath": 2.5
  }
];

var prop_card = "";
prop_card += "<div class=\"col-sm-6 col-md-4 mb-5\">";
prop_card += "<div class=\"card\">";
prop_card += "<div class=\"card-img-wrapper\">";
prop_card += "<span class=\"card-price\">%data-price%</span>";
prop_card += "<img class=\"card-img-top\" src=\"images/exterior/%data-image%\" />";
prop_card += "</div>";
prop_card += "<div class=\"card-body\">";
prop_card += "<h5 class=\"card-title\">";
prop_card += "%data-street%";
prop_card += "<span>%data-city-state-zip%</span>";
prop_card += "</h5>";
prop_card += "<div class=\"card-details\">";
prop_card += "<div class=\"card-details-item\">";
prop_card += "<div><i class=\"fa fa-th-large\"></i> Sqft: %data-sqft%</div>";
prop_card += "<div><i class=\"fa fa-bed\"></i> Bdrm: %data-bdrm%</div>";
prop_card += "</div>";
prop_card += "<div class=\"card-details-item\">";
prop_card += "<div><i class=\"fa fa-car\"></i> Garage: %data-garage%</div>";
prop_card += "<div><i class=\"fa fa-shower\"></i> Bath: %data-bath%</div>";
prop_card += "</div>";
prop_card += "<div class=\"card-details-item w-100\"></div>";
prop_card += "<div class=\"card-details-item w-100\">";
prop_card += "<Button onClick=\"%data-click%\" class=\"btn btn-more\">MORE INFO</Button>";
prop_card += "</div></div></div></div></div>";

var card_forms = Array.prototype.slice.call(document.querySelectorAll(".card-form"));
var list = document.getElementById("formDropdownContent");
var property_content = document.getElementById("property-content");
var page_list = document.getElementById("page-list");
var page_index = 0;
var page_count = 0;
var time = document.getElementById("time");
var date = document.getElementById("date");

function getPages(perPageLimit, data) {
  const arr = data.slice();
  const pages = [];

  while (arr.length) {
    pages.push(arr.splice(0, perPageLimit));
  }

  return pages;
}

function getPageContent() {
  var str = "";
  var pages = getPages(6, properties);

  pages[page_index].forEach(function (property) {
    var tmp = prop_card;
    Object.keys(property).forEach(function (k) {
      tmp = tmp.replace("%data-" + k + "%", property[k]);
    });

    var url = property.url ? "location.href='" + property.url + "'" : "javascript:void(null)";
    tmp = tmp.replace("%data-click%", url);

    str += tmp;
  });

  return str;
}

function showPage(index, el, e) {
  if (e) {
    e.preventDefault();
  }

  page_index = index;
  el.innerHTML = getPageContent();
  $(el).hide().fadeIn(1000, renderPageLinks());
  page_list.scrollIntoView();
}

function renderPageLinks() {
  page_list.innerHTML = "";
  var li = document.createElement("li");
  li.className = page_index === 0 ? "page-item disabled" : "page-item";
  var a = document.createElement("a");
  a.className = "page-link";
  a.href = "#";
  a.innerHTML = "<i class=\"fa fa-chevron-left\"></i>";
  a.addEventListener("click", showPage.bind(this, page_index - 1, property_content));
  li.appendChild(a);
  page_list.appendChild(li);

  for (var i = 0; i < page_count; i++) {
    li = document.createElement("li");
    li.className = page_index === i ? "page-item active" : "page-item";
    a = document.createElement("a");
    a.href = "#";
    a.className = "page-link";
    a.innerText = (i + 1).toString();
    a.addEventListener("click", showPage.bind(this, i, property_content));
    li.appendChild(a);
    page_list.appendChild(li);
  }

  li = document.createElement("li");
  li.className = page_index === page_count - 1 ? "page-item disabled" : "page-item";
  var a = document.createElement("a");
  a.className = "page-link";
  a.href = "#";
  a.innerHTML = "<i class=\"fa fa-chevron-right\"></i>";
  a.addEventListener("click", showPage.bind(this, page_index + 1, property_content));
  li.appendChild(a);
  page_list.appendChild(li);
}

if (page_list) {
  var pages = getPages(6, properties);
  page_count = pages.length;

  showPage(0, property_content);
}

function timepicker(el, obj) {
  for (var i = obj.min; i <= obj.max; i++) {
    var hour = i > 12 ? i - 12 : i;
    var ampm = i >= 12 ? "pm" : "am";
    var mins;

    hour = hour.toString().length < 2 ? "&nbsp;" + hour.toString() : hour.toString();

    for (var j = 0; j < 60; j += obj.step) {
      var option = document.createElement("option");
      mins = j % 60;
      mins = mins.toString().length < 2 ? "0" + mins.toString() : mins.toString();
      option.innerHTML = hour + ":" + mins + " " + ampm;
      el.add(option);

      if (i === obj.max) {
        break;
      }
    }
  }
}

function hideForm(form, func) {
  $(form.parentElement).hide(0, func);
}

function showForm(form) {
  window.scrollTo(0, 0);
  $(form.parentElement).fadeIn(1000);
}

card_forms.forEach(function (form, index) {
  var back = form.querySelector('#btnBack');
  var next = form.querySelector('#btnNext');

  if (back) {
    back.addEventListener("click", function () {
      hideForm(form, showForm(card_forms[index - 1]));
    });
  }

  if (next) {
    next.addEventListener("click", function () {
      hideForm(form, showForm(card_forms[index + 1]));
    });
  }

  if (index > 0) {
    form.parentElement.style.display = "none";
  }
});


$(
  $('#navbarToggler').click(function (e) {
    e.preventDefault();
    $('#navbarTogglerContent').slideToggle(1000);
  })
);

$(
  $('#navbarDropdown').click(function (e) {
    e.preventDefault();
    $('#navbarDropdownContent').slideToggle(500);
  })
);

$(
  $(document).click(function (e) {
    // Check if click was triggered on or within #menu_content
    if ($(e.target).closest("#navbarDropdownContent").length > 0) {
      location.href = e.target.href;
      return false;
    }

    // Otherwise
    // trigger your click function
    $('#navbarDropdownContent').slideUp(500);
  })
);

if (date) {
  $(
    $("#date").datepicker({
      minDate: 0, beforeShowDay: function (date) {
        var day = date.getDay();
        return [(day !== 0), ''];
      }
    })
  )
}

if (time) {
  timepicker(time, { min: 9, max: 18, step: 15 });
}

try {
  lightbox.option({ 'wrapAround': true });
}
catch (err) {
}

$(
  $('body').fadeIn(2000)
)