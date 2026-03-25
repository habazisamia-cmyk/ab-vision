import { motion, useScroll, useTransform } from "motion/react";
import { ShoppingBag, Sparkles, Gift, Eye, Phone, Heart, Star, ChevronDown, Camera, CheckCircle2, X } from "lucide-react";
import { useRef, useState } from "react";
import { AnimatePresence } from "motion/react";

const categories = [
  {
    id: 1,
    title: "Lunettes de Soleil",
    mainImg: "/IMG_5518.png",
    models: ["/IMG_5516.jpeg", "/IMG_5518.png", "/IMG_5520.png", "/IMG_5528.png", "/IMG_5529.png"]
  },
  {
    id: 2,
    title: "Caches Téléphone",
    mainImg: "/IMG_5491.jpeg",
    models: ["/IMG_5491.jpeg", "/IMG_5493.jpeg", "/IMG_5494.jpeg", "/IMG_5496.jpeg", "/IMG_5497.jpeg", "/IMG_5495.jpeg", "/IMG_5490.jpeg","/IMG_5505.png","/IMG_5507.png","/IMG_5506.jpeg"]
  },
  {
    id: 3,
    title: "Bracelets Assortis",
    mainImg: "/95E59EB0-E14D-43F8-A31D-56724DF3F3AF.png",
    models: ["/559637FB-53E5-4783-9FD5-1F034EE75174.png", "/AF05BCFA-026D-4743-A33C-6C5328A4C7CD.png", "/64740E87-4D15-494A-A067-D69D6A4AC77D.png","/70DB6586-E126-4533-851D-D09C7D6BD973.png","/IMG_5453.jpeg","/IMG_5459.jpeg","/IMG_5460.jpeg"]
  },
  {
    id: 4,
    title: "Bagues de Luxe",
    mainImg: "/C0174624-0409-4EB7-9426-24B76EB73EA5.png",
    models: ["/DD40F975-4D47-4538-BA79-F9767A5182B8.png", "/IMG_5393.jpeg", "/B86A1C32-B1C5-40BF-ADA8-8B5C80DA8332.png","/4DE64372-2654-47EF-8D5C-4297A7A52BA9.png","/C0174624-0409-4EB7-9426-24B76EB73EA5.png","/IMG_5382.png","/IMG_5396.jpeg","/IMG_5401.jpeg","/IMG_5398.png"]
  },
  {
    id: 5,
    title: "Boucles d'Oreilles",
    mainImg: "/IMG_5464.jpeg",
    models: ["/IMG_5462.jpeg", "/IMG_5471.jpeg", "/IMG_5481.jpeg","/IMG_5478.jpeg","/IMG_5477.jpeg","/IMG_5475.jpeg","/IMG_5474.jpeg","/IMG_5473.jpeg"]
  },
    {
    id: 6,
    title: "Colliers Signature",
    mainImg: "/IMG_5484.jpeg",
    models: ["/IMG_5485.jpeg", "/IMG_5486.jpeg", "/IMG_5489.jpeg"]
  },
  {
    id: 7,
    title: "Parfums",
    mainImg: "/3E9E3FFB-BBA0-4941-9170-171698E0B199.png",
    models: ["/C734E03F-93BD-48BC-B0D6-6C2DDDEA90AB.png", "/64B83F8D-AA9E-4ACC-90EA-FED310E8525B.png"]
  },
  {
    id: 8,
    title: "Ventouses",
    mainImg: "/IMG_5508.png",
    models: ["/IMG_5509.png", "/IMG_5510.png", "/IMG_5511.png", "/IMG_5512.png"]
  },
  {
    id: 9,
    title: "Maquillage",
    mainImg: "/IMG_5413.jpeg",
    models: ["/IMG_5414.jpeg", "/IMG_5412.jpeg", "/IMG_5413.jpeg","/IMG_5533.jpeg","/IMG_5534.jpeg"]
  }
];

