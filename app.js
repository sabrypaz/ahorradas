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
const btnAgregar = document.getElementById('btn-agregar');
const btnCancelar = document.getElementById('btn-cancelar');


btnNvaOperacion.addEventListener('click', ()=>{
    primeraPagina.style = 'display:none';
    containerNvaOperacion.style = 'display:block';
    cardOperaciones.style = 'display:none';
    containerReportes.style = 'display:none';
});



// btnCancelar.addEventListener('click', ()=>{
//     containerNvaOperacion.classList.toggle('d-none');
//     primeraPagina.classList.toggle('d-block');
//     cardOperaciones.classList.toggle('d-block');
// })




//BALANCE


const balance = document.getElementById('balance');

balance.addEventListener('click', ()=>{
    primeraPagina.style = 'display:block';
    cardOperaciones.style = 'display:block';
    containerNvaOperacion.style = 'display: none';
    containerCategorias.style = 'display: none';
    containerReportes.style = 'display:none';

});




//DECLARACION VARIABLES DE CONTAINER DE NUEVA OPERACION

/*
const descripcion = document.getElementById('descripcion');
const monto = document.getElementById('monto');
const tipo = document.getElementById('tipo');
const categoria = document.getElementById('categoria');
const fecha = document.getElementById('fecha');
const btnCancelar = document.getElementById('btn-cancelar');
const btnAgregar= document.getElementById('btn-agregar');

*/

//CATEGORÍAS


const categorias = document.getElementById('categorias');
const containerCategorias = document.getElementById('container-categorias');

categorias.addEventListener('click', ()=>{
     containerCategorias.style = 'display: block';
     containerNvaOperacion.style = 'display:none';
     primeraPagina.style = 'display:none';
     cardOperaciones.style = 'display:none';
     containerReportes.style = 'display:none';
});


//REPORTES

const reportes = document.getElementById('reportes');
const containerReportes = document.getElementById('container-reportes');

reportes.addEventListener('click', ()=>{
    containerReportes.style = 'display:block';
    containerCategorias.style = 'display: none';
     containerNvaOperacion.style = 'display:none';
     primeraPagina.style = 'display:none';
     cardOperaciones.style = 'display:none';

})

///////////////////
//const tablaOperaciones = document.getElementById('tabla-operaciones');
// *****************
// SELECT FILTRO 
// *****************

 const filtroMonto = [
    'Gasto',
    'Ganancia'
];

const generarMonto = ()=>{
    const selects = document.getElementsByClassName('select-monto');
    for(let i = 0; i < selects.length; i++){
        const select = selects [i];
        if(select.classList.contains('select-monto-filtro')){
            select.innerHTML ='<option value="Todos">Todos</option>'
        }
        for(let j = 0; j < filtroMonto.length; j++){
            select.innerHTML += `<option value=${filtroMonto[j]}>${filtroMonto[j]}</option>`
        }
    }
}
generarMonto()


const filtroCategorias = [
    'Comida',
    'Salidas',
    'Educación',
    'Transporte',
    'Trabajo',
];


const generarCategorias = ()=>{
    const selects = document.getElementsByClassName('categorias-select');
    for(let i = 0; i < selects.length; i++){
        const select = selects [i];
        if(select.classList.contains('filtro-categoria')){
            select.innerHTML ='<option value="Todas">Todas</option>'
        }
        for(let j = 0; j < filtroCategorias.length; j++){
            select.innerHTML += `<option value=${filtroCategorias[j]}>${filtroCategorias[j]}</option>`
        }
    }
}
generarCategorias()


const filtoOrdenar = [
    'Más reciente',
    'Menos reciente',
    'Mayor monto',
    'Educación',
    'Menor monto',
    'A/Z',
    'Z/A'
]


const generarOrdenarOperaciones = ()=>{
    const select = document.getElementById('select-ordenar');
        for(let i = 0; i < filtoOrdenar.length; i++){
            select.innerHTML += `<option value=${filtoOrdenar[i]}>${filtoOrdenar[i]}</option>`
        }
    }

generarOrdenarOperaciones()


// *****************
//    OPERACIONES
// ****************
const operaciones =[]


const mostrarOperaciones = (arr) => {
    if(!arr.length){
        document.getElementById('sin-operaciones').classList.remove('d-none');
        document.getElementById('con-operaciones').classList.add('d-none'); 
    }else{
        document.getElementById('sin-operaciones').classList.add('d-none');
        document.getElementById('con-operaciones').classList.remove('d-none');
    }
}
mostrarOperaciones(operaciones)

const descripcionInput = document.getElementById('descripcion-input');



// tablaOperaciones.innerHTML = `<tr>
// <td scope="row">${descripcionInput}.value</td>
// <td>${}</td>
// <td>${}</td>
// <td>${}</td>
// <td>${}</td>
// </tr>`