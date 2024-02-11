$(document).ready(function(){
   /*  Padão JS de add evento
    document.querySelector('header button').addEventListener('click',function(){})
    */

    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit',function(e){
        e.preventDefault()
        const fontImg = $('#fontImg').val()
        const novoItem = $('<li style = "display: none"></li>')
        $(`<img src = "${fontImg}"/>`).appendTo(novoItem)
        $(`<div class ="overlay-img-link"> 
            <a href = "${fontImg}" target ="_black">
                Ver imagem do tamanho real
            </a>
        </div>`).appendTo(novoItem)

        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(2000)
        $('#fontImg').val('')
    })


})