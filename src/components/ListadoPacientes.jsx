import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h1 className="font-black text-center text-black text-3xl">
            Listado Pacientes
          </h1>
          <p className="text-xl text-center mt-5 mb-10">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            );
          })}
          {/* Opción más aceptada será un map, siempre se debe enviar un valor único (key) */}
        </>
      ) : (
        <>
          <h1 className="font-black text-center text-black text-3xl">
            No hay pacientes
          </h1>
          <p className="text-xl text-center mt-5 mb-10">
            Agrega a tus pacientes {""}
            <span className="text-indigo-600 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
