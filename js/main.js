(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {

        $('.nombre-sitio').lettering();
        var map = L.map('mapa').setView([-33.445529, -70.656338], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-33.445529, -70.656338]).addTo(map)
            .bindPopup('AtomDev<br> Disponibles')
            .openPopup()
            .bindTooltip('Contáctenos +56993611880')
            .openTooltip();


        //Campos datos usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        //Campos pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');


        //Botones y divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('botonRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma_total = document.getElementById('suma-total');


        //Etiquetas
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');



        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);

        email.addEventListener('blur', validarMail)

        function validarCampos() {
            if (this.value == '') {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "este campo es obligatorio";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            } else {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc'
            }
        }

        function validarMail() {
            if (this.value.indexOf("@") > -1) {
                errorDiv.style.display = 'none';
                errorDiv.style.border = '1px solid red';
            } else {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "formato de correo incorrecto";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }
        }

        function calcularMontos(event) {
            event.preventDefault();
            if (regalo.value === '') {
                alert("Debes elegir un regalo");
                regalo.focus();
            } else {
                var boletosDia = parseInt(pase_dia.value, 10) || 0;
                var boletos2Dias = parseInt(pase_dosdias.value, 10) || 0;
                var boletoCompleto = parseInt(pase_completo.value, 10) || 0;
                var cantCamisas = parseInt(camisas.value, 10) || 0;
                var cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);


                var listaProductos = [];


                if (boletosDia >= 1) {
                    listaProductos.push(boletosDia + ' Pases por día');
                }
                if (boletos2Dias >= 1) {
                    listaProductos.push(boletos2Dias + ' Pases por 2 días');
                }
                if (boletoCompleto >= 1) {
                    listaProductos.push(boletoCompleto + ' Pases Completos');
                }
                if (cantCamisas >= 1) {
                    listaProductos.push(cantCamisas + ' Camisas');
                }
                if (cantEtiquetas >= 1) {
                    listaProductos.push(cantEtiquetas + ' Etiquetas');
                }
                lista_productos.style.display = "block"
                lista_productos.innerHTML = '';
                for (var i = 0; i < listaProductos.length; i++) {
                    lista_productos.innerHTML += listaProductos[i] + '<br/>';
                }
                suma_total.innerHTML = "$ " + totalPagar.toFixed(2);

            }
        }




        function mostrarDias() {
            var boletosDia = parseInt(pase_dia.value, 10) || 0;
            var boletos2Dias = parseInt(pase_dosdias.value, 10) || 0;
            var boletoCompleto = parseInt(pase_completo.value, 10) || 0;

            var diasElegidos = [];

            if (boletosDia > 0) {
                diasElegidos.push('viernes');
                console.log(diasElegidos);
            }
            if (boletos2Dias > 0) {
                diasElegidos.push('viernes', 'sabado');
                console.log(diasElegidos);

            }
            if (boletoCompleto > 0) {
                diasElegidos.push('viernes', 'sabado', 'domingo');
                console.log(diasElegidos);

            }
            for (var i = 0; i < diasElegidos.length; i++) {
                document.getElementById(diasElegidos[i]).style.display = 'block';
            }

        }





    }); //DOM CONTENT LOADED


})();


$(function() {
    //PROGRAMA DE CONFERENCIAS
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');
    $('.menu-programa a').on('click', function() {
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    });

    //ANIMACION PARA NUMEROS

    $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 1500);

    //CUENTA REGRESIVA

    $('.cuenta-regresiva').countdown("2020/12/10 00:00:00", function(event) {
        $('#dias').html(event.strftime('%D'))
        $('#horas').html(event.strftime('%H'))
        $('#minutos').html(event.strftime('%M'))
        $('#segundos').html(event.strftime('%S'))

    });

});