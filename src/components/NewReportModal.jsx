import React from "react";
import { ImageUploader } from "./ImageUploader";

export function NewReportModal({ open, onClose, userId }) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "grid",
        placeItems: "center",
        zIndex: 999,
        padding: 16
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          width: "min(560px, 100%)",
          padding: 20
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0 }}>Nova Denúncia</h2>
          <button onClick={onClose} style={{ fontSize: 18, cursor: "pointer" }}>✕</button>
        </div>

        <p style={{ color: "#555" }}>
          Envie uma foto do problema para registrar sua denúncia.
        </p>

        <ImageUploader
          userId={userId}
          mode="public" // troque para "private" se seu bucket for privado
          onUploaded={({ path, url }) => {
            console.log("✅ Upload OK");
            console.log("path (salvar no banco):", path);
            console.log("url (para exibir):", url);

            // aqui é onde você salva no banco depois (denúncia)
            // exemplo: insertReport({ userId, image_path: path, ... })
          }}
        />
      </div>
    </div>
  );
}
``