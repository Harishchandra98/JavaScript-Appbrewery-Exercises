var beerBottles = 99;

while (beerBottles>=0) {
    console.log( beerBottles + " bottles of beer on the wall, " + beerBottles + " bottles of beer.");
    beerBottles = beerBottles-1;

    if (beerBottles===0) {
        beerBottles = "no more";
        console.log( beerBottles + " bottles of beer on the wall, " + beerBottles + " bottles of beer.");
        console.log( "Go to the store and buy some more, 99 bottles of beers on the wall.");
        break;
    }
    console.log( "Take one down and pass it around, " + beerBottles + " bottles of beers on the wall.");
    
    
}