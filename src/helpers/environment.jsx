let APIURL = "";

switch (window.location.hostname) {
    case 'localhost' || "127.0.0.1":
        APIURL = "http://localhost:8080/";
        break;
    case "climbfinder.herokuapp.com":
        APIURL = "https://climbfinder.herokuapp.com/";
}

export default APIURL;