import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Layanan from "./pages/Layanan.tsx";
import MengapaKami from "./pages/MengapaKami.tsx";
import Berita from "./pages/Berita.tsx";
import LaporForm from "./pages/LaporForm.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/mengapa-kami" element={<MengapaKami />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/lapor" element={<LaporForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
