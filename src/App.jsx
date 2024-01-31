import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ChatsWhatsApp } from "./pages/services/ChatsWhatsApp/ChatsWhatsApp.jsx";
import { AppProvider } from "./context/useContext.jsx";
import { Login } from "./pages/auth/Login/Login.jsx";
import { Sucursales } from "./pages/services/Sucursales/Sucursales.jsx";
import { Prompts} from "./pages/services/Prompt/Prompts.jsx";
import { AgregarPrompt } from "./pages/services/Prompt/AgregarPrompt.jsx";
import { EditarPrompt } from "./pages/services/Prompt/EditarPrompt.jsx";
import { EditarSucursal } from "./pages/services/Sucursales/EditarSucursal.jsx";
import { Configuraciones } from "./pages/services/Configurations/Configuraciones.jsx";
import { Integrations } from "./pages/services/Integrations/Integrations.jsx";
import { ConectSocialM } from "./components/SocialMedia/ConectSocialM.jsx";
import { AddIntegration } from "./pages/services/Integrations/AddIntegration.jsx";
import { AgregarSucursal } from "./pages/services/Sucursales/AgregarSucursal.jsx";
import {Parameters} from './pages/services/Parameters/Parameters.jsx'

function App() {
  return (
    <main className="max-h-full flex flex-col">
      <AppProvider>
        <Routes>
          {/*Ingreso de usuario*/}
          <Route path="/chatswhatsapp" element={<ChatsWhatsApp />} />
          <Route path="/login" element={<Login />} />

          {/*Prompts*/}
          <Route path="/prompts" element={<Prompts />} />
          <Route path="/agregar-prompt" element={<AgregarPrompt />} />
          <Route path="/editar-prompt" element={<EditarPrompt />} />

          {/*Sucursales*/}
          <Route path="/sucursales" element={<Sucursales />} />
          <Route path="/agregar-sucursal" element={<AgregarSucursal />} />
          <Route path="/editar-sucursal" element={<EditarSucursal />} />

          {/*Configuraciones*/}
          <Route path="/home" element={<Configuraciones />} />

          {/*Parametros*/}
          <Route path="/parametros" element={<Parameters />} />

          {/*Integraciones*/}
          <Route path="/integraciones" element={<Integrations />} />
          <Route path="/addintegrations" element={<AddIntegration />} />
          <Route path="/conectsocialmedia" element={<ConectSocialM />} />
        </Routes>
      </AppProvider>
    </main>
  );
}

export default App;
