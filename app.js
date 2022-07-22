// OCULTAR FILTROS
const btnOcultarFiltros = document.getElementById('btn-ocultar-filtros');
const formFiltros = document.getElementById('form-filtros');

btnOcultarFiltros.addEventListener('click', ()=>{
    formFiltros.classList.toggle('oculto');   
})


//NUEVA OPERACION


const btnNvaOperacion = document.getElementById('btn-nueva-operacion');
const primeraPagina = document.getElementById('primera-pagina');
const containerNvaOperacion = document.getElementById('container-nueva-operacion');
const cardOperaciones = document.getElementById('card-operaciones');

btnNvaOperacion.addEventListener('click', ()=>{
    primeraPagina.classList.toggle('oculto');
    containerNvaOperacion.classList.toggle('oculto');
    cardOperaciones.classList.toggle('oculto');
});

const balance = document.getElementById('balance');

balance.addEventListener('click', ()=>{
    primeraPagina.classList.remove('oculto');
    cardOperaciones.classList.remove('oculto');
    containerNvaOperacion.classList.toggle('oculto');
})


//DECLARACION ELEMENTOS DE CONTAINER DE NUEVA OPERACION


const descripcion = document.getElementById('descripcion');
const monto = document.getElementById('monto');
const tipo = document.getElementById('tipo');
const categoria = document.getElementById('categoria');
const fecha = document.getElementById('fecha');
const btnCancelar = document.getElementById('btn-cancelar');
const btnAgregar= document.getElementById('btn-agregar');
