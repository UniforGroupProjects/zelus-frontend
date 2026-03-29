export default function FeatureCard({ icon, title, text, onClick }) {
  return (
    <div
      onClick={onClick}
      
      style={{
        border: '1px solid #2e7d32',
      }}
      
      className="bg-white px-8 py-14 rounded-2xl shadow-lg text-center cursor-pointer hover:-translate-y-2 transition duration-300 flex flex-col items-center justify-start h-full"
    >
      <span className="text-6xl block" style={{ marginBottom: '40px' }}>
        {icon}
      </span>

      <h3 className="text-2xl font-bold text-[#2e7d32]" style={{ marginBottom: '30px' }}>
        {title}
      </h3>

      <p className="text-gray-500 text-lg leading-relaxed mt-auto">
        {text}
      </p>
    </div>
  );
}