export default function App() {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    iphoneModel: "iPhone 15 Pro Max"
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const handleWhatsAppOrder = () => {
    const phoneNumber = "21650458368"; // Numéro mis à jour
    const message = `Bonjour A&B Vision, je souhaite commander une Mystery Box (130 DT) :
- Nom : ${formData.name}
- Tel : ${formData.phone}
- Adresse : ${formData.address}
- Modèle iPhone : ${formData.iphoneModel}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-luxury-black overflow-x-hidden">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/gemini_generated_video_4B088BE5(1).mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-luxury-black/60" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      {/* Category Detail Overlay */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-luxury-black/95 backdrop-blur-xl overflow-y-auto pt-32 pb-20 px-6"
          >
            <button 
              onClick={() => setSelectedCategory(null)}
              className="fixed top-10 right-10 text-gold hover:scale-110 transition-transform z-[110]"
            >
              <X size={40} />
            </button>

            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl md:text-7xl font-serif mb-4 gold-gradient">{selectedCategory.title}</h2>
                <p className="text-gold/60 uppercase tracking-[0.3em] text-sm">Découvrez nos modèles exclusifs</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {selectedCategory.models.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="aspect-[3/4] rounded-2xl overflow-hidden border border-gold/20 group relative"
                  >
                    <img 
                      src={img} 
                      alt={`${selectedCategory.title} model ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <p className="text-gold font-serif text-xl italic">Modèle #{idx + 1}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-20 text-center">
                <button 
                  onClick={() => {
                    setSelectedCategory(null);
                    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="gold-button"
                >
                  Commander dans ma Box
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center backdrop-blur-sm bg-black/20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif tracking-[0.2em] gold-gradient font-bold"
        >
          A&B VISION
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-8 text-xs uppercase tracking-widest font-medium"
        >
          <a href="#box" className="hover:text-gold transition-colors">La Box</a>
          <a href="#gallery" className="hover:text-gold transition-colors">Galerie</a>
          <a href="#order" className="hover:text-gold transition-colors">Commander</a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div style={{ opacity, scale }} className="z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold uppercase tracking-[0.4em] text-sm mb-6"
          >
            L'Exclusivité à portée de main
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-serif mb-8 leading-tight"
          >
            Mystery Box <br />
            <span className="italic font-light">Edition Limitée</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-gray-400 max-w-lg text-lg font-light leading-relaxed">
              Une sélection méticuleuse de luxe et d'élégance. 
              L'acheteur ne sait pas ce qu'il y a dans son box, 
              mais le prestige est garanti.
            </p>
            <div className="mt-8">
              <a href="#order" className="gold-button">
                Commander
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 text-gold/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Aperçu de l'Allure</h2>
            <p className="text-gold/60 uppercase tracking-widest text-sm">Cliquez sur une catégorie pour voir les modèles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCategory(cat)}
                className={`relative aspect-[3/4] overflow-hidden group rounded-lg cursor-pointer ${i % 3 === 1 ? 'lg:mt-12' : ''}`}
              >
                <img 
                  src={cat.mainImg} 
                  alt={cat.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                  <p className="text-gold font-serif text-2xl italic mb-2">{cat.title}</p>
                  <p className="text-white/70 text-[10px] uppercase tracking-[0.2em]">Voir les modèles</p>
                </div>
                <div className="absolute bottom-6 left-6 z-10 group-hover:opacity-0 transition-opacity">
                  <p className="text-white font-serif text-lg tracking-wider">{cat.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-32 bg-black/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">L'Expérience en Mouvement</h2>
            <p className="text-gold/60 uppercase tracking-widest text-sm">Découvrez l'univers A&B Vision</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "/gemini_generated_video_1EDD1BD2.mp4",
              "/gemini_generated_video_23EE8FC5.mp4",
              "/Luxury_Perfume_Ad_Video_Generation 2.mp4"
            ].map((video, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="glass-card overflow-hidden rounded-xl aspect-video"
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={video} type="video/mp4" />
                </video>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Box Reveal Section */}
      <section id="box" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gold/5 rounded-full blur-3xl animate-pulse" />
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 glass-card overflow-hidden flex items-center justify-center rounded-2xl border-2 border-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
            >
              <img 
                src="/IMG_5336.jpeg" 
                alt="The Mystery Box" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-4 -right-4 bg-gold text-black px-4 py-2 rounded-full font-bold text-sm tracking-tighter">
                ?
              </div>
            </motion.div>
          </motion.div>

          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Le Mystère A&B Vision</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Chaque box est une expérience unique. Nous avons combiné accessoires de mode, 
              parfums de haute couture et surprises pour créer le cadeau parfait — pour vous ou pour un proche.
            </p>
            <ul className="space-y-6">
              {[
                { icon: <Sparkles size={20} />, text: "Produits authentiques de grandes marques" },
                { icon: <Eye size={20} />, text: "Sélectionné par des experts en style" },
                { icon: <Heart size={20} />, text: "Un cadeau inoubliable" }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-gold/80"
                >
                  <span className="p-2 rounded-full bg-gold/10">{item.icon}</span>
                  <span className="text-white font-light">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Content Teaser Section */}
      <section id="content" className="py-32 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Ce qui vous attend...</h2>
            <p className="text-gold/60 uppercase tracking-widest text-sm">Un aperçu des trésors cachés</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Accessoires", desc: "Collier, Bracelets, Bagues", img: "/IMG_5502.png" },
              { title: "Parfums", desc: "LV ou Prada", img: "/IMG_5505.png" },
              { title: "Maquillage", desc: "Sheglam & Kiko", img: "/IMG_5506.jpeg" },
              { title: "Surprise", desc: "Cadeau exclusif", img: "/IMG_5507.png" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card overflow-hidden text-center flex flex-col items-center group"
              >
                <div className="w-full aspect-square overflow-hidden mb-4">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 pt-0">
                  <h3 className="text-xl font-serif">{item.title}</h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 glass-card p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShoppingBag size={120} />
            </div>
            <h3 className="text-2xl font-serif mb-8 gold-gradient">Détails de votre Box Exclusive :</h3>
            <div className="grid md:grid-cols-3 gap-8 text-sm font-light text-gray-300">
              <div className="space-y-4">
                <p className="flex justify-between"><span>Cache de téléphone</span> <span className="text-gold">1</span></p>
                <p className="flex justify-between"><span>Lunettes de soleil</span> <span className="text-gold">1</span></p>
                <p className="flex justify-between"><span>Boucles d'oreilles</span> <span className="text-gold">2</span></p>
              </div>
              <div className="space-y-4">
                <p className="flex justify-between"><span>Collier Signature</span> <span className="text-gold">1</span></p>
                <p className="flex justify-between"><span>Bagues de luxe</span> <span className="text-gold">6</span></p>
                <p className="flex justify-between"><span>Bracelets assortis</span> <span className="text-gold">2</span></p>
              </div>
              <div className="space-y-4">
                <p className="flex justify-between"><span>Parfum Prestige</span> <span className="text-gold">1</span></p>
                <p className="flex justify-between"><span>Maquillage (Sheglam/Kiko)</span> <span className="text-gold">1</span></p>
                <p className="flex justify-between"><span>Ventouses téléphone</span> <span className="text-gold">2</span></p>
              </div>
            </div>
            <div className="mt-10 pt-10 border-t border-gold/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Gift className="text-gold animate-bounce" />
                <p className="text-gold font-serif italic text-lg">
                  + 1 Cadeau surprise exclusif
                </p>
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest bg-gold/5 px-4 py-2 rounded-full border border-gold/10">
                Édition Limitée - A&B Vision
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-32 px-6">
        <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 relative">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif mb-4">Commander votre Box</h2>
            <div className="text-4xl font-light text-gold mb-4">130 DT</div>
            <p className="text-gray-500 text-sm uppercase tracking-widest">Paiement à la livraison (Tunisie)</p>
          </div>

          <form className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-2">Nom & Prénom</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border-b border-white/10 px-0 py-3 focus:border-gold outline-none transition-all duration-500 placeholder:text-gray-700" 
                  placeholder="Votre nom complet"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-2">Numéro de Téléphone</label>
                <input 
                  type="tel" 
                  className="w-full bg-white/5 border-b border-white/10 px-0 py-3 focus:border-gold outline-none transition-all duration-500 placeholder:text-gray-700" 
                  placeholder="Ex: 22 123 456"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-2">Adresse de Livraison</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border-b border-white/10 px-0 py-3 focus:border-gold outline-none transition-all duration-500 placeholder:text-gray-700" 
                  placeholder="Ville, Rue, Code postal"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-gold/70 mb-4">Modèle iPhone (pour le cache)</label>
                <select 
                  className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-gold transition-all appearance-none text-sm font-medium tracking-widest cursor-pointer"
                  value={formData.iphoneModel}
                  onChange={(e) => setFormData({...formData, iphoneModel: e.target.value})}
                >
                  {[
                    "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
                    "iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max",
                    "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max",
                    "iPhone 14", "iPhone 14 Pro", "iPhone 14 Pro Max",
                    "iPhone 15", "iPhone 15 Pro", "iPhone 15 Pro Max",
                    "iPhone 16", "iPhone 16 Pro", "iPhone 16 Pro Max"
                  ].map(model => (
                    <option key={model} value={model} className="bg-luxury-black text-white">{model}</option>
                  ))}
                </select>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button" 
                onClick={handleWhatsAppOrder}
                className="w-full gold-button flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
              >
                <ShoppingBag size={18} />
                Commander via WhatsApp
              </motion.button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif tracking-[0.2em] gold-gradient mb-2">A&B VISION</h3>
            <p className="text-gray-500 text-sm font-light italic">Discover your unique allure</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Phone size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Heart size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Star size={20} /></a>
          </div>

          <div className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
            © 2026 A&B Vision. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
