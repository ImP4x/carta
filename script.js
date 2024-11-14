$('#contenedor').on('click', function() {
    var C = $('#contenedor'),
        A = $('#abrir'),
        E = $('#carta'),
        F = $('#carta hgroup h2'),
        P = $('#perspectiva');

    // giro y abertura
    C.css({
        'transition': 'all 1s',
        'transform': 'rotateY(180deg)'
    });
    A.css({
        'transition': 'all 1s .5s',
        'transform': 'rotateX(180deg)',
        'z-index': '0'
    });

    // Animación de carta abierta
    setTimeout(function() {
        E.css({
            'transition': 'all .5s 1s',
            'top': '-550px',
            'height': '500px'
        });
        P.css({
            'transition': 'all 1s',
            'transform': 'translateY(450px)'
        });
        F.css({
            'transition': 'all 1s',
            'transform': 'rotateZ(180deg)'
        });
    }, 1000); // Espera a que se complete la primera animación

});

// Cerrado de la carta si se vuelve a hacer clic
$('#contenedor').on('dblclick', function() {
    var C = $('#contenedor'),
        A = $('#abrir'),
        E = $('#carta'),
        F = $('#carta hgroup h2'),
        P = $('#perspectiva');

    C.css({
        'transition': 'all 1s .5s',
        'transform': 'rotateY(0deg)'
    });
    A.css({
        'transition': 'all 1s',
        'transform': 'rotateX(0deg)',
        'z-index': '10'
    });

    E.css({
        'transition': 'all .5s',
        'top': '3px',
        'height': '200px'
    });
    P.css({
        'transform': 'translateY(0px)'
    });
    F.css({
        'transform': 'rotateZ(0deg)'
    });
});