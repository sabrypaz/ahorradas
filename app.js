
const descripcionInput = document.getElementById('descripcion-input');
const montoInput = document.getElementById('monto-input');
const tipoOperacion = document.getElementById('tipo-operacion');
const categoriaSelect = document.getElementById('categoria-select');

const sinOperaciones = document.getElementById('sin-operaciones');
const conOperaciones = document.getElementById('con-operaciones');



const agregarOperacionBtn = document.getElementById('agregar-operacion-btn');
// PANEL BALANCE
const balance = document.getElementById('balance');
//INPUT FECHAS
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
// PANEL FILTROS
const selectTipofiltro = document.getElementById('select-tipo-filtro');
const filtroCategoria = document.getElementById('filtro-categoria');
const inputFiltroFecha = document.getElementById('input-filtro-fecha');
const selectOrdenar = document.getElementById('select-ordenar');
// OCULTAR FILTROS
const btnOcultarFiltros = document.getElementById('btn-ocultar-filtros');
const formFiltros = document.getElementById('form-filtros');
//NUEVA OPERACION
const btnNvaOperacion = document.getElementById('btn-nueva-operacion');
const primeraPagina = document.getElementById('primera-pagina');
const containerNvaOperacion = document.getElementById('container-nueva-operacion');
const cardOperaciones = document.getElementById('card-operaciones');
const btnAgregar = document.getElementById('btn-agregar');
const btnCancelar = document.getElementById('btn-cancelar');
//EDITAR OPERACION
const btnPanelEditarCancelar = document.getElementById('panel-editar-btn-cancelar');
// PANEL CATEGORIA
const categorias = document.getElementById('categorias');
const containerCategorias = document.getElementById('container-categorias');
const categoriaParaEditar = document.getElementById('container-categorias-editar');
const inputAgregarCategoriaEditada =document.getElementById('input-agregar-categoria-editada');
const btnCancelarCategoriaEditar = document.getElementById('btn-cancelar-categoria-editar');
const btnAgregarCategoriaEditar = document.getElementById('btn-agregar-categoria-editar');
// PANEL REPORTES
const reportes = document.getElementById('reportes');
const containerReportes = document.getElementById('container-reportes');
const conReportes = document.getElementById('con-reportes') 
const sinReportes = document.getElementById('sin-reportes')
//*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
// *****************
//      VISTAS
// ****************

// NUEVA OPERACION
btnNvaOperacion.addEventListener('click', ()=>{
    primeraPagina.style = 'display:none';
    containerNvaOperacion.style = 'display:block';
    cardOperaciones.style = 'display:none';
    containerReportes.style = 'display:none';
});

// CANCELAR OPERACION
btnCancelar.addEventListener('click', ()=>{
    containerNvaOperacion.style = 'display:none';
    primeraPagina.style = 'display:block';
    cardOperaciones.style = 'display:block';
})


// PANEL BALANCE
balance.addEventListener('click', ()=>{
    primeraPagina.style = 'display:block';
    cardOperaciones.style = 'display:block';
    containerNvaOperacion.style = 'display: none';
    containerCategorias.style = 'display: none';
    containerReportes.style = 'display:none';

});

//OCULTARFILTROS
btnOcultarFiltros.addEventListener('click', ()=>{
    formFiltros.classList.toggle('oculto');   
})

//CATEGORÍAS
categorias.addEventListener('click', ()=>{
     containerCategorias.style = 'display: block';
     containerNvaOperacion.style = 'display:none';
     primeraPagina.style = 'display:none';
     cardOperaciones.style = 'display:none';
     containerReportes.style = 'display:none';
     pintarPanelCategoria(objetoCategorias)
});


//REPORTES
reportes.addEventListener('click', ()=>{
    containerReportes.style = 'display:block';
    containerCategorias.style = 'display: none';
    containerNvaOperacion.style = 'display:none';
    primeraPagina.style = 'display:none';
    cardOperaciones.style = 'display:none';
    if(operaciones.length <= 2){
        conReportes.style ='display:none';
        sinReportes.style = 'display:block';
        
    }else{
        conReportes.style ='display:block';
        sinReportes.style = 'display:none';

    }
    pintarOperaciones(operaciones);
    totalPorMes(operaciones);
    resumenReporteMayorGanancia(operaciones);
    resumenReporteMayorGasto(operaciones)
    mesMayorOperacion(operaciones)
})

