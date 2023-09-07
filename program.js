function aqt()
{
    alert("Bank balance dekha h apna");
}
function scrollpage()
{
    var a = window.scrollY;
    if( a>=150)
    {
        obj.classlist.add("nava_fix");
    }
    else
    {
        obj.classlist.remove("nava_fix");
    }
}
