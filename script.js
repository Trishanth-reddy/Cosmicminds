                // Firebase initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA73DZ3tBZPPf9b7Pj5bYC_mx_pn6DusEc",
    authDomain: "cosmicmi.firebaseapp.com",
    projectId: "cosmicmi",
    storageBucket: "cosmicmi.firebasestorage.app",
    messagingSenderId: "198734831887",
    appId: "1:198734831887:web:d8fd950b184a7b8b5bde7a",
    measurementId: "G-Z2EF7FZMR2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Sign In
window.googleSignIn = async function() {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("Signed in:", result.user);
    } catch (error) {
        console.error(error);
    }
};
                // Utility function for DOM manipulation
                const select = selector => document.querySelector(selector);
                const selectAll = selector => document.querySelectorAll(selector);
                        // Create stars background
                        function createStars() {
                            const container = select('#stars-container');
                            const fragment = document.createDocumentFragment();
                            const starCount = 200;
                            
                            for (let i = 0; i < starCount; i++) {
                                const star = document.createElement('div');
                                star.className = 'star';
                                
                        // Random positioning and animation
                        const x = Math.random() * 100;
                        const y = Math.random() * 100;
                        const size = Math.random() * 2 + 0.5;
                        const duration = 3 + Math.random() * 4;
                        
                        star.style.cssText = `
                            left: ${x}%;
                            top: ${y}%;
                            width: ${size}px;
                            height: ${size}px;
                            animation-duration: ${duration}s;
                            position: absolute;
                        `;
                        
                        fragment.appendChild(star);
                    }
                    
                    container.appendChild(fragment);
                }
                const modal = document.getElementById('signupModal');
                const body = document.body;
                
                modal.addEventListener('show.bs.modal', () => {
                    body.style.overflow = 'hidden';  // Disable scrolling
                });
                
                modal.addEventListener('hidden.bs.modal', () => {
                    body.style.overflow = '';  // Enable scrolling
                });  
                // Navbar scroll behavior
                function handleNavbarScroll() {
                    let lastScroll = 0;
                    const navbar = document.querySelector('.navbar');
                    const padding = document.querySelector('body');
                
                    window.addEventListener('scroll', () => {
                        const currentScroll = window.pageYOffset;
                        if (currentScroll > lastScroll && currentScroll > 80) {
                            navbar.classList.add('hidden');
                            padding.style.paddingTop = "0";
                        } else {
                            navbar.classList.remove('hidden');
                            padding.style.paddingTop = "56px"; // Adjust based on navbar height
                        }
                        lastScroll = currentScroll;
                    });
                }
                
                // Smooth scroll behavior
                function initSmoothScroll() {
                    selectAll('a[href^="#"]').forEach(anchor => {
                        anchor.addEventListener('click', function(e) {
                            e.preventDefault();
                            const target = select(this.getAttribute('href'));
                            if (target) {
                                target.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }
                        });
                    });
                }

                // Initialize
                document.addEventListener('DOMContentLoaded', () => {
                    createStars();
                    handleNavbarScroll();
                    initSmoothScroll();
                    select('.hero-content').classList.add('visible');
                });