//EDITAR OPERACION
btnPanelEditarCancelar.addEventListener('click', () => {
    containerEditarOperacion.style = 'display:none'; 
    containerNvaOperacion.style = 'display:block';
    primeraPagina.style = 'display:block';
    cardOperaciones.style = 'display:block'; 
    containerNvaOperacion.style = 'display:none'; 
})
//*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
// *****************
//  LOCAL STORAGE
// *****************

let operaciones = JSON.parse(localStorage.getItem('operaciones')) || [];
//*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
// *****************
//  SELECT FILTRO 
// *****************

 const filtroMonto = [
    'Gasto',
    'Ganancia'
];



const filtroOrdenar = [
    'Más reciente',
    'Menos reciente',
    'Mayor monto',
    'Menor monto',
    'A/Z',
    'Z/A'
]


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



const generarOrdenarOperaciones = ()=>{
    const select = document.getElementById('select-ordenar');
        for(let i = 0; i < filtroOrdenar.length; i++){
            select.innerHTML += `<option value=${filtroOrdenar[i]}>${filtroOrdenar[i]}</option>`
        }
};
 //*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_  
// *****************
//     OPERACIONES
// *****************
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
            <td><a class="btn-editar p-2 text-decoration-none link-secondary" data-id=${id} href="#">Editar</a>
            <a class="btn-borrar p-2 text-decoration-none link-secondary" data-id=${id} href="#">Borrar</a>
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
        operaciones.forEach((element)=>{
            const id = element.id
         
        })
        const operacionPanelEditar = {
            id: id,
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
        operacion.id === id
        ? operacionPanelEditar
        : operacion
        )
        localStorage.setItem('operaciones',JSON.stringify(nuevaOperacionEditada))
        operaciones = JSON.parse(localStorage.getItem('operaciones'))
        
        mostrarOperaciones(operaciones);
        pintarOperaciones(operaciones);
        pintarBalance(operaciones)
    })
};

nuevaOperacionpanelEditar(operaciones)

//*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
//**************
// BALANCE
//**************

