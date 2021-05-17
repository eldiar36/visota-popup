const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
    autohide: true,
    disableTouchKeyboard: true,
    format: 'dd/mm/yyyy',

    l: "ru",
    allowOneSidedRange: true,
    nextArrow: '>',
    prevArrow: '<',
    todayHighlight: true,
    todayBtnMode:true,
    todayMode:true,
    weekStart: 1,

});

$('.select__item').on('click', function() {
    $(this).addClass('active')
        .siblings().removeClass('active');
});

jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});

/*function PlusMinus() {
    let minusBtn = document.getElementsByClassName("bt_minus"),
        plusBtn = document.getElementsByClassName("bt_plus"),
        numberPlace = document.getElementsByClassName("quantity"),
        parentItem = document.getElementsByClassName("inner"),
        number = 0, /// number value
        min = 0, /// min number
        max = 30; /// max number

    for (let i = 0; i < minusBtn.length; i++) minusBtn[i].onclick = function () {
        if (number > min) {
            number = number - 1; /// Minus 1 of the number
            numberPlace[i].value = number; /// Display the value in place of the number
        }
        if (number === min) {
            parentItem[i].classList.remove('pink')
        }
    }

    for (let j = 0; j < plusBtn.length; j++) plusBtn[j].onclick = function () {
        if (number < max) {
            number = number + 1;
            numberPlace[j].value = number; /// Display the value in place of the number
            parentItem[j].classList.add('pink')
        }
    }
}

PlusMinus();*/
let  tickedColor = document.getElementsByClassName("ticket-color")
console.log(tickedColor)
// Убавляем кол-во по клику
$('.quantity_inner .bt_minus').click(function () {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);




});

// Прибавляем кол-во по клику
$('.quantity_inner .bt_plus').click(function () {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
    
});

// Убираем все лишнее и невозможное при изменении поля
$('.quantity_inner .quantity').bind("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
        this.value = 0;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'));
    }
});
function checkFilled() {
    let inputVal = document.getElementById("promo-input");
        if (inputVal.value === "") {
            inputVal.style.background = "none";
        }
        else{
            inputVal.style.background = "#ffffff";
        }
}

checkFilled();

