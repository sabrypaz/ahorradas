
const descripcionInput = document.getElementById('descripcion-input');
const montoInput = document.getElementById('monto-input');
const tipoOperacion = document.getElementById('tipo-operacion');
const categoriaSelect = document.getElementById('categoria-select')

const sinOperaciones = document.getElementById('sin-operaciones');
const conOperaciones = document.getElementById('con-operaciones');



const agregarOperacionBtn = document.getElementById('agregar-operacion-btn');


const fechaInput = document.getElementById('fecha-input');
const fechaInputFiltro = document.getElementById('input-filtro-fecha');
const panelEditarFechaInput = document.getElementById('panel-editar-fecha-input');

// EDITAR OPERACION
const containerEditarOperacion = document.getElementById('container-editar-operacion');
const panelEditarDescripcionInput = document.getElementById('panel-editar-descripcion-input');
const panelEditarMontoInput = document.getElementById('panel-editar-monto-input');
const panelEditarTipoOperacion = document.getElementById('panel-editar-tipo-operacion');
const panelEditarCategoriaSelect = document.getElementById('panel-editar-categoria-select');
const panelEeditarFechaInput = document.getElementById('panel-editar-fecha-input');
const BtnPanelEditarAgregarOperacion = document.getElementById('panel-editar-agregar-operacion-btn');

// FILTROS
const selectTipofiltro = document.getElementById('select-tipo-filtro');
const filtroCategoria = document.getElementById('filtro-categoria');
const inputFiltroFecha = document.getElementById('input-filtro-fecha');
const selectOrdenar = document.getElementById('select-ordenar');

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


btnCancelar.addEventListener('click', ()=>{
    containerNvaOperacion.style = 'display:none';
    primeraPagina.style = 'display:block';
    cardOperaciones.style = 'display:block';
})




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
const conReportes = document.getElementById('con-reportes') 
const sinReportes = document.getElementById('sin-reportes')

reportes.addEventListener('click', ()=>{
    containerReportes.style = 'display:block';
    containerCategorias.style = 'display: none';
    containerNvaOperacion.style = 'display:none';
    primeraPagina.style = 'display:none';
    cardOperaciones.style = 'display:none';
    if(!operaciones.length){
        conReportes.style ='display:none';
        sinReportes.style = 'display:block';
    }else{
        conReportes.style ='display:block';
        sinReportes.style = 'display:none';
        
    }

    }

)
//EDITAR OPERACION
const btnPanelEditarCancelar = document.getElementById('panel-editar-btn-cancelar');

btnPanelEditarCancelar.addEventListener('click', () => {
    containerEditarOperacion.style = 'display:none'; 
    containerNvaOperacion.style = 'display:block';
    primeraPagina.style = 'display:block';
    cardOperaciones.style = 'display:block'; 
    containerNvaOperacion.style = 'display:none'; 
})

// *****************
// SELECT FILTRO 
// *****************

 const filtroMonto = [
    'Gasto',
    'Ganancia'
];


const filtroCategorias = [
    {
    categoria: 'Comida',
    id: uuidv4(),
    },
    {
    categoria: 'Salidas',
    id: uuidv4(),
    },
    {
    categoria:'Educación',
    id: uuidv4(),
    },
    {
    categoria: 'Educación',
    id: uuidv4(),
    },
    {
    categoria: 'Transporte',
    id: uuidv4(),
    },
    {
    categoria:'Trabajo',
    id: uuidv4(),
    }
  
];

const filtroOrdenar = [
    'Más reciente',
    'Menos reciente',
    'Mayor monto',
    'Menor monto',
    'A/Z',
    'Z/A'
]



// *****************
//    OPERACIONES
// ****************

let operaciones = JSON.parse(localStorage.getItem('operaciones')) || [];

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
};

const generarCategorias = ()=>{
    const selects = document.getElementsByClassName('categorias-select');
    for(let i = 0; i < selects.length; i++){
        const select = selects [i];
        if(select.classList.contains('filtro-categoria')){
            select.innerHTML ='<option value="Todas">Todas</option>'
        }
        for(let j = 0; j < filtroCategorias.length; j++){
            select.innerHTML += `<option value=${filtroCategorias[j].categoria}>${filtroCategorias[j].categoria}</option>`
        }
    }
};

const generarOrdenarOperaciones = ()=>{
    const select = document.getElementById('select-ordenar');
        for(let i = 0; i < filtroOrdenar.length; i++){
            select.innerHTML += `<option value=${filtroOrdenar[i]}>${filtroOrdenar[i]}</option>`
        }
};
   
