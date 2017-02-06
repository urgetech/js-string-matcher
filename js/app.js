function getStringMatches (firstString, secondString){
    this.searchParams = parseSearchParams(firstString);
    this.matches = 0;

    var currentParam = '';
    for (var index in searchParams){
        currentParam = searchParams[index];
        if ( secondString.search(currentParam) != -1 ){
            this.matches ++;
        }
    }
    return this.matches;
}

function parseSearchParams(queryString){
     return queryString.split('/');
}

function compare(a , b) {
    this.count = getStringMatches (a, b)
    return this.count/(b.length + a.length);
}

var a = 'term/course';
var b = 'term/course/';

console.log(compare(a,b));