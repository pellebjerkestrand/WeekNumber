(function(global){
    var getWeekNumber = function(){
        var time,
            date = new Date();

        // Find Thursday of this week starting on Monday
        date.setDate(date.getDate() + 4 - (date.getDay() || 7));

        time = date.getTime();
        date.setMonth(0); // Compare with Jan 1
        date.setDate(1);
        return Math.floor(Math.round((time - date) / 86400000) / 7) + 1;
    };

    var setWeekNumber = function(number){
        global.document.querySelector('[data-week]').textContent = number;
    };

    setWeekNumber(getWeekNumber());

    global.setInterval(function(){
        setWeekNumber(getWeekNumber());
    }, 10000);
})(this);