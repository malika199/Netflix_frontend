export default {
    createSession(token, body) {
        return fetch("http://localhost:3131/netflix/checkout/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization":token
            },
            body: JSON.stringify(body),
        }).then((res) => res.json())
    }
}