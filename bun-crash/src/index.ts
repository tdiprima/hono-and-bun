import fetchUser from "./githubAPI";

async function main() {
    const user = await fetchUser("tdiprima");
    console.log(user);
}

main();