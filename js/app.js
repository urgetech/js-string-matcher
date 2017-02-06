var myComparisonObject = 
{
    getStringMatches: function(firstString, secondString)
    {
        this.searchParams = this.parseSearchParams(firstString);
        this.matches = 0;

        var currentParam = '';
        for (var index in this.searchParams)
        {
            currentParam = this.searchParams[index];
            if (secondString.search(currentParam) != -1) // Error: secondString.search is looking for CHARACTER matches not FIELD matches
            {
                this.matches++;
            }
        }
        return this.matches;
    },
    parseSearchParams: function(queryString)
    {
        return queryString.split('/');
    },
    compare: function(a , b)
    {
        this.count = this.getStringMatches(a, b)
        return this.count/(b.length + a.length); // Error: this.count is in FIELDS and b.length is in CHARACTERS
    }
};

var a = 'term/course';
var b = 'term/course';

console.log(myComparisonObject.compare(a,b));
