import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import EscritorioVirtual from "./pages/EscritorioVirtual";
import EscritorioVirtualRJ from "./pages/EscritorioVirtualRJ";
import PorQueAthena from "./pages/PorQueAthena";
import FaleConosco from "./pages/FaleConosco";
import AcaoSocial from "./pages/AcaoSocial";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/quem-somos" component={QuemSomos} />
      <Route path="/escritorio-virtual" component={EscritorioVirtual} />
      <Route path="/escritorio-virtual/rio-de-janeiro" component={EscritorioVirtualRJ} />
      <Route path="/por-que-athena-office" component={PorQueAthena} />
      <Route path="/fale-conosco" component={FaleConosco} />
      <Route path="/acao-social" component={AcaoSocial} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
