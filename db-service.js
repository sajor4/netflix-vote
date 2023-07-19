class DBService {

    static BASE_URL = "https://64b512d7f3dbab5a95c6a555.mockapi.io/"

    // constructor(){}

    /// POST (C)
    static createShow(newShow) {
        const url = DBService.BASE_URL + "shows";

        fetch(url, {method: 'post', 
                    body: JSON.stringify(newShow), 
                    headers: {'content-type':'application/json'}})
                    .then(resp => resp.json())
                    .then(res => console.log('post', res));

    }

    static readShows() {
        const url = DBService.BASE_URL + "shows";

        return fetch(url, { method: "get" })
            .then((resp) => resp.json())

    }

}