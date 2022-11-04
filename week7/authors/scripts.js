let authors = [
    {
        authorURL: "img/tile_andreas_neeser.jpg",
        firstName: 'Andreas',
        lastName: 'Neeser'
    },
    {   
        authorURL: "img/tile_anna_ruchat.jpg",
        firstName: 'Anna',
        lastName: 'Ruchat'
    },
    {   authorURL: "img/tile_arno_camenisch.jpg",
        firstName: 'Arno',
        lastName: 'Camenisch'
    },
    {   
        authorURL: "img/tile_barbara_schibli.jpg",
        firstName: 'Barbara',
        lastName: 'Schibli'
    },
    {
        authorURL: "img/tile_demian_leinhard.jpg",
        firstName: 'Demian',
        lastName: 'Leinhard'
    },
    {
        authorURL: "img/tile_flurina_bader.jpg",
        firstName: 'Flurina',
        lastName: 'Bader'
    },
    {
        authorURL: "img/tile_franco_supino.jpg",
        firstName: 'Franco',
        lastName: 'Supino'
    },
    {
        authorURL: "img/tile_lukas_hartmann.jpg",
        firstName: 'Lukas',
        lastName: 'Hartmann'
    },
    {
        authorURL: "img/tile_marius_popescu.jpg",
        firstName: 'Marius',
        lastName: 'Popescu'
    },
    {
        authorURL: "img/tile_reto_haenny.jpg",
        firstName: 'Reto',
        lastName: 'Haenny'
    },
    {
        authorURL: "img/tile_sandra_kuenzi.jpg",
        firstName: 'Sandra',
        lastName: 'Kuenzi'
    },
    {
        authorURL: "img/tile_simon_libsig.jpg",
        firstName: 'Simon',
        lastName: 'Libsig'
    }
];

let authorImage;


for (let i = 0; i <= authors.length-1; i++) {
    let listAuthor = document.getElementById('list_author');
    let listItem = document.createElement('li');
    
    let container = document.createElement('div')
    let label = document.createElement('p')
    
    
    authorImage = document.createElement('img')
    authorImage.src = authors[i].authorURL;
    
    // ul

    listAuthor.appendChild(listItem);
    listItem.appendChild(authorImage);
    listItem.appendChild(container);

    // name

    let authorName = authors[i].firstName +" "+ authors[i].lastName;
    
    container.appendChild(label)
    label.innerHTML = authorName

}