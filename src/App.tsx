import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import RequireAdmin from "@/components/RequireAdmin";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index.tsx";
import ArtsPage from "./pages/ArtsPage.tsx";
import MusicPage from "./pages/MusicPage.tsx";
import MusicConnectPage from "./pages/MusicConnectPage.tsx";
import ResumePage from "./pages/ResumePage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import PhotographyPage from "./pages/PhotographyPage.tsx";
import ArticlesPage from "./pages/ArticlesPage.tsx";
import PsychologyPublicationsPage from "./pages/PsychologyPublicationsPage.tsx";
import MusicAndBrainPage from "./pages/MusicAndBrainPage.tsx";
import MusingsPage from "./pages/MusingsPage.tsx";
import MusingPostPage from "./pages/MusingPostPage.tsx";
import AdminLoginPage from "./pages/admin/AdminLoginPage.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import AdminPostEditor from "./pages/admin/AdminPostEditor.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const WithNavbar = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    {children}
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/music" element={<WithNavbar><MusicPage /></WithNavbar>} />
            <Route path="/arts" element={<WithNavbar><ArtsPage /></WithNavbar>} />
            <Route path="/music-connect" element={<WithNavbar><MusicConnectPage /></WithNavbar>} />
            <Route path="/resume" element={<WithNavbar><ResumePage /></WithNavbar>} />
            <Route path="/photography" element={<WithNavbar><PhotographyPage /></WithNavbar>} />
            <Route path="/gallery" element={<WithNavbar><GalleryPage /></WithNavbar>} />
            <Route path="/psychology-publications" element={<WithNavbar><PsychologyPublicationsPage /></WithNavbar>} />
            <Route path="/music-and-brain" element={<WithNavbar><MusicAndBrainPage /></WithNavbar>} />
            <Route path="/articles" element={<WithNavbar><ArticlesPage /></WithNavbar>} />
            <Route path="/musings" element={<WithNavbar><MusingsPage /></WithNavbar>} />
            <Route path="/musings/:slug" element={<WithNavbar><MusingPostPage /></WithNavbar>} />

            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route
              path="/admin"
              element={
                <RequireAdmin>
                  <AdminDashboard />
                </RequireAdmin>
              }
            />
            <Route
              path="/admin/posts/new"
              element={
                <RequireAdmin>
                  <AdminPostEditor />
                </RequireAdmin>
              }
            />
            <Route
              path="/admin/posts/:id/edit"
              element={
                <RequireAdmin>
                  <AdminPostEditor />
                </RequireAdmin>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
