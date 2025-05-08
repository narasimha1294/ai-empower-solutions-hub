
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ExecutiveCoaching from "./pages/ExecutiveCoaching";
import HomeContent from "./pages/AboutHome";
import FooterNavBar from "./pages/FooterNavBar";
import HeaderNavbar from "./pages/HeaderNavBar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* <Toaster /> */}
      {/* <Sonner /> */}
      <HeaderNavbar/>
      {/* <Index /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/executive-coaching" element={<ExecutiveCoaching />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
      <FooterNavBar/>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
