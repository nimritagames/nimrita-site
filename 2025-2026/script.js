(function () {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
  });

  const numberFormatter = (value, decimals) =>
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const target = Number(element.dataset.count || "0");
        const decimals = Number(element.dataset.decimals || "0");
        const suffix = element.dataset.suffix || "";
        const duration = 1600;
        const startTime = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;

          element.textContent = numberFormatter(current, decimals) + suffix;

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            element.textContent = numberFormatter(target, decimals) + suffix;
          }
        };

        requestAnimationFrame(tick);
        counterObserver.unobserve(element);
      });
    },
    { threshold: 0.45 }
  );

  document.querySelectorAll("[data-count]").forEach((element) => {
    counterObserver.observe(element);
  });
})();