const mostrarOperaciones = (arreglo) => {
    if(!arreglo.length){
        sinOperaciones.classList.remove('d-none');
        conOperaciones.classList.add('d-none'); 
    }else{
        sinOperaciones.classList.add('d-none');
        conOperaciones.classList.remove('d-none');
    }
};

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
    montoInput.value = 0
    tipoOperacion.value = 'Gasto'
    categoriaSelect.value = 'Comida'
    fechaInput.valueAsDate = new Date()
    mostrarOperaciones(operaciones)
    localStorage.setItem('operaciones', JSON.stringify(operaciones))
    pintarOperaciones(operaciones)
    pintarBalance(operaciones)
});

const pintarOperaciones = arr =>{
    let str = '';
    arr.forEach((operacion) => {
        const {id, descripcion, categoria, fecha, monto, tipo} = operacion;
        str = str + `<tr>
            <td scope="row">${descripcion}</td>
            <td><span class="btn-titulo-categorias p-2">${categoria}</span></td>
            <td>${fecha}</td>
            <td class="fw-bold ${tipo === 'Ganancia'?'ganancia':'gasto'}">$${monto}</td>
            <td><a class="btn-editar text-decoration-none" data-id=${id} href="#">Editar</a>
            <a class="btn-borrar text-decoration-none" data-id=${id} href="#">Borrar</a>
            </td>
        </th>` 
      
    })

    document.getElementById('tabla-operaciones').innerHTML= str;

    const btnEditar = document.querySelectorAll('.btn-editar');
    const btnBorrar = document.querySelectorAll('.btn-borrar');
 
        btnBorrar.forEach(btn => {
            btn.addEventListener('click', (e) =>{      
                const borradoDeoperacion = operaciones.filter(operacion => operacion.id !== e.target.dataset.id )
                localStorage.setItem('operaciones',JSON.stringify(borradoDeoperacion))
                operaciones = JSON.parse(localStorage.getItem('operaciones'))

                pintarOperaciones(operaciones);
                mostrarOperaciones(operaciones);
                pintarBalance(operaciones)
            })
        })
   


    btnEditar.forEach(btn => {
        btn.addEventListener('click', (e) =>{
            containerEditarOperacion.style = 'display:block';
            containerNvaOperacion.style = 'display:none';
            primeraPagina.style = 'display:none';
            cardOperaciones.style = 'display:none';
            const editarOperacion = operaciones.filter(operacion => operacion.id === e.target.dataset.id)
        

            operacionEditar(editarOperacion)

        })
    })

};


//RECOLECTA LOS VALUE DE LA OPERACION A EDITAR
const operacionEditar = arr =>{ 
    arr.forEach((element) =>{
        id = element.id
        panelEditarMontoInput.value = element.monto;
        panelEditarDescripcionInput.value = element.descripcion;
        panelEditarTipoOperacion.value = element.tipo;
        panelEditarCategoriaSelect.value = element.categoria;
        panelEeditarFechaInput.value = element.fecha;
    })
}; 

// AGREGA UNA NUEVA OPERACION
const nuevaOperacionpanelEditar = () =>{
    BtnPanelEditarAgregarOperacion.addEventListener('click', () => {

        const operacionPanelEditar = {
            id: operaciones[0].id,
            descripcion: panelEditarDescripcionInput.value,
            monto: panelEditarMontoInput.value,
            tipo: panelEditarTipoOperacion.value,
            categoria: panelEditarCategoriaSelect.value,
            fecha: panelEeditarFechaInput.value 
        }
       
        containerEditarOperacion.style = 'display:none';
        primeraPagina.style = 'display:block';
        containerNvaOperacion.style = 'display:none';
        cardOperaciones.style = 'display:block';
      
        const nuevaOperacionEditada = operaciones.map((operacion) =>
        operacion.id === operaciones[0].id
        ? operacionPanelEditar
        : operacion
        )
        localStorage.setItem('operaciones',JSON.stringify(nuevaOperacionEditada))
        operaciones = JSON.parse(localStorage.getItem('operaciones'))
        
        pintarOperaciones(operaciones);
         
        mostrarOperaciones(operaciones);
    })
};

nuevaOperacionpanelEditar(operaciones)

//**************
// BALANCE
//**************


