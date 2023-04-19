import { useEffect } from "react";

export const useObserverLoader = () => {
  useEffect(() => {
    let options = {
      root: null,
      rootMargib: "5px",
      threshold: 0.5,
    };

    let callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log("find", entry);
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);

    let targets = document.querySelectorAll(".anim");
    targets.forEach((target) => {
      observer.observe(target);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
