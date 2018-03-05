// pasted by Snowyy
 
$(document).ready(function() {
    var plinks = [
        {
            name: 'MZP',
            plink: 'https://www.youtube.com/channel/UCsRH18F4le8J6zKJSaHd3rA'
        },
        {
            name: 'Olzy',
            plink: 'https://www.youtube.com/channel/UCsRH18F4le8J6zKJSaHd3rA'
        },
    {
            name: 'Visirys',
            plink: 'https://www.youtube.com/channel/UCsRH18F4le8J6zKJSaHd3rA'
        },
        {
            name: 'Tamoyi',
            plink: 'https://www.youtube.com/channel/UCsRH18F4le8J6zKJSaHd3rA'
        },
        {
            name: 'Silverbadger',
            plink: 'https://www.youtube.com/channel/UCsRH18F4le8J6zKJSaHd3rA'
    },
        {
            name: 'Winy',
            plink: 'https://www.youtube.com/channel/UCsRH18F4le8J6zKJSaHd3rA'
    },
        {
            name: 'Yorshka',
            plink: 'https://www.youtube.com/channel/UCsRH18F4le8J6zKJSaHd3rA'
    },
 
 
 
];
 
 
    for(var i in plinks) {
        var plink = plinks[i];
 
        $('#marquee').append('<a href="' + plink.plink + '">' + plink.name + '</a>');
 
        var plink = $('#marquee').children('a').last();
 
        if(i != plinks.length - 1) {
            $('#marquee').append(' · ');
        }
    }
 
    $('#marquee').marquee({
        duration: 15000,
        gap:3,
        delayBeforeStart: 1000,
        direction: 'left',
        duplicated: true
    });
});