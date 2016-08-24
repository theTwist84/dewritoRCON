var myCodeMirror;
jQuery(function() {
    myCodeMirror = CodeMirror.fromTextArea(rconConsole);

    //TODO: Support up arrow, etc
    $("#runCommand").click(function() {
        dewRcon.send(jQuery("#rconCommand").val());
        jQuery("#rconCommand").val("");
    });
    $('.panel-center').on('keydown', '#rconCommand', function(e) {
        var key = e.which;
        switch (key) {
            case 13: // enter
                //alert('Enter key pressed.');
                dewRcon.send(jQuery("#rconCommand").val());
                jQuery("#rconCommand").val("");
                curCommand++;
                break;
            default:
                break;
        }
    });
});
