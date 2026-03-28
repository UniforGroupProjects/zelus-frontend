export default function FeatureCard({ icon, title, text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-8 rounded-xl shadow-md text-center cursor-pointer border-t-4 border-green-700 hover:-translate-y-1 transition"
    >
      <span className="text-4xl block mb-4">{icon}</span>

      <h3 className="text-lg font-bold text-green-700 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm">
        {text}
      </p>
    </div>
  );
}