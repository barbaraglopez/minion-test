import "./Navbar.css";

export const Navbar = ({imagen, displayButton, displayInput, funcionButton, nombre, eventoFuncion, displayButtonAtras, funcionButtonAtras, funcionSearchBar}) =>{
  return (
    <div className="w-full h-30 flex items-center justify-between p-10 max-md:p-3">
      <div className="flex items-center">
        <div className={`${displayButtonAtras} w-5 h-5`}>
          <button onClick={() => funcionButtonAtras()} className="boton-atras">
            {" "}
            {`\<`}{" "}
          </button>
        </div>
        <div className="pl-10">
          <img src={imagen} className="image" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-5 ml-5">
          <input
            onChange={(e) => funcionSearchBar(e)}
            placeholder="Buscar prompts"
            className={`pl-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ${displayInput} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-md:hidden`}
          />
        </div>
        <button
          onClick={() => eventoFuncion()}
          className={`boton-large boton-primario h-min mr-5 ${displayButton} text-sm p-2 font-bold text-zinc-200 max-sm:w-36 max-sm:p-0 max-sm:font-normal max-sm:w-24`}
        >
          {funcionButton}
        </button>
        <div className=" self-end bg-gris-claro rounded-full flex items-center w-48 max-lg:hidden">
          <img src="/img/Profile.svg" className="mr-2" />
          <div className="display">
            <p className="text-sm font-medium leading-6 text-gray-900">
              {nombre ?? "Sara Hebe"}
            </p>
            <p className="text-indigo-700 text-sm">Administrador</p>
          </div>
        </div>
      </div>
    </div>
  );
};
