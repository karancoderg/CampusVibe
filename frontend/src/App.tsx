import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider, useApp } from "./context/AppContext";
import { queryClient } from "./lib/queryClient";
import Index from "./pages/Index";
import PostDetail from "./pages/PostDetail";
import EventDetail from "./pages/EventDetail";
import Communities from "./pages/Communities";
import Explore from "./pages/Explore";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import SavedPosts from "./pages/SavedPosts";
import Auth from "./pages/Auth";
import AuthCallback from "./pages/AuthCallback";
import NotFound from "./pages/NotFound";

const AppContent = () => {
  const { state, actions } = useApp();
  
  // Show loading while checking session
  if (state.sessionLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }
  
  if (!state.isAuthenticated) {
    return <Auth onAuthenticated={actions.login} />;
  }
  
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/event/:eventId" element={<EventDetail />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
