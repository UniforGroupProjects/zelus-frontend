import { Navbar } from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col w-full">
      <Navbar />

      <main className="flex-1 p-8 flex flex-col items-center w-full">
        {children}
      </main>
    </div>
  );
}