import { useState } from "react";
import { uploadImage, getPublicImageUrl, getSignedImageUrl } from "../services/storage";

export default function ImageUploader({
  userId,
  mode = "public", // "public" ou "private"
  onUploaded, // callback opcional: recebe { path, url }
}) {
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [pathSaved, setPathSaved] = useState(null);
  const [error, setError] = useState(null);

  async function handleChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setError(null);
      setLoading(true);

      // 1) upload -> retorna path
      const path = await uploadImage({ file, userId });
      setPathSaved(path);

      // 2) gera URL para exibir (depende do modo)
      let url;
      if (mode === "public") {
        url = getPublicImageUrl(path);
      } else {
        url = await getSignedImageUrl(path, 600);
      }

      setPreviewUrl(url);

      // 3) callback para você salvar no banco etc.
      onUploaded?.({ path, url });
    } catch (err) {
      setError(err?.message || "Erro no upload");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 360 }}>
      <input type="file" accept="image/*" onChange={handleChange} />

      {loading && <p>Enviando...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {pathSaved && (
        <small>
          <b>Path salvo:</b> {pathSaved}
        </small>
      )}

      {previewUrl && (
        <img
          src={previewUrl}
          alt="Preview"
          style={{ width: 240, borderRadius: 12, border: "1px solid #ddd" }}
        />
      )}
    </div>
  );
}