const pintarBalance = (arr) => {
   
    const sumaGanancia = arr.filter(operacion => operacion.tipo === 'Ganancia').reduce((prev, current) => 
    prev + Number(current.monto) ,0)

    const sumaGastos = arr.filter(operacion => operacion.tipo === 'Gasto').reduce((prev, current) => 
    prev + Number(current.monto) ,0)

    // Este arreglo contiene la resta de las ganancia y las sumas
    let totalBalance = [];
    totalBalance.push((sumaGanancia - sumaGastos))

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
        <div class="fw-bold" id="totalBalance">$${Math.abs(totalBalance)}</div>
        </div>`

        document.getElementById('balance-id').innerHTML = str

    //Le damos color al total de balance si da ganancia es rojo y se da gasto es verde
    const pintarTotalColor = (arr) =>{
        if(arr >= 1){
        document.getElementById('totalBalance').classList.add('ganancia');
        }else if (arr <= -1){
        document.getElementById('totalBalance').classList.add('gasto');
        }
    }
    pintarTotalColor(totalBalance)
    mostrarOperaciones(operaciones);
    pintarOperaciones(operaciones);

}
pintarBalance(operaciones)

//*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
//****************
//  FILTRO TIPO
//****************
const acumulatFiltro = () => {
    console.log(selectTipofiltro.value)
}
acumulatFiltro()

selectTipofiltro.addEventListener('change', e => {
    if(e.target.value !== 'Todos'){
        const arrFiltroTipo = operaciones.filter(operaciones => operaciones.tipo === e.target.value)
        localStorage.setItem('operacionCategoria',arrFiltroTipo)
        operacionCategoria = localStorage.setItem('operacionCategoria',JSON.stringify(arrFiltroTipo))
        pintarOperaciones(arrFiltroTipo );
    }else{
        pintarOperaciones(operaciones);
        
    }
})


//********************
//  FILTRO CATEGORIA
//********************

filtroCategoria.addEventListener('change', e =>{
    if(e.target.value !== 'Todas'){
        const arrFiltroCategoria = operaciones.filter(operaciones => operaciones.categoria === e.target.value)
        localStorage.setItem('operacionCategoria',arrFiltroCategoria)
        operacionCategoria = localStorage.setItem('operacionCategoria',JSON.stringify(arrFiltroCategoria))
        pintarOperaciones(arrFiltroCategoria);
    }else{
        pintarOperaciones(operaciones);
        
    }
})


//*****************
//  FILTRO FECHA
//*****************
inputFiltroFecha.addEventListener('change', e => {
    if(e.target.valueAsDate !== new Date()){
        const arrFiltroFecha = operaciones.filter(operaciones =>  new Date(operaciones.fecha) > e.target.valueAsDate )
        localStorage.setItem('operacionCategoria',arrFiltroFecha)
        operacionCategoria = localStorage.setItem('operacionCategoria',JSON.stringify(arrFiltroFecha))
        pintarOperaciones(arrFiltroFecha);
    }else{
        pintarOperaciones(operaciones);
    }

})


//**************
// ORDENAR POR
//**************
selectOrdenar.addEventListener('change', e => {
    if(e.target.value === 'Más'){
        const arrFiltroMasReciente = operaciones.sort((a, b) => 
        (new Date(b.fecha) - new Date(a.fecha)))  
        localStorage.setItem('operacionCategoria',arrFiltroMasReciente)
        operacionCategoria = localStorage.setItem('operacionCategoria',JSON.stringify(arrFiltroMasReciente))
        pintarOperaciones(arrFiltroMasReciente)
    }
    if(e.target.value === 'Menos'){
        const arrFiltroMenosReciente = operaciones.sort((a, b) => 
        (new Date(a.fecha) - new Date(b.fecha)))  
        localStorage.setItem('operacionCategoria',arrFiltroMenosReciente )
        operacionCategoria = localStorage.setItem('operacionCategoria',JSON.stringify(arrFiltroMenosReciente ))
        pintarOperaciones(arrFiltroMenosReciente )
    }
    if(e.target.value === 'Mayor'){
        const arrFiltroMayorMonto = operaciones.sort((a, b) => 
        (b.monto - a.monto))
        localStorage.setItem('operacionCategoria',arrFiltroMayorMonto)
        operacionCategoria = localStorage.setItem('operacionCategoria',JSON.stringify(arrFiltroMayorMonto))
        pintarOperaciones(arrFiltroMayorMonto);
    }
    if(e.target.value === 'Menor'){
        const arrFiltroMenosMonto = operaciones.sort((a, b) => 
        (a.monto - b.monto))
        localStorage.setItem('operacionCategoria',arrFiltroMenosMonto)
        operacionCategoria = localStorage.setItem('operacionCategoria',JSON.stringify(arrFiltroMenosMonto))
        pintarOperaciones(arrFiltroMenosMonto);
    }
    if(e.target.value === 'A/Z'){
        const arrFiltroOrdenarAz  = operaciones.sort((a, b) => {
            if (a.descripcion.toLowerCase() < b.descripcion.toLowerCase()){
            return -1  
        }
        })
        localStorage.setItem('operacionCategoria',arrFiltroOrdenarAz)
        operacionCategoria = localStorage.setItem('operacionCategoria',JSON.stringify(arrFiltroOrdenarAz))
        pintarOperaciones(arrFiltroOrdenarAz); 
    }
    if(e.target.value === 'Z/A'){
        const arrFiltroOrdenarZa  = operaciones.sort((a, b) => {
    if (a.descripcion.toLowerCase() > b.descripcion.toLowerCase()){
        return -1 
    }
    })
        localStorage.setItem('operacionCategoria',arrFiltroOrdenarZa)
        operacionCategoria = localStorage.setItem('operacionCategoria',JSON.stringify(arrFiltroOrdenarZa))
        pintarOperaciones(arrFiltroOrdenarZa); 
    }
})
operacionCategoria = [{...operaciones}]


//*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
//                              CATEGORIAS
//*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*


let objetoCategorias = JSON.parse(localStorage.getItem('categorias')) || [
    {
    categoria: 'Comida',
    id: uuidv4(),
    },
    {
    categoria: 'Servicios',
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
    categoria: 'Transporte',
    id: uuidv4(),
    },
    {
    categoria:'Trabajo',
    id: uuidv4(),
    }
  
];

//*****************************
// GENERAR SELECTS CATEGORIA
//*****************************

// ME FALTA QUE SE ACTUALICE LOS SELECT CUANDO EDITO CATEGORIA

const generarSelectCategorias = ()=>{
    const selects = document.getElementsByClassName('categorias-select');
   
    for(let i = 0; i < selects.length; i++){
        const select = selects[i];
        // select.innerHTML =''
        if(select.classList.contains('filtro-categoria')){
            select.innerHTML ='<option value="Todas">Todas</option>'
        }else if (select.classList.contains('categorias-select-operaciones')){
            select.innerHTML =''
        }
        for(let j = 0; j < objetoCategorias.length; j++){
            select.innerHTML += `<option value=${objetoCategorias[j].categoria}>${objetoCategorias[j].categoria}</option>`
        
        }
    }
   
};


//******************
// PANEL CATEGORIA
//******************

const inputAgregarCategoria = document.getElementById('input-agregar-categoria');
const btnAgregarCategoria = document.getElementById('btn-agregar-categoria');

btnAgregarCategoria.addEventListener('click', () => {
    if(inputAgregarCategoria.value.trim().length === 0){
        return
    };

    const categoriaAdicional = {
        categoria: inputAgregarCategoria.value,
        id: uuidv4()
    };
    objetoCategorias.push(categoriaAdicional);

    inputAgregarCategoria.value = '';
    localStorage.setItem('categorias', JSON.stringify(objetoCategorias));
    objetoCategorias = JSON.parse(localStorage.getItem('categorias'));

    pintarPanelCategoria(objetoCategorias);
    generarSelectCategorias(objetoCategorias);
});




const pintarPanelCategoria = arr =>{
    let str = '';
    arr.forEach((objetoCategoria) =>{
        const {id, categoria} = objetoCategoria;
        str += `
            <div class="d-flex bd-highlight mb-3">
            <div class="me-auto"><span class="p-2 bd-highligh btn-titulo-categorias">${categoria}</span></div>
            <button type="button" class="p-2 bd-highlight btn btn-link btn-categoria-editar text-decoration-none link-secondary" data-id=${id}>Editar</button>
            <button type="button" class="p-2 bd-highlight btn btn-link btn-categoria-eliminar text-decoration-none link-secondary" data-id=${id}>Eliminar</button>  
        </div>` 
    });
            

    document.getElementById('pintar-categorias').innerHTML = str;


    const btnEliminarCategoria = document.querySelectorAll('.btn-categoria-eliminar');
    const btnEditarCategoria = document.querySelectorAll('.btn-categoria-editar');

    btnEliminarCategoria.forEach(btn =>{
        btn.addEventListener('click', (e) =>{
        const eliminarCategoria = objetoCategorias.filter(categoria => categoria.id !== e.target.dataset.id)
        localStorage.setItem('categorias',JSON.stringify(eliminarCategoria));
        objetoCategorias = JSON.parse(localStorage.getItem('categorias'));
        pintarPanelCategoria(objetoCategorias);
        generarSelectCategorias(objetoCategorias)

    })
    })

    btnEditarCategoria.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            containerCategorias.classList.add('d-none');
            categoriaParaEditar.classList.remove('d-none');
            const editarCategorias = objetoCategorias.filter(categoria => categoria.id === e.target.dataset.id)

            editarCategorias.forEach((element) =>{
                id = element.id
                inputAgregarCategoriaEditada.value = element.categoria
                
            })
        })
    })  
};

const agregarCategoriaEditada = (objetoCategorias) =>{
    btnAgregarCategoriaEditar.addEventListener('click', () =>{
        objetoCategorias.forEach((element)=>{
            const id = element.id
         
        })
          const categoriaEditada = {
              id: id,
            categoria: inputAgregarCategoriaEditada.value,
        }

        containerCategorias.classList.remove('d-none');
        categoriaParaEditar.classList.add('d-none');


        const agregarCategoriaEditada = objetoCategorias.map((objetoCategorias) =>
        objetoCategorias.id === id
        ? categoriaEditada
        : objetoCategorias
        )

        localStorage.setItem('categorias',JSON.stringify(agregarCategoriaEditada));
        objetoCategorias = JSON.parse(localStorage.getItem('categorias'));
       // generarSelectCategorias(objetoCategorias);
        pintarPanelCategoria(objetoCategorias); 

    })
}
    


btnCancelarCategoriaEditar.addEventListener('click', () =>{
    containerCategorias.classList.remove('d-none');
    categoriaParaEditar.classList.add('d-none');
})


//*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
//                    ******************
//                      PANEL REPORTES
//                    ******************
//***********************
//RESUMEN
//***********************

const resumenReporteMayorGanancia = (operaciones) =>{
    // categoria con mayor ganancia
    const resumenFiltroGanancia = operaciones.filter(operacion =>
        operacion.tipo === 'Ganancia' )

    const mayorGanancia = resumenFiltroGanancia.sort(function(a, b){return b.monto - a.monto})
    document.getElementById('id-categoria-mayor-ganancia').innerHTML = `<div class="btn-titulo-categorias p-2">${mayorGanancia[0].categoria}</div> ` 
    document.getElementById('id-monto-mayor-ganancia').innerHTML =  `<div>+$${mayorGanancia[0].monto}</div>`
};


const resumenReporteMayorGasto = (operaciones) =>{
    //CATEGORIA CON MAYOR GASTO
    const resumenFiltroGasto = operaciones.filter(operacion =>
    operacion.tipo === 'Gasto')

    const mayorGasto = resumenFiltroGasto.sort(function(a, b){return b.monto - a.monto})
    document.getElementById('id-categoria-mayor-gasto').innerHTML = `<div class="btn-titulo-categorias p-2">${mayorGasto[0].categoria}</div> ` 
    document.getElementById('id-monto-mayor-gasto').innerHTML =  `<div>-$${mayorGasto[0].monto}</div>`

}; 

const mesMayorOperacion = arr => { 

    const mayorMonto = operaciones.sort((a, b) => 
    (b.monto - a.monto))

    const mayorGanancia = mayorMonto.filter((operacion) => 
    operacion.tipo === 'Ganancia')

    const mayorGasto = mayorMonto.filter((operacion) => 
    operacion.tipo === 'Gasto')


    document.getElementById('id-mes-mayor-ganancia').innerHTML = `${mayorGanancia[0].fecha.split('-')[1]}`
    document.getElementById('id-mes-manto-ganacia').innerHTML = `+$${mayorGanancia[0].monto}`


    document.getElementById('id-mes-mayor-gasto').innerHTML = `${mayorGasto[0].fecha.split('-')[1]}`
    document.getElementById('id-mes-manto-gasto').innerHTML = `-$${mayorGasto[0].monto}`

}




//***********************
// TOTALES POR CATEGORIA
//***********************


const totalPorCategoria = (operaciones, categorias) =>{  
    let str = '';
    categorias.forEach(categorias => {  
      let arrSoloConMontos = [];  
        const filtraPorCategoria =  operaciones.filter(operacion => 
        operacion.categoria === categorias.categoria)
           
        filtraPorCategoria.forEach((operacion)=>{
            if( operacion.monto !== 0 ){
                arrSoloConMontos.push(operacion)
            }

            const filtradoGananciaCategoria = arrSoloConMontos.filter(operacion => 
            operacion.tipo === 'Ganancia').reduce((count, current) => count + Number(current.monto) ,0)

            const filtradoGastoCategoria = arrSoloConMontos.filter(operacion => 
            operacion.tipo === 'Gasto').reduce((count, current) => count + Number(current.monto) ,0)
       
            str += `
                <tr>
                    <td scope="row">${categorias.categoria}</td>
                    <td class="text-success ">+$${filtradoGananciaCategoria}</td>
                    <td class="text-danger ">-$${filtradoGastoCategoria}</td>
                    <td  id="total-mes-id">$${(filtradoGananciaCategoria - filtradoGastoCategoria)}</td>   
                </th>`  
    
        })

    })

    document.getElementById('reporte-por-categoria').innerHTML = str
    pintarOperaciones(operaciones);

}
totalPorCategoria(operaciones, objetoCategorias)

//******************
// TOTALES POR MES
//******************
const totalPorMes = arr => { 
    let str = ''
    const doceMeses = [...new Set(arr.map(operacion => operacion.fecha.split('-')[1]))]
    for (let i = 0; i < doceMeses.length; i++) {
    //une las operaciones en un objeto por mes
    const objetoPorMes = arr.filter(operacion => 
        operacion.fecha.split('-')[1] === doceMeses[i])
        const filtradoGanancia = objetoPorMes.filter(operacion => 
            operacion.tipo === 'Ganancia').reduce((count, current) => count + Number(current.monto), 0)
        const filtradoGasto = objetoPorMes.filter(operacion => 
            operacion.tipo === 'Gasto').reduce((count, current) => count + Number(current.monto), 0)

    str += `
    <tr>
        <td scope="row">${objetoPorMes[0].fecha.split('-')[1]}</td>
        <td class="text-success" >+$${filtradoGanancia}</td>
        <td class="text-danger ">-$${filtradoGasto}</td>
        <td>$${(filtradoGanancia - filtradoGasto)}</td>  
    </th>` 

    document.getElementById('reporte-por-mes').innerHTML = str



}
}
//totalPorMes(operaciones)




//*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*

const inicializar = () => {
    fechaInput.valueAsDate = new Date ()
    fechaInputFiltro.valueAsDate = new Date ()
    panelEditarFechaInput.valueAsDate = new Date ()
    generarMonto();
    generarSelectCategorias();
    generarOrdenarOperaciones();
    mostrarOperaciones(operaciones);
    pintarOperaciones(operaciones);
    agregarCategoriaEditada(objetoCategorias)

}

window.onload = inicializar