const pintarBalance = (arr) => {
   
    const sumaGanancia = arr.filter(operacion => operacion.tipo === 'Ganancia').reduce((prev, current) => 
    prev + Number(current.monto) ,0)

    const sumaGastos = arr.filter(operacion => operacion.tipo === 'Gasto').reduce((prev, current) => 
    prev + Number(current.monto) ,0)

    //creo un arreglo vacio. luego le mandamos dos arreglos, el de ganancias y el de gastos
    let gananciaGastoBalance = new Array();
    gananciaGastoBalance.push(sumaGanancia)
    gananciaGastoBalance.push(sumaGastos)

    // Este arreglo contiene la resta de las ganancia y las sumas
    let totalBalance = [];
  
    //Recorremos el arreglo de gananciaGastoBalance y hacemos uno nuevo con la resta 
    gananciaGastoBalance.forEach(() =>{
    return totalBalance.push((gananciaGastoBalance[0] - gananciaGastoBalance[1]))
    });

    //Pintamos la card de Balance
    let str = `
        <div class="d-flex justify-content-between">
        <p class="card-text">Ganancias</p>
        <div class="text-success">+$${sumaGanancia}</div>
        </div>
        <div class="d-flex justify-content-between">
        <p class="card-text">Gastos</p>
        <div class="text-danger">-$${sumaGastos}</div>
        </div>
        <div class="d-flex justify-content-between">
        <p class="card-text">Total</p>
        <div class="fw-bold" id="totalBalance">$${Math.abs(totalBalance[0])}</div>
        </div>`

        document.getElementById('balance-id').innerHTML = str

    //Le damos color al total de balance si da ganancia es rojo y se da gasto es verde
    const nueva = (arr) =>{
        if(arr[1] > 0){
        document.getElementById('totalBalance').classList.add('ganancia');
        }else if (arr[1] < 0){
        document.getElementById('totalBalance').classList.add('gasto');
        }else{
        } 
    }
    nueva(totalBalance)
    mostrarOperaciones(operaciones);
    pintarOperaciones(operaciones);

}
pintarBalance(operaciones)

selectTipofiltro.addEventListener('change', e => {
    if(e.target.value !== 'Todos'){
        const arrFiltroTipo = operaciones.filter(operaciones => operaciones.tipo === e.target.value)
        localStorage.setItem('operacionTipo',arrFiltroTipo)
        localStorage.setItem('operacionTipo',JSON.stringify(arrFiltroTipo))

        pintarOperaciones(arrFiltroTipo);
    }else{
        pintarOperaciones(operaciones);
    }
})

operacionTipo = [...operaciones]


//FILTRO CATEGORIA
filtroCategoria.addEventListener('change', e =>{
    if(e.target.value !== 'Todas'){
        const arrFiltroCategoria = operaciones.filter(operaciones => operaciones.categoria === e.target.value)
        localStorage.setItem('operacionCategoria',arrFiltroCategoria)
        localStorage.setItem('operacionCategoria',JSON.stringify(arrFiltroCategoria))

        pintarOperaciones(arrFiltroCategoria);
    }else{
        pintarOperaciones(operaciones);
    }
})

operacionCategoria = [...operaciones]

//**************
//FILTRO FECHA
//**************
inputFiltroFecha.addEventListener('change', e => {
    if(e.target.valueAsDate !== new Date()){
        const arrFiltroFecha = operaciones.filter(operaciones =>  new Date(operaciones.fecha) > e.target.valueAsDate )
        localStorage.setItem('operacionFecha',arrFiltroFecha)
        localStorage.setItem('operacionFecha',JSON.stringify(arrFiltroFecha))
        pintarOperaciones(arrFiltroFecha);
    }else{
        pintarOperaciones(operaciones);
    }

})

operacionFecha= [...operaciones]

