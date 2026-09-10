import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { Landing } from '@/pages/Landing';
import { Work } from '@/pages/Work';
import { ProjectDetail } from '@/pages/ProjectDetail';
import { Contact } from '@/pages/Contact';
import { NotFound } from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Landing />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<ProjectDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
