const url = "https://jsonplaceholder.typicode.com/posts";
const request = new XMLHttpRequest();
request.open("GET", url);
request.addEventListener("load", () => {
    request.statusText
})
request.send();

request.addEventListener("readystatechange", () => {
    if (request.readyState === 2) {
        console.log("headers received status = ", request.status, request.statusText);
    }
    if (request.readyState === 4) {
        console.log("requested finished = ", request.status);
        if (request.status >= 200 && request.status < 300) {
            console.log("success response text length = ", request.responseTex);
            try {
                const data = JSON.parse(request.responseText);
                console.log("parsed json first item", data[0]);
                console.log(("total posts", data.length));
            } catch {
                console.log("response wasn't valid json");
            }
        } else {
            console.log("request failed");
        }
    }

})