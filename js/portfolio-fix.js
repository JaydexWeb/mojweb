var elements = document.querySelectorAll(".portfolio-item");
var categories = document.querySelectorAll(".portfolio-cat");
var blocks = document.querySelectorAll(".itmes-block");

function animate(el) {
  el.classList.add("move");
}

var myObserver = new IntersectionObserver(
  function (entries, observer) {
    for (var i = 0; i < entries.length; i++) {
      if (!entries[i].isIntersecting) {
        return;
      }
      animate(entries[i].target);
      observer.unobserve(entries[i].target);
    }
  },
  {
    rootMargin: "0px 0px -300px  0px",
  }
);

for (var i = 0; i < elements.length; i++) {
  myObserver.observe(elements[i]);
}

for (var i = 0; i < categories.length; i++) {
  categories[i].addEventListener("click", () => {
    for (var i = 0; i < elements.length; i++) {
      myObserver.unobserve(elements[i]);
      elements[i].classList.remove("move");
      myObserver.observe(elements[i]);
    }
  });
}
