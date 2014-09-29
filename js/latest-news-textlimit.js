var maxlength = 75;
$('p#news-contents').text(function (_, text) {

    return $.trim(text).substring(0, maxlength);

});

        
