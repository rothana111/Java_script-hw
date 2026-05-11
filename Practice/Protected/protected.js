function getCookie(name){
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length);
        }
    }
    return null;
}

function deleteCookie(name){
    document.cookie = name + '=; Max-Age=-99999999; path=/;';
}

function checkCookie(){
    const username = getCookie("username");
    const sessionId = getCookie("session_token");
    const nonExistent = getCookie("non_existent_cookie");

    console.log(username);
    console.log(sessionId);
    console.log(nonExistent);
}

window.onload = function() {
    const username = getCookie('username');
    const sessionToken = getCookie('session_token');

    if (username && sessionToken){
        document.getElementById('welcomeMessage').textContent =
            'Welcome, ' + username + '!';
    } else {
        window.location.href = '../Login/login.html';
    }
};

function logout(){
    deleteCookie('username');
    deleteCookie('session_token');
    window.location.href = '../Login/login.html';
}