import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BowlsGallery from "./pages/BowlsGallery";
import CuttingBoardsGallery from "./pages/CuttingBoardsGallery";
import DecorativeGallery from "./pages/DecorativeGallery";
import ToolsGallery from "./pages/ToolsGallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="scroll-smooth">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gallery/bowls" element={<BowlsGallery />} />
            <Route path="/gallery/cutting-boards" element={<CuttingBoardsGallery />} />
            <Route path="/gallery/decorative" element={<DecorativeGallery />} />
            <Route path="/gallery/tools" element={<ToolsGallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
