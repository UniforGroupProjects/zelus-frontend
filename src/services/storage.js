import { supabase } from "./supabaseClient";

const BUCKET = "zelus-images";

// 1) Upload (retorna o path)
export async function uploadImage({ file, userId }) {
  if (!file) throw new Error("Selecione um arquivo.");
  if (!file.type.startsWith("image/")) throw new Error("Envie uma imagem.");
  if (file.size > 5 * 1024 * 1024) throw new Error("Máx. 5MB.");

  const ext = file.name.split(".").pop()?.toLowerCase() || "png";
  const fileName = `${crypto.randomUUID()}.${ext}`;

  // Sugestão: guardar em pasta por usuário
  const path = `${userId}/${fileName}`;

  const { data, error } = await supabase.storage
    .from(BUCKET)
    .upload(path, file, {
      contentType: file.type,
      cacheControl: "3600",
      upsert: false,
    });

  if (error) throw error;

  return data.path; // <- isso é o que você salva no banco
}

// 2A) URL pública (bucket público)
export function getPublicImageUrl(path) {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

// 2B) URL assinada (bucket privado)
export async function getSignedImageUrl(path, expiresIn = 600) {
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUrl(path, expiresIn);

  if (error) throw error;
  return data.signedUrl;
}