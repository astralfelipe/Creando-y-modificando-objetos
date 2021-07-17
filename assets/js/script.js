//Objeto Pacientes
function Paciente(nombre,edad,rut,diagnostico){
    let _nombre = nombre;
    let _edad = edad || "Sin edad especificada";
    let _rut = rut;
    let _diagnostico = diagnostico || "Sin diagnóstico especificado";

    Object.defineProperty(this,"_getNombre",{
        get:function(){
            return _nombre;
        }
    })

    Object.defineProperty(this,"_setNombre",{
        set:function(new_nombre){
            return _nombre = new_nombre;
        }
    })

    Object.defineProperty(this,"_getEdad",{
        get:function(){
            return _edad;
        }
    })

    Object.defineProperty(this,"_setEdad",{
        set:function(new_edad) {
            return _edad = new_edad;
        }
    })

    Object.defineProperty(this,"_getRut",{
        get:function(){
            return _rut;
        }
    })

    Object.defineProperty(this,"_setRut",{
        set:function(new_rut){
            return _rut = new_rut;
        }
    })

    Object.defineProperty(this,"_getDiagnostico",{
        get:function(){
            return _diagnostico;
        }
    })

    Object.defineProperty(this,"_setDiagnostico",{
        set:function(new_diagnostico){
            return _diagnostico = new_diagnostico;
        }
    })
}

Paciente.prototype.getNombre = function() {
    return this._getNombre;
}

Paciente.prototype.setNombre = function(new_nombre){
    return this._setNombre = new_nombre;
}

Paciente.prototype.getEdad = function() {
    return this._getEdad;
}

Paciente.prototype.setEdad = function(new_edad){
    return this._setEdad = new_edad;
}

Paciente.prototype.getRut = function() {
    return this._getRut;
}

Paciente.prototype.setRut = function(new_rut){
    return this._setRut = new_rut;
}

Paciente.prototype.getDiagnostico = function() {
    return this._getDiagnostico;
}

Paciente.prototype.setDiagnostico = function(new_diagnostico){
    return this._setDiagnostico = new_diagnostico;
}

var paciente1 = new Paciente("Pedro","33","11.111.111-1","Alergia a los michis");
var paciente2 = new Paciente("Maria","25","22.222.222-2","Fobia al agua (es otaku)");
var paciente3 = new Paciente("José","45","33.333.333-3","Covid-19 (ya valió)");
var paciente4 = new Paciente("Macarena","50","44.444.444-4","Peste bubónica");

//Consola Paciente 1
console.log(paciente1.getNombre());
console.log(paciente1.getEdad());
console.log(paciente1.getRut());
console.log(paciente1.getDiagnostico());

//Consola Paciente 2
console.log(paciente2.getNombre());
console.log(paciente2.getEdad());
console.log(paciente2.getRut());
console.log(paciente2.getDiagnostico());

//Consola Paciente 3
console.log(paciente3.getNombre());
console.log(paciente3.getEdad());
console.log(paciente3.getRut());
console.log(paciente3.getDiagnostico());

//Consola Paciente 4
console.log(paciente4.getNombre());
console.log(paciente4.getEdad());
console.log(paciente4.getRut());
console.log(paciente4.getDiagnostico());

//Objeto Consultorio
function Consultorio(nombre,pacientes){
    var _nombre = nombre;
    var _pacientes = pacientes || [];

    Object.defineProperty(this,"_getNombre",{
        get:function(){
            return _nombre;
        }
    })

    Object.defineProperty(this,"_setNombre",{
        set:function(new_nombre){
            return _nombre = new_nombre;
        }
    })

    Object.defineProperty(this,"_getPacientes",{
        get:function(){
            return _pacientes;
        }
    })

    Object.defineProperty(this,"_addPaciente",{
        set:function(paciente){
            return _pacientes.push(paciente);
        }
    })

    Object.defineProperty(this,"_addPacientes",{
        set:function(pacientes){
            pacientes.forEach(element => {
                return _pacientes.push(element);
            });
        }
    })

    Object.defineProperty(this,"_setPacientes",{
        set:function(new_pacientes){
            return _pacientes = new_pacientes;
        }
    })
}

Consultorio.prototype.getNombre = function(){
    return this._getNombre;
}

Consultorio.prototype.setNombre = function(nombre){
    return this._setNombre = nombre;
}

Consultorio.prototype.addPaciente = function(paciente) {
    return this._addPaciente = paciente;
}

Consultorio.prototype.addPacientes = function(pacientes){
    return this._addPacientes = pacientes;
}

Consultorio.prototype.getPacientes = function(){
    return this._getPacientes;
}

Consultorio.prototype.buscar = function(nombre){
    // console.log(this._getPacientes)
    var resultado = this._getPacientes.filter(function(paciente){
        if (paciente.getNombre() == nombre){
            return paciente;
        }
    })
    if(resultado[0]!= undefined){
        alert(`Paciente ${resultado[0].getNombre()} encontrado`)
        return resultado[0];
    }
}

Consultorio.prototype.listar = function () {
    var pacientes = this.getPacientes();
    pacientes.forEach(paciente=>{
        document.write(`<p><strong>Nombre del paciente:</strong> ${paciente.getNombre()}, <strong>Edad:</strong> ${paciente.getEdad()}, <strong>Rut:</strong> ${paciente.getRut()}, <strong>Diagnóstico:</strong> ${paciente.getDiagnostico()}</p>`);
    })
}

var mi_consultorio = new Consultorio("Pokecenter (es gratis)");

mi_consultorio.addPaciente(paciente1);
mi_consultorio.addPaciente(paciente2);
mi_consultorio.addPaciente(paciente3);
mi_consultorio.addPaciente(paciente4);

var pacientes = mi_consultorio.getPacientes();

pacientes.forEach(paciente=>{
    paciente.getNombre()
})

var nombreBuscado = prompt('Ingrese nombre de paciente a buscar')
var pacienteEncontrado = mi_consultorio.buscar(nombreBuscado);

if(pacienteEncontrado != undefined){
    console.log(pacienteEncontrado.getNombre());
}
else{
    alert('Paciente no encontrado');
}

var listadoPacientes = mi_consultorio.listar();
