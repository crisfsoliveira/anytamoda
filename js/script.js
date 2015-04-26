//JS only used to reset button on second click
// registration form button 

$(".submit").click(function () {
    $(this).toggleClass('complete');
});

$("form.forms").submit(function (e) {
    e.preventDefault();
});


// reistration labels + inputs (appear and disappear)


$(".inputs").on('focus', function () {
    var $input = $(this);
    $input.attr('placeholder', '');
    var $label = $input.prev('label');
    $label.fadeIn();
});


$(".inputs").on('blur', function () {
    var $input = $(this);
    if ($input.val() == '') {
        var $label = $input.prev('label');
        $label.fadeOut();
        $input.attr('placeholder', $label.text());
    }
});


// header login


$("#login_model_trigger").click(function () {
    var $form = $(this).parents('.login').find('form');
    var $closebutton = $(this).next('.closebutton');

    $form.fadeIn();
    $(this).parent().css('padding', '1px 8px');
    $(this).parent().css('width', '100%');

    $closebutton.fadeIn();

    $closebutton.click(function () {
        // $(this) é igual ao botão que foi carregado que é igual a .closebutton
        var $form = $(this).parents('.login').find('form');
        $form.fadeOut();
        $(this).fadeOut();

        $(this).parent().css('padding', '8px');
        $(this).parent().css('width', '65px');

    });

});

// form validation


$(document).ready(function () {
    $('#myform').validate({
        rules: {

            firstname: {
                required: true,
                minlength: 6
            },

            lastname: {
                required: true,
                minlength: 6
            },

            tel: {
                required: true,
                minlength: 9
            },

            email: {
                required: true,
                email: true
            },

            date: {
                required: true,
                minAge: 18
            }
        },

        messages: {

            firstname: {
                required: "Insira o seu primeiro nome",
                //   minlength: jQuery.format("O seu nome deve ter no mínimo 1 caracter!"),
                lettersonly: true
            },

            lastname: {
                required: "Insira o seu último nome",
                //  minlength: jQuery.format("O seu nome deve ter no mínimo 1 caracter!"),
                lettersonly: true
            },

            email: {
                required: "Insira o seu email",
                email: "Por favor insira um endereço de email válido!"
            },

            tel: {
                required: "Insira o seu nrº de telemóvel",
                minlength: jQuery.format("Insira no mínimo 9 números!")
            },

            date: {
                required: "Insira a sua data de nascimento",
                minAge: "Deve ter no mínimo 18 anos!"
            }

        },
        errorContainer: $('#errorContainer'),
        errorLabelContainer: $('#errorContainer ul')
    });
});



$.validator.addMethod("minAge", function (value, element, min) {
    var today = new Date();
    var birthDate = new Date(value);
    var age = today.getFullYear() - birthDate.getFullYear();

    if (age > min + 1) {
        return true;
    }

    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age >= min;
}, "You are not old enough!");