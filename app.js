
const descripcionInput = document.getElementById('descripcion-input');
const montoInput = document.getElementById('monto-input');
const tipoOperacion = document.getElementById('tipo-operacion');
const categoriaSelect = document.getElementById('categoria-select')

const sinOperaciones = document.getElementById('sin-operaciones');
const conOperaciones = document.getElementById('con-operaciones');



const agregarOperacionBtn = document.getElementById('agregar-operacion-btn');


const fechaInput = document.getElementById('fecha-input');
const fechaInputFiltro = document.getElementById('input-filtro-fecha');



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

//BTN HAMBURGUESA

// const navbarToggler = document.getElementById('navbar-toggler');

// navbarToggler.addEventListener('click', ()=>{
// reportes.classList.add('d-none')
// })

// *****************
// SELECT FILTRO 
// *****************

 const filtroMonto = [
    'Gasto',
    'Ganancia'
];


const filtroCategorias = [
    'Comida',
    'Salidas',
    'Educación',
    'Transporte',
    'Trabajo'
];

const filtoOrdenar = [
    'Más reciente',
    'Menos reciente',
    'Mayor monto',
    'Educación',
    'Menor monto',
    'A/Z',
    'Z/A'
]



// *****************
//    OPERACIONES
// ****************
// const obtenerOperaciones = () =>{
//     return JSON.parse(localStorage.getItem('operaciones'))
// }

// const actualizarOperaciones = (operaciones)=>{
//     localStorage.setItem('operaciones', JSON.stringify({...obtenerOperaciones(), ...operaciones}))
//     mostrarOperaciones(operaciones)
// }
let operaciones = JSON.parse(localStorage.getItem('operaciones')) || [];
//const operaciones =[];

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
generarMonto();


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
generarCategorias();



const generarOrdenarOperaciones = ()=>{
    const select = document.getElementById('select-ordenar');
        for(let i = 0; i < filtoOrdenar.length; i++){
            select.innerHTML += `<option value=${filtoOrdenar[i]}>${filtoOrdenar[i]}</option>`
        }
    }
generarOrdenarOperaciones();


const mostrarOperaciones = (arreglo) => {
    if(!arreglo.length){
        sinOperaciones.classList.remove('d-none');
        conOperaciones.classList.add('d-none'); 
    }else{
        sinOperaciones.classList.add('d-none');
        conOperaciones.classList.remove('d-none');
    }
}
mostrarOperaciones(operaciones);



window.onload = function(){
    const fecha = new Date(); //Fecha actual
    let mes = fecha.getMonth()+1; //obteniendo mes
    let dia = fecha.getDate(); //obteniendo dia
    let ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10

    fechaInput.value=ano+"-"+mes+"-"+dia;
    fechaInputFiltro.value=ano+"-"+mes+"-"+dia;

  }


agregarOperacionBtn.addEventListener('click', () => {
    if(descripcionInput.value.trim().length === 0 || montoInput.value == 0){
       return
    }
const operacion = {
    id: uuidv4(),
    descripcion: descripcionInput.value,
    monto: montoInput.value,
    tipo: tipoOperacion.value,
    categoria: categoriaSelect.value,
    fecha: fechaInput.value

}
operaciones.push(operacion)

primeraPagina.style = 'display:block';
containerNvaOperacion.style = 'display:none';
cardOperaciones.style = 'display:block';

descripcionInput.value = ''
montoInput. value = 0
tipoOperacion.value = 'Gasto'
categoriaSelect.value = 'Comida'
fechaInput.valueAsDate = new Date()
mostrarOperaciones(operaciones)
//localStorage.setItem('operaciones', JSON.stringify({...obtenerOperaciones(), ...operaciones}))

localStorage.setItem('operaciones', JSON.stringify(operaciones))
pintarOperaciones(operaciones)

});

const pintarOperaciones = arr =>{

    let str = '';
    arr.forEach((operacion) => {
        const {id, descripcion, categoria, fecha, monto, tipo} = operacion;
        str = str + `
        <tr>
            <td scope="row">${descripcion}</td>
            <td>${categoria}</td>
            <td>${fecha}</td>
            <td class="fw-bold ${tipo === 'Ganancia'?'ganancia':'gasto'}">$${monto}</td>
            <td><a class="btn-editar text-decoration-none" data-id=${id} href="#">Editar</a>
            <a class="btn-borrar text-decoration-none" data-id=${id} href="#">Borrar</a>
            </td>
        </th>` 
        console.log(operaciones)
    })
    
    document.getElementById('tabla-operaciones').innerHTML= str;
const btnEditar = document.querySelectorAll('.btn-editar');

btnEditar.forEach(btn => {
    btn.addEventListener('click', e =>{
console.log(e.target.dataset.id)
    })
})

const btnBorrar = document.querySelectorAll('.btn-borrar');

btnBorrar.forEach(btn => {
    btn.addEventListener('click', e =>{
const borrado = operaciones.filter(operacion => operacion.id != e.target.dataset.id )
localStorage.setItem('operaciones',JSON.stringify(borrado))
operaciones = JSON.parse(localStorage.getItem('operaciones'))
console.log(borrado)  
pintarOperaciones(operaciones);
mostrarOperaciones(operaciones);

})
})


}
pintarOperaciones(operaciones);