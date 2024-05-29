import fetchUser from "./githubAPI";

(async () => {
    const userData = await fetchUser("tdiprima");
    document.querySelector("h1").innerHTML = JSON.stringify(userData);
})();