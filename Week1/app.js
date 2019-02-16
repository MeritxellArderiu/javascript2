'use strict';

{   
    const bookCollection = [
    // Replace with your own book titles
        'philosophers_stone' , 
        'chamber_secrets' , 
        'prisoner_of_azkaban' , 
        'goblet_og_fire' , 
        'order_of_the_phoenix' , 
        'half_blood_prince' ,    
        'deathly_hallows' ,  
        'fantastic_beasts' ,
        'quidditch_through_the_ages' , 
        'crimes_of_grindelwald'
    ];

  // Replace with your own code
  console.log(bookCollection);

    const bookInfo = {
        philosophers_stone: {
            title: 'The Philosophers Stone',
            language: 'English',
            year: '1997'
        },      
        chamber_secrets: {
            title: 'The Chamber of Secrets',
            language: 'English',
            year: '1998'
        },
        prisoner_of_azkaban: {
            title: 'The Prisoner of Azkaban',
            language: 'English',
            year: '1999'
        },
        goblet_of_fire: {
            title: 'The Goblet of Fire',
            language: 'English',
            year: '1999'
        },
        order_of_phoenix: {
            title: 'The Order of the Phoenix',
            language: 'English',
            year: '2000'
        },
        half_blood_prince: {
            title: 'The Half-blood Prince',
            language: 'English',
            year: '2003'
        },
        death_hallows: {
            title: 'The Deathly Hallows',
            language: 'English',
            year: '2005'
        },
        fantastic_beasts: {
            title: 'Fantastic Beasts and where to find them',
            language: 'English',
            year: '2001'
        },
        quidditch_through_the_ages: {
            title: 'Quidditch through the ages',
            language: 'English',
            year: '2001'
        },
        crimes_of_grindelwald: {
            title: 'The Crimes of Grindelwald',
            language: 'English',
            year: '2018'
        }
    };

    const bookCover = {
        philosophers_stone: 'images/philosophers_stone.jpg',
        chamber_secrets: 'images/chamber_of_secrets.jpg',
        prisoner_of_azkaban: 'images/prisoner_azkaban',
        goblet_og_fire: 'images/goblet_fire.jpg',
        order_of_the_phoenix:'images/goblet_fire.jpg',
        half_blood_prince:'images/half_blood_prince.jpg',
        deathly_hallows: 'images/deathly_hallows.jpg',
        fantastic_beasts: 'images/gfantastic_beasts.jpg',
        quidditch_through_the_ages: 'images/quidditch.jpg',
        crimes_of_grindelwald: 'images/crimes_grindelwald.jpg',
    };
    
    let newUl = document.createElement ('ul');
    document.getElementById("bookList").appendChild (newUl);

    bookCollection.forEach(function(book){
        let newLi = document.createElement('li');
        newLi.innerHTML += book;
        newUl.appendChild(newLi);

        let bookCollection = document.createElement ('h2');
        newUl.appendChild(bookCollection);
        bookCollection.innerHTML += (Object.getOwnPropertyNames(bookCollection));
    });
    
//////////////////////

    /*
    function displayBookInfo() {
    let container = document.createElement('div');
    container.setAttribute('class', 'container');
    for (let key in bookInfo) {
        document.body.appendChild(container);
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'main-div');
        let bookTitle = document.createElement('ul');
        let myHeader = document.createElement('h2');
        bookTitle.appendChild(myHeader);
        newDiv.appendChild(bookTitle);
        container.appendChild(newDiv);
        myHeader.innerHTML = bookInfo[key].title;
        let bookPicture = document.createElement('img');
        bookPicture.setAttribute('src', bookCover[key]);
        newDiv.appendChild(bookPicture);
        bookPicture.setAttribute('class', 'bookImage');
        let bookLanguage = document.createElement('li');
        bookTitle.appendChild(bookLanguage);
        bookLanguage.innerHTML = 'Language: ' + bookInfo[key].language;
        let bookYear = document.createElement('li');
        bookTitle.appendChild(bookYear);
        bookYear.innerHTML = 'Publication year: ' + bookInfo[key].year;
        }
    }*/
}