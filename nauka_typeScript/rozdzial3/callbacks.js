function letMeKnowWthenComplete(size, callback){
    var reducer = 0;
    for (var i = 1; i < size; i++){
        reducer = Math.sin(reducer * i);
    }
    callback();
}

letMeKnowWthenComplete(100000000, function(){
    console.log('Super, skonczylem.');
});