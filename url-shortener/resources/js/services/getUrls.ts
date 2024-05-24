export function getUrls() {
    return fetch("http://localhost:8000/urls")
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}
