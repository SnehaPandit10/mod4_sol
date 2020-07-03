var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var i=0;
var l=names.length;
for( i=0;i<l;i++)
{
    var n=names[i];
    var s=n.charAt(0);
    if(s!='J' && s!='j')
    {
        speakk(n);

    }
    else{
        speak(n);
    }

}