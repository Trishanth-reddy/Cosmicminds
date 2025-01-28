        // Function to dynamically update the current year in the footer
        function updateCurrentYear() {
            document.getElementById('current-year').textContent = new Date().getFullYear();
        }
        
        // Data for all planets
        const planetsData = {
            mercury: {
                name: "Mercury",
                diameter: "4,880 km (3,032 miles)",
                distance: "57.9 million km (36 million miles)",
                dayLength: "59 Earth days",
                overview: "Mercury, the smallest and innermost planet in our Solar System, is a world of extremes. It zips around the Sun faster than any other planet, completing an orbit in just 88 Earth days. Its surface, heavily cratered and resembling that of the Moon, bears witness to billions of years of bombardment by asteroids and comets.",
                orbit: "Mercury's orbit is the most eccentric (elliptical) of all the planets in our Solar System. This means its distance from the Sun varies significantly throughout its year. Interestingly, Mercury rotates very slowly on its axis. One day-night cycle on Mercury takes about 59 Earth days, while a year (one orbit around the Sun) takes only 88 Earth days! Due to its unique rotation and orbit, the Sun would appear to rise, set briefly, and then rise again from some parts of Mercury's surface. The same happens in reverse at sunset.",
                significance: "Mercury plays a vital role in our understanding of planetary formation and the evolution of the Solar System. Its high density suggests a large metallic core, making up about 85% of the planet's radius. Studying Mercury helps scientists answer questions about the formation of the early Solar System, the composition and structure of terrestrial planets, the effects of solar radiation and space weathering on planetary surfaces, and the geological history of planets with thin or no atmospheres.",
                image: "images/Mercury-planets.jpg", // Ensure the path is correct
                orbitClass: "mercury-orbit",
                planetClass: "mercury"
            },
            venus: {
                name: "Venus",
                diameter: "12,104 km (7,521 miles)",
                distance: "108.2 million km (67.2 million miles)",
                dayLength: "243 Earth days",
                overview: "Venus, the second planet from the Sun, is often called Earth's 'sister planet' due to their similar size and mass. However, Venus is an incredibly hostile world with a thick, toxic atmosphere made up mostly of carbon dioxide and clouds of sulfuric acid. This dense atmosphere traps heat, creating a runaway greenhouse effect that makes Venus the hottest planet in our Solar System.",
                orbit: "Venus has a nearly circular orbit, the least eccentric of all the planets. It rotates very slowly in a retrograde direction (opposite to the direction of most planets), meaning the Sun rises in the west and sets in the east on Venus. A Venusian day (one rotation) is longer than a Venusian year (one orbit around the Sun).",
                significance: "Venus is crucial for understanding the greenhouse effect and its potential consequences. Studying Venus helps scientists model the climate of other planets, including Earth, and provides insights into the evolution of planetary atmospheres. Venus also offers clues about volcanic activity and the internal structure of terrestrial planets.",
                image: "images/Venus-planets.jpg",
                orbitClass: "venus-orbit",
                planetClass: "venus"
            },
            earth: {
                name: "Earth",
                diameter: "12,742 km (7,918 miles)",
                distance: "149.6 million km (93 million miles)",
                dayLength: "24 hours",
                overview: "Earth, the third planet from the Sun, is the only known world to harbor life. It has a dynamic and complex system of interacting physical, chemical, and biological processes. With liquid water on its surface, a diverse range of ecosystems, and a protective atmosphere, Earth is a unique and vibrant planet.",
                orbit: "Earth's orbit around the Sun is nearly circular. The planet's axial tilt of 23.5 degrees causes the seasons. Earth has one natural satellite, the Moon, which plays a significant role in stabilizing Earth's axial tilt and causing tides.",
                significance: "Earth serves as a benchmark for understanding the conditions necessary for life to arise and thrive. Studying Earth's geology, atmosphere, oceans, and biosphere provides crucial knowledge about the evolution of planets and the potential for life elsewhere in the universe. Earth is also a natural laboratory for studying plate tectonics, climate change, and the impact of human activities on a planetary scale.",
                image: "images/eart-planets.jpg",
                orbitClass: "earth-orbit",
                planetClass: "earth"
            },
            mars: {
                name: "Mars",
                diameter: "6,779 km (4,212 miles)",
                distance: "227.9 million km (141.6 million miles)",
                dayLength: "24.6 hours",
                overview: "Mars, the fourth planet from the Sun, is a cold, desert world with a thin atmosphere. It's often called the 'Red Planet' due to the iron oxide (rust) that covers much of its surface. Mars has polar ice caps, vast canyons, and the largest volcano in the Solar System, Olympus Mons.",
                orbit: "Mars has a more elliptical orbit than Earth, leading to significant variations in temperature between its closest and farthest points from the Sun. A Martian year is about 687 Earth days long. Mars has two small moons, Phobos and Deimos.",
                significance: "Mars is a prime target for the search for past or present life beyond Earth. Evidence suggests that Mars may have once had liquid water on its surface, a key ingredient for life. Studying Mars helps scientists understand the evolution of terrestrial planets, the potential for past habitability, and the possibilities for future human exploration and colonization.",
                image: "images/mars-planets.jpg",
                orbitClass: "mars-orbit",
                planetClass: "mars"
            },
            jupiter: {
                name: "Jupiter",
                diameter: "139,820 km (86,881 miles)",
                distance: "778.5 million km (483.8 million miles)",
                dayLength: "9.9 hours",
                overview: "Jupiter, the fifth planet from the Sun, is the largest planet in our Solar System. It's a gas giant, composed mainly of hydrogen and helium. Jupiter has a thick atmosphere with colorful bands of clouds and a Great Red Spot, a giant storm that has raged for centuries.",
                orbit: "Jupiter has a slightly elliptical orbit and takes about 12 Earth years to complete one orbit around the Sun. Despite its massive size, Jupiter rotates very quickly, with a day lasting less than 10 hours. Jupiter has at least 79 known moons, including the four large Galilean moons: Io, Europa, Ganymede, and Callisto.",
                significance: "Jupiter plays a crucial role in the stability of the Solar System. Its immense gravity helps to deflect comets and asteroids away from the inner planets. Studying Jupiter's atmosphere, magnetic field, and moons provides insights into the formation of gas giants, the behavior of matter under extreme conditions, and the potential for life in icy moons with subsurface oceans.",
                image: "images/jupiter-space.jpg",
                orbitClass: "jupiter-orbit",
                planetClass: "jupiter"
            },
            saturn: {
                name: "Saturn",
                diameter: "116,460 km (72,367 miles)",
                distance: "1.429 billion km (887.9 million miles)",
                dayLength: "10.7 hours",
                overview: "Saturn, the sixth planet from the Sun, is known for its spectacular ring system. Like Jupiter, it's a gas giant composed mainly of hydrogen and helium. Saturn's rings are made up of ice particles, rocky debris, and dust.",
                orbit: "Saturn's orbit is more elliptical than Jupiter's, and it takes about 29 Earth years to complete one orbit around the Sun. Saturn has a rapid rotation, with a day lasting just over 10 hours. It has at least 82 known moons, including Titan, the second-largest moon in the Solar System and the only one with a dense atmosphere.",
                significance: "Saturn's rings provide a unique laboratory for studying the dynamics of particles in a gravitational field. Studying Saturn's atmosphere, magnetic field, and moons helps scientists understand the formation and evolution of planetary systems, the behavior of ring systems, and the potential for life on moons with subsurface oceans and organic molecules, like Titan.",
                image: "images/Saturn-planets.jpg",
                orbitClass: "saturn-orbit",
                planetClass: "saturn"
            },
            uranus: {
                name: "Uranus",
                diameter: "50,724 km (31,518 miles)",
                distance: "2.871 billion km (1.784 billion miles)",
                dayLength: "17.2 hours",
                overview: "Uranus, the seventh planet from the Sun, is an ice giant with a blue-green color due to the methane in its atmosphere. It's unique in that it rotates on its side, with its axis tilted almost 98 degrees from its orbital plane.",
                orbit: "Uranus has a relatively circular orbit and takes about 84 Earth years to complete one orbit around the Sun. Its extreme axial tilt causes unusual seasons, with each pole experiencing 42 years of continuous daylight followed by 42 years of darkness. Uranus has 27 known moons and a faint ring system.",
                significance: "Uranus, along with Neptune, provides insights into the formation and evolution of ice giants, a type of planet common in other planetary systems but not present in the inner Solar System. Studying Uranus's atmosphere, magnetic field, and moons helps scientists understand the behavior of planets with extreme axial tilts and the composition of ice giants.",
                image: "images/Uranus-planets.jpg",
                orbitClass: "uranus-orbit",
                planetClass: "uranus"
            },
            neptune: {
                name: "Neptune",
                diameter: "49,244 km (30,599 miles)",
                distance: "4.498 billion km (2.795 billion miles)",
                dayLength: "16.1 hours",
                overview: "Neptune, the eighth and farthest planet from the Sun, is another ice giant similar in composition to Uranus. It has a vibrant blue color due to methane in its atmosphere and the strongest winds of any planet in the Solar System.",
                orbit: "Neptune has a nearly circular orbit and takes about 165 Earth years to complete one orbit around the Sun. It has a relatively rapid rotation, with a day lasting about 16 hours. Neptune has 14 known moons, the largest of which is Triton, and a faint ring system.",
                significance: "Neptune is important for understanding the outer reaches of the Solar System and the formation of ice giants. Studying its atmosphere, magnetic field, and moons, particularly Triton, which is likely a captured Kuiper Belt object, provides insights into the early Solar System and the dynamics of icy bodies.",
                image: "images/neputune-planet.jpg",
                orbitClass: "neptune-orbit",
                planetClass: "neptune"
            }
        };
        
        // Function to create planet content HTML
        function createPlanetContent(planetData) {
            return `
                <h2 class="section-title mb-4">${planetData.name}</h2>
                <div class="row">
                    <div class="col-md-6">
                        <img src="${planetData.image}" alt="${planetData.name}" class="img-fluid planet-image"> 
                    </div>
                    <div class="col-md-6">
                        <p>${planetData.overview}</p>
                    </div>
                </div>
                <section id="characteristics" class="container mb-5">
                    <h3 class="section-title mb-4">Key Characteristics</h3>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Diameter</h5>
                                    <p class="card-text text-white">${planetData.diameter}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Distance from Sun</h5>
                                    <p class="card-text text-white">${planetData.distance}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">Day Length</h5>
                                    <p class="card-text text-white">${planetData.dayLength}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="orbit" class="container mb-4 mt-4 ">
                    <h3 class="section-title mb-4">Orbit and Rotation</h3>
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <p>${planetData.orbit}</p>
                        </div>
                        <div class="col-md-6">
                            <div id="orbit-animation" class="orbit-animation mt-5 mb-5">
                                <div class="sun"></div>
                                <div class="planet-orbit ${planetData.orbitClass}">
                                    <div class="planet ${planetData.planetClass}"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="significance" class="container mb-5">
                    <h3 class="section-title mb-4">Significance in the Solar System</h3>
                    <div class="row">
                        <div class="col-12">
                            <p>${planetData.significance}</p>
                        </div>
                    </div>
                </section>
            `;
        }
        
        // Function to load planet content
        function loadPlanetContent(planet) {
            const planetContentSection = document.getElementById('planet-content');
            const planetData = planetsData[planet];
        
            if (planetData) {
                planetContentSection.innerHTML = createPlanetContent(planetData);
            } else {
                planetContentSection.innerHTML = "<p>Select a planet to learn more!</p>";
            }
        }
        
        // Event listener for navigation links
        document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
            navLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    // event.preventDefault();
        
                    // Update active link
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    this.classList.add('active');
        
                    // Load content for selected planet
                    loadPlanetContent(this.dataset.planet);
                });
            });
        
            // Load default content (Mercury)
            loadPlanetContent('mercury');
        
            // Update footer year
            updateCurrentYear();
        });