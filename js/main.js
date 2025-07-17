const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.location.hash = event.target.getAttribute('href');
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "#/DMA": "/pages/DMA.html",
    "#/FMT": "/pages/FMT.html",
    "#/TCAO": "/pages/TCAO.html",
    "#/TLRH": "/pages/TLRH.html",
    "#/VRS": "/pages/VRS.html",
};

const handleLocation = async () => {
    const path = window.location.hash || "#/DMA"; // default route
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-container").innerHTML = html;
}

window.addEventListener("hashchange", handleLocation);
window.route = route;

handleLocation();
