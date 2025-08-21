document.addEventListener("DOMContentLoaded", async () => {
  const el = document.getElementById("header-placeholder");
  if (!el) {
    console.error("Не знайдено #header-placeholder");
    return;
  }

  try {
    const res = await fetch("/components/header.html", { cache: "no-store" });
    if (res.ok) {
      el.innerHTML = await res.text();

      initHeaderMenu();
    } else {
      console.error("Не вдалося завантажити header:", res.status);
    }
  } catch (e) {
    console.error("Помилка fetch:", e);
  }
});

function initHeaderMenu() {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const navListRef = document.querySelector(".navigation-list");
  const headerRef = document.querySelector(".header");
  const navigationRef = document.querySelector(".navigation");

  if (!menuBtnRef) {
    console.error("Не знайдено кнопку меню");
    return;
  }

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    navListRef.classList.toggle("is-open");
    headerRef.classList.toggle("is-open");
    navigationRef.classList.toggle("is-open");
  });

  document.querySelectorAll(".navigation-link").forEach((n) =>
    n.addEventListener("click", () => {
      navListRef.classList.remove("is-open");
      menuBtnRef.classList.remove("is-open");
      headerRef.classList.remove("is-open");
      navigationRef.classList.remove("is-open");
    })
  );
}

document.addEventListener("DOMContentLoaded", async () => {
  const el = document.getElementById("footer-placeholder");
  if (!el) {
    console.error("Не знайдено #footer-placeholder");
    return;
  }

  try {
    const res = await fetch("/components/footer.html", { cache: "no-store" });
    if (res.ok) {
      el.innerHTML = await res.text();
    } else {
      console.error("Не вдалося завантажити footer:", res.status);
    }
  } catch (e) {
    console.error("Помилка fetch footer:", e);
  }
});
