/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        const isOpen =
            mobileMenu.classList.contains("active");

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });


    /* Close mobile menu after clicking a link */

    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        });

    });


    /* Close menu when clicking outside */

    document.addEventListener("click", event => {

        const clickedInsideMenu =
            mobileMenu.contains(event.target);

        const clickedButton =
            menuButton.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedButton &&
            mobileMenu.classList.contains("active")
        ) {

            mobileMenu.classList.remove("active");

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );

const updateActiveNavigation = () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

};

window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);

updateActiveNavigation();


/* =========================================================
   BUTTON EFFECT
   ========================================================= */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transform =
                "translateY(-2px)";

        }
    );

    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "";

        }
    );

});


/* =========================================================
   PREVENT IMAGE DRAGGING
   ========================================================= */

document
    .querySelectorAll("img")
    .forEach(img => {

        img.addEventListener(
            "dragstart",
            event => {

                event.preventDefault();

            }
        );

    });


/* =========================================================
   CLOSE MOBILE MENU ON RESIZE
   ========================================================= */

window.addEventListener("resize", () => {

    if (
        window.innerWidth > 950 &&
        mobileMenu
    ) {

        mobileMenu.classList.remove("active");

        if (menuButton) {

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

});
