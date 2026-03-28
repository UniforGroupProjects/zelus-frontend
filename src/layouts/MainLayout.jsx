import { Navbar } from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Navbar />

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}