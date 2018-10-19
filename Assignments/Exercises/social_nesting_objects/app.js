

var friendsWithGames = {
    name: 'Bob',
    age: 31,
    favoriteGames: ['Call of Duty', 'Modern Warefare'],
    numberOneGame: function() {
        console.log(this.favoriteGames);
    },
    gamerFriends: [
        {
            name: 'Sarah',
            age: 27,
            favoriteGames: ['Pocket Tanks', 'Angry Birds'],
            numberOneGame: function() {
                console.log(this.favoriteGames);
            },
            gamerFriends: [
                {
                    name: 'John',
                    age: 29,
                    favoriteGames: ['pinball', 'Space Invaders'],
                }, {
                    name: 'Bill',
                    age: 43,
                    favoriteGames: ['Centipede', 'Pacman'],
                },
            ]
        }, {
            name: 'Sam',
            age: 49,
            favoriteGames: ['Big Game Hunt', 'Trophy Elk'],
            gamerFriends: [
                {
                    name: 'Danny',
                    age: 41,
                    favoriteGames: ['GTA',],
                    gamerFriends: [
                        {
                            name: 'Freddy',
                            age: 18,
                            favoriteGames: ['BrickBreaker', 'Bejewled'],
                            gamerFriends: [
                                name: 'Jane',
                                age: 22,
                                favoriteGames: ['Hello Kitty Adventures', 'Pokemon Go',],
                            ]
                        }, {
                            name: 'Hannah',
                            age: 36,
                            favoriteGames: ['Angry Birds', 'Age of Empires', 'Monopoly',],
                        },
                    ]
                },
        
            ]
        },
    ]
}

console.log(friendsWithGames.numberOneGame());