$(window).load(function () {
    $(".exlogo").on("click", function(){
       $('.popup').show();
    });
    $('.popup').on("click", function(){
        $('.popup').hide();
    });s
});

/*

top.frameName.document.write('<APPLET WIDTH=100
HEIGHT=100
NAME="appletname"
CODE="appletname.class"
</APPLET>');
Here frameName indicates the frame where you want the applet to run.
You can also run the applet on a new window as follows:
Inside the function:
var win=window.open("","","location=0,menubar=0,resizable=0,toolbar=0,status=0,height=150,width=500");
win.document.writeln('<APPLET WIDTH=100
HEIGHT=100
NAME="appletname"
CODE="appletname.class"
</APPLET>');

*/
