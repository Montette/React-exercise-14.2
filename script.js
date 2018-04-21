//var element = React.createElement('div', {}, 'Hello world!');


//var element =
//    React.createElement('div', {},
//        React.createElement('h1', {}, 'Lista Filmów'),
//        React.createElement('ul', {},
//            React.createElement('li', {},
//                React.createElement('h2', {}, 'Harry Potter'),
//                React.createElement('p', {}, 'Film o czarodzieju')
//            ),
//            React.createElement('li', {},
//                React.createElement('h2', {}, 'Król Lew'),
//                React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
//            )
//       )
//   );

var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        img: 'img/harry.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'img/lion.jpg'
    },
    {
        id: 3,
        title: 'Ojciec Chrzestny',
        desc: 'Film o rodzinie mafijnej',
        img: 'img/dad.jpg'
    },
    {
        id: 4,
        title: 'Lot nad kukułczym gniazdem',
        desc: 'Film o pacjencie szpitala psychiatrycznego',
        img: 'img/cuckoo.jpg'
    },
    {
        id: 5,
        title: 'Milczenie Owiec',
        desc: 'Film o seryjnym mordercy',
        img: 'img/silence.jpg'
        
    }
    
];

var moviesElement = movies.map(function (movie) {
return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img})
    );
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),               
        React.createElement('ul', {}, moviesElement)
    );


ReactDOM.render(element, document.getElementById('app'));
