// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#oyuncuAra").click(function () {
        var text = $("#oyuncuAraText").val();
        var url = "/User/OyuncuAra?ID=" + text;
        window.location = url;
    })
})

function successSwall() {
    Swal.fire({
        position: 'mid',
        icon: 'success',
        title: 'İşlem gerçekleşti',
        showConfirmButton: false,
        timer: 1500
    })
}
function warningSwall() {
    Swal.fire({
        position: 'mid',
        icon: 'warning',
        title: 'Bir şeyler ters gitmiş olabilir.',
        showConfirmButton: false,
        timer: 1500
    })
}
function dangerSwall() {
    Swal.fire({
        position: 'mid',
        icon: 'danger',
        title: 'Hata var. Tekrar kontrol edin.',
        showConfirmButton: false,
        timer: 1500
    })
}