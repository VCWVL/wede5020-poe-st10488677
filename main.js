document.addEventListener("DOMContentLoaded", () => {
    // Minimal modal CSS so the created .modal works visually
    const style = document.createElement("style");
    style.textContent = `
        .modal { position: fixed; inset: 0; display: none; align-items: center; justify-content: center; background: rgba(0,0,0,0.6); z-index: 9999; }
        .modal .modal-content { background: #fff; padding: 20px; border-radius: 8px; max-width: 90%; max-height: 90%; overflow: auto; box-shadow: 0 8px 24px rgba(0,0,0,0.3);}
        .modal .modal-content button { margin: 8px 6px 0 0; padding: 8px 12px; cursor: pointer; }
        .product img { max-width: 100%; display: block; }
    `;
    document.head.appendChild(style);

    // Modal Login Popup
    const loginModal = document.createElement("div");
    loginModal.classList.add("modal");
    loginModal.innerHTML = `
        <div class="modal-content" role="dialog" aria-modal="true">
            <h2>Welcome, Player!</h2>
            <p>Please log in or sign up to continue your PlayStation experience.</p>
            <button id="loginBtn">Log In</button>
            <button id="signupBtn">Sign Up</button>
        </div>
    `;
    document.body.appendChild(loginModal);

    // Show modal when adding to cart (simulate)
    function showLoginPrompt() {
        loginModal.style.display = "flex";
    }
    const cartIcon = document.getElementById('cartIcon');
const cartContainer = document.getElementById('cartContainer');
const closeCart = document.getElementById('closeCart');

cartIcon.addEventListener('click', () => {
  cartContainer.classList.add('active'); // open cart
});

closeCart.addEventListener('click', () => {
  cartContainer.classList.remove('active'); // close cart
});
const cart = document.querySelector('#cartIcon');



    // Close modal when clicking backdrop (but not when clicking inside content)
    loginModal.addEventListener("click", (e) => {
        if (e.target === loginModal) loginModal.style.display = "none";
    });

    // Hook up login/signup buttons
    loginModal.addEventListener("click", (e) => {
        if (e.target.id === "loginBtn") {
            // TODO: replace with real auth flow
            console.log("Log In clicked");
            loginModal.style.display = "none";
        } else if (e.target.id === "signupBtn") {
            console.log("Sign Up clicked");
            loginModal.style.display = "none";
        }
    });

    // Smooth Scroll for Navigation (only if target exists)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (!href || href === "#") return; // allow anchors targeting top or placeholders
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Interactive Gallery Lightbox
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `
                <div class="modal-content">
                    <img src="${img.src}" alt="${img.alt || ''}" style="width:100%; border-radius:10px;">
                    <p style="margin-top:8px;">${img.alt || ''}</p>
                </div>
            `;
            document.body.appendChild(modal);
            // show
            modal.style.display = "flex";
            // close on backdrop click
            modal.addEventListener("click", (e) => {
                if (e.target === modal) modal.remove();
            });
        });
    });
});

if (!input.value.trim()) {
  valid = false;
  input.classList.add("invalid");
  setTimeout(() => input.classList.remove("invalid"), 500);
} else {
  input.style.border = "1px solid #444";
}
