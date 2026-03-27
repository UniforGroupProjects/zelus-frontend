import ImageUploader from "../components/ImageUploader";

export default function Profile() {
  // Exemplo: você precisa ter um userId real
  // (pode vir do auth do Supabase ou do seu sistema)
  const userId = "SEU_USER_ID_AQUI";

  return (
    <div style={{ padding: 24 }}>
      <h2>Upload de imagem</h2>

      <ImageUploader
        userId={userId}
        mode="public" // troque para "private" se o bucket for privado
        onUploaded={({ path, url }) => {
          console.log("✅ UPLOAD OK");
          console.log("path (salvar no banco):", path);
          console.log("url (para exibir):", url);

          // Aqui é onde você chamaria sua função de salvar no banco, ex:
          // saveAvatarPath(userId, path)
        }}
      />
    </div>
  );
}