//**************
// ORDENAR POR
//**************
selectOrdenar.addEventListener('change', e => {
    if(e.target.value === 'Más'){
        const arrFiltroMasReciente = operaciones.sort((a, b) => 
        (new Date(b.fecha) - new Date(a.fecha)))  
        localStorage.setItem('operacionMas',arrFiltroMasReciente)
        localStorage.setItem('operacionMas',JSON.stringify(arrFiltroMasReciente))
        pintarOperaciones(arrFiltroMasReciente)
    }
    if(e.target.value === 'Menos'){
        const arrFiltroMenosReciente = operaciones.sort((a, b) => 
        (new Date(a.fecha) - new Date(b.fecha)))  
        localStorage.setItem('operacionMenos',arrFiltroMenosReciente )
        localStorage.setItem('operacionMenos',JSON.stringify(arrFiltroMenosReciente ))
        pintarOperaciones(arrFiltroMenosReciente )
    }
    if(e.target.value === 'Mayor'){
        const arrFiltroMayorMonto = operaciones.sort((a, b) => 
        (b.monto - a.monto))
        localStorage.setItem('operacionMayorMonto',arrFiltroMayorMonto)
        localStorage.setItem('operacionMayorrMonto',JSON.stringify(arrFiltroMayorMonto))
        pintarOperaciones(arrFiltroMayorMonto);
    }
    if(e.target.value === 'Menor'){
        const arrFiltroMenosMonto = operaciones.sort((a, b) => 
        (a.monto - b.monto))
        localStorage.setItem('operacionMenorMonto',arrFiltroMenosMonto)
        localStorage.setItem('operacionMenorMonto',JSON.stringify(arrFiltroMenosMonto))
        pintarOperaciones(arrFiltroMenosMonto);
    }
    if(e.target.value === 'A/Z'){
        const arrFiltroOrdenarAz  = operaciones.sort((a, b) => {
            if (a.descripcion.toLowerCase() < b.descripcion.toLowerCase()){
            return -1  
        }
        })
        localStorage.setItem('operacionAz',arrFiltroOrdenarAz)
        localStorage.setItem('operacionAz',JSON.stringify(arrFiltroOrdenarAz))
        pintarOperaciones(arrFiltroOrdenarAz); 
    }
    if(e.target.value === 'Z/A'){
        const arrFiltroOrdenarZa  = operaciones.sort((a, b) => {
    if (a.descripcion.toLowerCase() > b.descripcion.toLowerCase()){
        return -1 
    }
    })
        localStorage.setItem('operacionZa',arrFiltroOrdenarZa)
        localStorage.setItem('operacionZa',JSON.stringify(arrFiltroOrdenarZa))
        pintarOperaciones(arrFiltroOrdenarZa); 
    }
})

operacionMas = [...operaciones]
operacionMenos = [...operaciones]
operacionMayorMonto = [...operaciones]
operacionMenorMonto = [...operaciones]  
operacionAz = [...operaciones]
operacionZa = [...operaciones]

//******************
// PANEL CATEGORIA
//******************

// CUANDO HAGO EL EVENTO CLICK EN EL BTN AGREGAR, SE TOMA EL VALUE Y SE PUSH AL filtroCategorias
const inputAgregarCategoria = document.getElementById('input-agregar-categoria');
const btnAgregarCategoria = document.getElementById('btn-agregar-categoria');



const panelCategoria = (arr) =>{
    let str = '';
    arr.forEach((arr) =>{
        str += `
            <div class="d-flex bd-highlight mb-3">
            <div class="me-auto p-2 bd-highligh btn-titulo-categorias">${arr.categoria}</div>
            <button type="button" class="p-2 bd-highlight btn btn-link btn-categoria-editar text-decoration-none">Editar</button>
            <button type="button" class="p-2 bd-highlight btn btn-link btn-categoria-eliminar text-decoration-none" data-id=${arr.id}>Eliminar</button>  
        </div>`   
    })
            

    document.getElementById('pintar-categorias').innerHTML = str

    // PARA ELIMIAR Y EDITAR PRIMERO TENGO QUE VER COMO DEFINIR / AGREGAR EL ID
    const btnEliminarCategoria = document.querySelectorAll('.btn-categoria-eliminar');


    btnEliminarCategoria.forEach(btn =>{
        btn.addEventListener('click', (e) =>{
            console.log('mostrar click')
            const eliminarCategoria = filtroCategorias.filter(categoria => categoria.id !== e.target.dataset.id)
            console.log(eliminarCategoria)
            // localStorage.setItem('operaciones',JSON.stringify(eliminarCategoria))
            // operaciones = JSON.parse(localStorage.getItem('operaciones'))
            // pintarOperaciones(operaciones);
            // mostrarOperaciones(operaciones);
        })
    })

}
// primero agarrar el valor del imput y pintar la nueva categoria
// eliminar categorias
// editar categorias.

panelCategoria(filtroCategorias)


// const cargarNuevaCategoria = () =>{
//     inputAgregarCategoria.addEventListener('change', (e)=>{
//         console.log(e.target.value)
//     })
        
   
// }

// cargarNuevaCategoria()


const inicializar = () => {
    fechaInput.valueAsDate = new Date ()
    fechaInputFiltro.valueAsDate = new Date ()
    panelEditarFechaInput.valueAsDate = new Date ()
    generarMonto();
    generarCategorias();
    generarOrdenarOperaciones();
    mostrarOperaciones(operaciones);
    pintarOperaciones(operaciones);
}

window.onload = inicializar
