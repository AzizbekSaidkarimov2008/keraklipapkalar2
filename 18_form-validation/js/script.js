$(document).ready(function () {
    var $inp = $('input')
    var $form = $('form')


    function form(e){
        e.preventDefault()
        if($inp===''){
            $inp.attr('error')
        }
    }
});
