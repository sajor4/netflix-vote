DBService.readShows().then(res => render(res));

function render(shows){

    const mainList = document.getElementById('main-list');
    mainList.innerHTML = '';
    for (let i = 0; i < shows.length; i++) {

        const show = shows[i];

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('show-card');
        cardDiv.appendChild(createElementWithString('strong', shows.title))

        const addressDiv = document.createElement('div');
        addressDiv.appendChild(createElementWithString('span', shows.author));

        addressDiv.appendChild(createElementWithString('span', ', ' + shows.imageUrl));
        cardDiv.appendChild(addressDiv);

    
    }

    function createElementWithString(elementName,contentString){
        const element = document.createElement(elementName);
        const node = document.createTextNode(contentString);
        element.appendChild(node);
        return element;
    }


}
