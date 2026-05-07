import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Phone, MapPin, User, MessageSquare, Send, Image as ImageIcon, CheckCircle2, AlertTriangle, Sparkles, Wrench } from "lucide-react";
import { submitFormWithFiles, compressImage } from "@/lib/submit-form";
import { useToast } from "@/hooks/use-toast";

/**
 * Formulaire dépannage avec photo : permet au client de prendre/uploader
 * jusqu'à 4 photos de sa panne (avec compression auto), de décrire le
 * problème et d'envoyer le tout à ECO CVC.
 *
 * Avantage commercial : pré-diagnostic à distance avant déplacement,
 * intervention plus rapide et plus efficace.
 */

const MAX_PHOTOS = 4;

const PhotoDepannageForm = () => {
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);

  const [photos, setPhotos] = useState<{ file: File; preview: string }[]>([]);
  const [form, setForm] = useState({ name: "", phone: "", city: "", marque: "", description: "", urgence: "rapide" as "urgent" | "rapide" | "non-urgent" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [compressing, setCompressing] = useState(false);

  const handleFiles = async (files: FileList | null) => {
    if (!files) return;
    const remaining = MAX_PHOTOS - photos.length;
    const arr = Array.from(files).slice(0, remaining);
    setCompressing(true);
    const compressed: { file: File; preview: string }[] = [];
    for (const f of arr) {
      try {
        const small = await compressImage(f);
        compressed.push({ file: small, preview: URL.createObjectURL(small) });
      } catch {
        compressed.push({ file: f, preview: URL.createObjectURL(f) });
      }
    }
    setPhotos((p) => [...p, ...compressed]);
    setCompressing(false);
    // reset input pour permettre la même photo à nouveau
    if (inputRef.current) inputRef.current.value = "";
  };

  const removePhoto = (i: number) => {
    URL.revokeObjectURL(photos[i].preview);
    setPhotos((p) => p.filter((_, j) => j !== i));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone || !form.description) {
      toast({ title: "Champs requis", description: "Téléphone et description sont obligatoires.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const r = await submitFormWithFiles({
        subject: `[eco cvc · DÉPANNAGE PHOTO] ${form.urgence === "urgent" ? "🚨 URGENT" : "Demande"} — ${form.city || "?"} (${photos.length} photo${photos.length > 1 ? "s" : ""})`,
        fields: {
          source: "depannage_photo",
          urgence: form.urgence,
          nom: form.name || "—",
          telephone: form.phone,
          ville: form.city || "—",
          marque_appareil: form.marque || "—",
          description_panne: form.description,
          nombre_photos: photos.length,
        },
        files: photos.map((p) => p.file),
      });
      if (r.ok) {
        setSent(true);
        toast({
          title: "Photos reçues",
          description: form.urgence === "urgent"
            ? "Un technicien vous rappelle dans les 30 minutes."
            : "Un technicien vous rappelle sous 4h ouvrées.",
        });
      } else {
        throw new Error(r.message || "Erreur d'envoi");
      }
    } catch (err) {
      toast({
        title: "Problème d'envoi",
        description: "Photos trop lourdes ? Appelez-nous directement au 07 58 45 99 00.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-brand-green/10 rounded-3xl border-2 border-brand-green/30 p-8 text-center max-w-2xl">
        <div className="w-16 h-16 mx-auto rounded-full bg-brand-green text-white flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display text-2xl font-bold mb-3">Photos reçues 📸</h3>
        <p className="text-foreground/85 leading-relaxed mb-5">
          {form.urgence === "urgent" ? (
            <>Un technicien examine vos photos et <strong>vous rappelle dans les 30 minutes</strong>. Restez près du téléphone.</>
          ) : (
            <>Un technicien examine vos photos et vous rappelle sous 4h ouvrées avec un pré-diagnostic et une proposition d'intervention.</>
          )}
        </p>
        <a href="tel:+33758459900" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition-colors">
          <Phone className="w-4 h-4" /> Préférer appeler — 07 58 45 99 00
        </a>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border-2 border-brand-blue/15 p-6 md:p-8 max-w-2xl shadow-xl">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
          <Wrench className="w-5 h-5" />
        </div>
        <h2 className="font-display text-xl md:text-2xl font-bold">Décrivez votre panne avec photos</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
        Prenez 1 à 4 photos (écran avec code erreur, unité extérieure, fuite…) — un technicien vous rappelle après pré-diagnostic.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Bouton photo */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">
            Photos ({photos.length}/{MAX_PHOTOS})
          </label>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            capture="environment"
            multiple
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={photos.length >= MAX_PHOTOS || compressing}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-bluedark text-white font-bold hover:shadow-lg disabled:opacity-50 inline-flex items-center justify-center gap-3 transition-all"
          >
            <Camera className="w-5 h-5" />
            {compressing ? "Compression…" : photos.length === 0 ? "Prendre une photo" : photos.length >= MAX_PHOTOS ? "Maximum atteint" : "Ajouter une photo"}
          </button>

          <AnimatePresence>
            {photos.length > 0 && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
                {photos.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative aspect-square">
                    <img src={p.preview} alt={`Photo ${i + 1}`} className="w-full h-full object-cover rounded-xl border border-border" />
                    <button
                      type="button"
                      onClick={() => removePhoto(i)}
                      aria-label={`Retirer photo ${i + 1}`}
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center shadow-md hover:bg-red-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-[11px] text-muted-foreground mt-2 leading-snug flex gap-1.5">
            <Sparkles className="w-3 h-3 mt-0.5 shrink-0" />
            Les photos sont compressées automatiquement (qualité préservée pour le diagnostic).
          </p>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">
            Description de la panne *
          </label>
          <div className="relative">
            <MessageSquare className="w-4 h-4 absolute left-3.5 top-3.5 text-muted-foreground" />
            <textarea
              required
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Que se passe-t-il ? Code erreur affiché, bruit, fuite, ne chauffe plus… Soyez aussi précis que possible."
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15 resize-none"
            />
          </div>
        </div>

        {/* Urgence */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">Niveau d'urgence</label>
          <div className="grid grid-cols-3 gap-2">
            <UrgenceBtn active={form.urgence === "urgent"} onClick={() => setForm({ ...form, urgence: "urgent" })} color="red">
              🚨 Urgent
            </UrgenceBtn>
            <UrgenceBtn active={form.urgence === "rapide"} onClick={() => setForm({ ...form, urgence: "rapide" })} color="amber">
              ⚡ Rapide
            </UrgenceBtn>
            <UrgenceBtn active={form.urgence === "non-urgent"} onClick={() => setForm({ ...form, urgence: "non-urgent" })} color="blue">
              📅 Pas urgent
            </UrgenceBtn>
          </div>
          {form.urgence === "urgent" && (
            <p className="text-xs text-red-600 mt-2 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              Rappel dans les 30 minutes en heures ouvrées.
            </p>
          )}
        </div>

        {/* Coordonnées */}
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="relative">
            <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Votre nom (optionnel)"
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15"
            />
          </div>
          <div className="relative">
            <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Téléphone *"
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="relative">
            <MapPin className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              placeholder="Ville"
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15"
            />
          </div>
          <input
            value={form.marque}
            onChange={(e) => setForm({ ...form, marque: e.target.value })}
            placeholder="Marque appareil (Daikin, Mitsubishi…)"
            className="w-full px-4 py-3 rounded-xl border border-border focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/15"
          />
        </div>

        <button
          type="submit"
          disabled={loading || compressing || !form.phone || !form.description}
          className="w-full py-3.5 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:bg-slate-300 inline-flex items-center justify-center gap-2 text-base shadow-lg"
        >
          {loading ? "Envoi…" : <>Envoyer photos + demande <Send className="w-4 h-4" /></>}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          Préférer appeler ?{" "}
          <a href="tel:+33758459900" className="text-brand-blue font-semibold underline">07 58 45 99 00</a>
        </p>
      </form>
    </div>
  );
};

const UrgenceBtn = ({
  active,
  onClick,
  children,
  color,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  color: "red" | "amber" | "blue";
}) => {
  const styles = {
    red: active ? "bg-red-500 text-white border-red-500" : "border-border bg-white hover:border-red-300",
    amber: active ? "bg-amber-500 text-white border-amber-500" : "border-border bg-white hover:border-amber-300",
    blue: active ? "bg-brand-blue text-white border-brand-blue" : "border-border bg-white hover:border-brand-blue/30",
  };
  return (
    <button type="button" onClick={onClick} className={`py-2.5 rounded-xl border-2 font-semibold text-sm transition-colors ${styles[color]}`}>
      {children}
    </button>
  );
};

export default PhotoDepannageForm;
