document.addEventListener('DOMContentLoaded', function () {
  
  var projects = {
    quotes_generator: {
      href: "https://codepen.io/HlebShautsou/full/JYxLNG",
      img_src: "./img/quotes-gen.jpg",
      img_alt: "Quotes Generator site image"
    },

    pomodoro_timer: {
      href: "https://codepen.io/HlebShautsou/full/NxKJbQ",
      img_src: "./img/pomodo-time.jpg",
      img_alt: "Pomodoro Timer site image"
    },

    calculator: {
      href: "https://codepen.io/HlebShautsou/full/eJddbw/",
      img_src: "./img/calculator.jpg",
      img_alt: "Calculator site image"
    },

    weather_app: {
      href: "https://codepen.io/HlebShautsou/full/qbJKgM/",
      img_src: "./img/weather-app.jpg",
      img_alt: "Weather Application site image"
    },

    francysc: {
      href: "https://glebshaucou.github.io/francysk-skaryna/",
      img_src: "./img/francysc.jpg",
      img_alt: "Francysc Skaryna site image"
    },

    wiki_search: {
      href: "https://codepen.io/HlebShautsou/full/LNYyLe/",
      img_src: "./img/wiki-search.jpeg",
      img_alt: "Wikipedia Search site image"
    },

    twich_tv: {
      href: "https://codepen.io/HlebShautsou/full/yOYdgy",
      img_src: "./img/twitch-tv.jpg",
      img_alt: "Twich TV Status site image"
    },

    placeholder: {
      href: "#",
      img_src: "./img/reconstruction.jpeg",
      img_alt: "Placeholder image"
    }
  };

  var socialIcons = {
    linkedIn: {
      href: "https://by.linkedin.com/in/hleb-shautsou-1726ba109",
      img_src: "./img/social_icons.png",
      img_alt: "Linked In brand image"
    },
    github: {
      href: "https://github.com/GlebShaucou",
      img_src: "./img/social_icons.png",
      img_alt: "GitHub brand image"
    },
    twitter: {
      href: "https://twitter.com/lamsbeg",
      img_src: "./img/social_icons.png",
      img_alt: "Free Code Camp brand image"
    },
    gmail: {
      href: "mailto:shevcov.gleb@gmail.com",
      img_src: "./img/social_icons.png",
      img_alt: "Gmail brand image"
    }  
  };

  var projectImg;
  var projectLink;
  var socialImg;
  var socialLink;
  var project;
  var icon;
  var socialIconDiv;
  var projectsSection = document.getElementById("projects");  
  var socialIconsSection = document.getElementById("socials");

  for(project in projects) {
    projectImg = document.createElement("img");
    projectLink = document.createElement("a");

    projectImg.setAttribute("src", projects[project].img_src);
    projectImg.setAttribute("alt", projects[project].img_alt);
    projectImg.setAttribute("class", "project-img");

    projectLink.setAttribute("href", projects[project].href);
    projectLink.setAttribute("target", "_blank");

    projectLink.appendChild(projectImg);
    projectsSection.appendChild(projectLink);  
  }

  // for(icon in socialIcons) {
  //   socialIconDiv = document.createElement("div");
  //   socialIconLink = document.createElement("a");

  //   socialIconDiv.setAttribute("class", "social-icon " + icon);
  //   socialIconDiv.style.backgroundImage = "url(" + socialIcons[icon].img_src + ")";

  //   socialIconLink.setAttribute("href", socialIcons[icon].href);
  //   socialIconLink.setAttribute("target", "_blank");

  //   socialIconLink.appendChild(socialIconDiv);
  //   socialIconsSection.appendChild(socialIconLink);
  // }

});