import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from 'sweetalert2';

const inputExpresion = document.getElementById('expresion');
const inputTexto = document.getElementById('texto');
const btnComparar = document.getElementById('btn_comparar');
const btnLimpiar = document.getElementById('btn_limpiar');

btnComparar.addEventListener('click', () => {
    let expresion = inputExpresion.value;
    let texto = inputTexto.value;

    if (expresion == "" || texto == "") {
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Por favor llena los dos campos antes de comparar.'
        });
        return;
    }

    let regex = new RegExp(expresion);


    if (regex.test(texto)) {
        Swal.fire({
            icon: 'susses',
            title:'Cumple',
            text: 'el texto que ingresaste si cumple con la condicion'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title:'No esta bien',
            text: 'el texto no cumple con esta condigcion'
        });
    }
});

btnLimpiar.addEventListener('click', () => {
    inputExpresion.value = "";
    inputTexto.value = "";
});
