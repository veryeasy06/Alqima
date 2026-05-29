
import { useState, useEffect, useRef, useCallback } from "react";

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const T = {
  ar: {
    dir: "rtl",
    lang: "ar",
    brand: "القمة",
    tagline: "حيث يلتقي الأصيل بالرفاهية",
    heroSub: "تجربة شاورما عربية لا تُنسى في قلب إزمير",
    orderNow: "اطلب الآن",
    ourMenu: "قائمتنا",
    categories: "التصنيفات",
    menu: "القائمة",
    featured: "الأطباق المميزة",
    reviews: "آراء عملائنا",
    about: "قصتنا",
    branches: "فروعنا",
    contact: "تواصل معنا",
    delivery: "معلومات التوصيل",
    faq: "الأسئلة الشائعة",
    addToCart: "أضف للسلة",
    cart: "السلة",
    checkout: "إتمام الطلب",
    total: "الإجمالي",
    deliveryFee: "رسوم التوصيل",
    free: "مجاني",
    subtotal: "المجموع الفرعي",
    name: "الاسم",
    phone: "رقم الهاتف",
    address: "العنوان",
    notes: "ملاحظات",
    paymentMethod: "طريقة الدفع",
    cash: "الدفع عند الاستلام",
    card: "بطاقة ائتمانية",
    online: "دفع إلكتروني",
    sendOrder: "إرسال الطلب عبر واتساب",
    orderTracking: "تتبع طلبك",
    received: "تم الاستلام",
    preparing: "جاري التحضير",
    cooking: "جاري الطهي",
    onTheWay: "في الطريق إليك",
    delivered: "تم التوصيل",
    login: "تسجيل الدخول",
    register: "إنشاء حساب",
    guestOrder: "طلب بدون تسجيل",
    favorites: "المفضلة",
    darkMode: "الوضع الليلي",
    lightMode: "الوضع النهاري",
    switchLang: "Türkçe",
    allCategories: "الكل",
    shawarma: "شاورما",
    grills: "مشاويات",
    burgers: "برجر",
    pizza: "بيتزا",
    desserts: "حلويات",
    drinks: "مشروبات",
    rating: "التقييم",
    addNote: "أضف ملاحظة للطلب...",
    emptyCart: "سلتك فارغة",
    emptyCartSub: "أضف أطباقك المفضلة",
    freeDeliveryMsg: "🎉 التوصيل مجاني لطلبات فوق 500 ₺",
    deliveryMsg: "التوصيل 85 ₺ للطلبات دون 500 ₺",
    adminLogin: "دخول الإدارة",
    adminPass: "كلمة المرور",
    dashboard: "لوحة التحكم",
    orders: "الطلبات",
    products: "المنتجات",
    customers: "العملاء",
    analytics: "التحليلات",
    settings: "الإعدادات",
    todayRevenue: "إيرادات اليوم",
    totalOrders: "إجمالي الطلبات",
    activeOrders: "الطلبات النشطة",
    newCustomers: "عملاء جدد",
    recentOrders: "أحدث الطلبات",
    manageProducts: "إدارة المنتجات",
    addProduct: "إضافة منتج",
    editProduct: "تعديل المنتج",
    deleteProduct: "حذف المنتج",
    productName: "اسم المنتج",
    productDesc: "الوصف",
    productPrice: "السعر",
    productCategory: "التصنيف",
    save: "حفظ",
    cancel: "إلغاء",
    logout: "تسجيل الخروج",
    close: "إغلاق",
    quantity: "الكمية",
    remove: "حذف",
    backToMenu: "العودة للقائمة",
    orderSuccess: "تم إرسال طلبك بنجاح!",
    enterPhone: "يرجى إدخال رقم هاتفك",
    viewCart: "عرض السلة",
    items: "عناصر",
    aboutTitle: "قصة القمة",
    contactTitle: "تواصل معنا",
    branchesTitle: "فروعنا",
    reviewsTitle: "ماذا يقول عملاؤنا",
  },
  tr: {
    dir: "ltr",
    lang: "tr",
    brand: "القمة",
    tagline: "Özgünlük ve Lüks Buluşuyor",
    heroSub: "İzmir'in kalbinde unutulmaz Arap şavarma deneyimi",
    orderNow: "Şimdi Sipariş Ver",
    ourMenu: "Menümüz",
    categories: "Kategoriler",
    menu: "Menü",
    featured: "Öne Çıkan Yemekler",
    reviews: "Müşteri Yorumları",
    about: "Hikayemiz",
    branches: "Şubelerimiz",
    contact: "İletişim",
    delivery: "Teslimat Bilgisi",
    faq: "SSS",
    addToCart: "Sepete Ekle",
    cart: "Sepet",
    checkout: "Siparişi Tamamla",
    total: "Toplam",
    deliveryFee: "Teslimat Ücreti",
    free: "Ücretsiz",
    subtotal: "Ara Toplam",
    name: "Ad Soyad",
    phone: "Telefon",
    address: "Adres",
    notes: "Notlar",
    paymentMethod: "Ödeme Yöntemi",
    cash: "Kapıda Ödeme",
    card: "Kredi Kartı",
    online: "Online Ödeme",
    sendOrder: "WhatsApp ile Sipariş Gönder",
    orderTracking: "Siparişini Takip Et",
    received: "Alındı",
    preparing: "Hazırlanıyor",
    cooking: "Pişiriliyor",
    onTheWay: "Yolda",
    delivered: "Teslim Edildi",
    login: "Giriş Yap",
    register: "Kayıt Ol",
    guestOrder: "Üye Olmadan Sipariş",
    favorites: "Favoriler",
    darkMode: "Karanlık Mod",
    lightMode: "Aydınlık Mod",
    switchLang: "العربية",
    allCategories: "Tümü",
    shawarma: "Şavarma",
    grills: "Izgara",
    burgers: "Burger",
    pizza: "Pizza",
    desserts: "Tatlılar",
    drinks: "İçecekler",
    rating: "Puan",
    addNote: "Sipariş notu ekleyin...",
    emptyCart: "Sepetiniz Boş",
    emptyCartSub: "Favori yemeklerinizi ekleyin",
    freeDeliveryMsg: "🎉 500₺ üzeri siparişlerde teslimat ücretsiz!",
    deliveryMsg: "500₺ altı siparişlerde 85₺ teslimat ücreti",
    adminLogin: "Yönetici Girişi",
    adminPass: "Şifre",
    dashboard: "Panel",
    orders: "Siparişler",
    products: "Ürünler",
    customers: "Müşteriler",
    analytics: "Analitik",
    settings: "Ayarlar",
    todayRevenue: "Bugünkü Gelir",
    totalOrders: "Toplam Sipariş",
    activeOrders: "Aktif Siparişler",
    newCustomers: "Yeni Müşteriler",
    recentOrders: "Son Siparişler",
    manageProducts: "Ürün Yönetimi",
    addProduct: "Ürün Ekle",
    editProduct: "Ürünü Düzenle",
    deleteProduct: "Ürünü Sil",
    productName: "Ürün Adı",
    productDesc: "Açıklama",
    productPrice: "Fiyat",
    productCategory: "Kategori",
    save: "Kaydet",
    cancel: "İptal",
    logout: "Çıkış",
    close: "Kapat",
    quantity: "Miktar",
    remove: "Kaldır",
    backToMenu: "Menüye Dön",
    orderSuccess: "Siparişiniz başarıyla gönderildi!",
    enterPhone: "Lütfen telefon numaranızı girin",
    viewCart: "Sepeti Görüntüle",
    items: "ürün",
    aboutTitle: "القمة Hikayesi",
    contactTitle: "İletişim",
    branchesTitle: "Şubelerimiz",
    reviewsTitle: "Müşterilerimiz Ne Diyor",
  },
};

// ─── MENU DATA ────────────────────────────────────────────────────────────────
const MENU_ITEMS = [
  {
    id: 1, category: "shawarma",
    nameAr: "الشاورما العربي الأصيل", nameTr: "Orijinal Arap Şavarmasi",
    descAr: "شاورما دجاج طازجة مع صوص الثوم والخضار الطازجة والخبز العربي الأصيل — طعم لا يُنسى",
    descTr: "Taze tavuk şavarmasi, sarımsaklı sos, taze sebzeler ve orijinal Arap ekmeği ile",
    price: 185, rating: 4.9, reviews: 847, badge: "الأكثر طلباً",
    img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80",
  },
  {
    id: 2, category: "shawarma",
    nameAr: "شاورما اللحم المشوي", nameTr: "Izgara Et Şavarmasi",
    descAr: "لحم بقري مشوي على الفحم مع التوابل العربية والصوص الخاص بالقمة",
    descTr: "Kömürde pişirilmiş dana eti, Arap baharatları ve özel القمة sosu ile",
    price: 215, rating: 4.8, reviews: 623,
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
  },
  {
    id: 3, category: "grills",
    nameAr: "مشاوي مشكّلة الملكي", nameTr: "Kraliyet Karışık Izgara",
    descAr: "تشكيلة فاخرة من المشاوي العربية — كباب، دجاج، لحم — مع الأرز والمقبلات",
    descTr: "Lüks karışık ızgara çeşitleri — kebap, tavuk, et — pilav ve mezeler ile",
    price: 420, rating: 4.9, reviews: 412,
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
  },
  {
    id: 4, category: "grills",
    nameAr: "كباب الدجاج بالأعشاب", nameTr: "Otlu Tavuk Kebabı",
    descAr: "كباب دجاج طازج متبل بالأعشاب الطبيعية والليمون والثوم",
    descTr: "Taze tavuk kebabı, doğal otlar, limon ve sarımsak ile marine edilmiş",
    price: 175, rating: 4.7, reviews: 289,
    img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80",
  },
  {
    id: 5, category: "burgers",
    nameAr: "برجر القمة الفاخر", nameTr: "القمة Premium Burger",
    descAr: "لحم بقري طازج 200غ مع جبنة شيدر مزدوجة، خس طازج، وصوص خاص لا مثيل له",
    descTr: "200gr taze dana eti, çift cheddar peyniri, taze marul ve eşsiz özel sos",
    price: 195, rating: 4.8, reviews: 534, badge: "جديد",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
  },
  {
    id: 6, category: "burgers",
    nameAr: "برجر الدجاج المقرمش", nameTr: "Crispy Tavuk Burger",
    descAr: "دجاج مقرمش مع صوص الرانش والخيار المخلل والطماطم الطازجة",
    descTr: "Çıtır tavuk, ranch sos, turşu salatalık ve taze domates ile",
    price: 165, rating: 4.6, reviews: 378,
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80",
  },
  {
    id: 7, category: "pizza",
    nameAr: "بيتزا اللحم الفاخرة", nameTr: "Lüks Et Pizzası",
    descAr: "بيتزا إيطالية الأصل مع لحم مشوي، فلفل ملون، وجبنة موزاريلا",
    descTr: "İtalyan usulü pizza, ızgara et, renkli biber ve mozzarella peyniri",
    price: 245, rating: 4.7, reviews: 445,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  },
  {
    id: 8, category: "pizza",
    nameAr: "بيتزا الدجاج والبربكيو", nameTr: "BBQ Tavuk Pizzası",
    descAr: "دجاج مشوي مع صوص البربكيو الحار وجبنة موزاريلا وبصل أحمر",
    descTr: "Izgara tavuk, acı BBQ sos, mozzarella ve kırmızı soğan",
    price: 225, rating: 4.6, reviews: 312,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
  },
  {
    id: 9, category: "desserts",
    nameAr: "كنافة النابلسية الأصيلة", nameTr: "Orijinal Nablus Künefesi",
    descAr: "كنافة نابلسية بالجبن الطازج والقطر والفستق الحلبي — تراث الحلويات العربية",
    descTr: "Taze peynirli, şerbetli ve antep fıstıklı Nablus usulü künefe",
    price: 95, rating: 4.9, reviews: 678,
    img: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=600&q=80",
  },
  {
    id: 10, category: "desserts",
    nameAr: "أم علي الملكية", nameTr: "Kraliyet Ümmü Ali",
    descAr: "حلوى أم علي المصرية الأصيلة بالكريمة والمكسرات وجوز الهند",
    descTr: "Orijinal Mısır usulü Ümmü Ali, krema, kuruyemişler ve hindistan cevizi ile",
    price: 85, rating: 4.8, reviews: 445,
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
  },
  {
    id: 11, category: "drinks",
    nameAr: "عصير الرمان الطازج", nameTr: "Taze Nar Suyu",
    descAr: "عصير رمان طبيعي 100% بدون إضافات — منعش وصحي",
    descTr: "%100 doğal nar suyu, katkısız — ferahlatıcı ve sağlıklı",
    price: 65, rating: 4.7, reviews: 234,
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80",
  },
  {
    id: 12, category: "drinks",
    nameAr: "لاتيه العربي بالهيل", nameTr: "Hindistan Cevizli Arap Lattesi",
    descAr: "قهوة عربية أصيلة مع الهيل والحليب المبخر — أفخر تجربة قهوة",
    descTr: "Orijinal Arap kahvesi, kakule ve buharlı süt ile — en lüks kahve deneyimi",
    price: 75, rating: 4.8, reviews: 389,
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&q=80",
  },
];

const REVIEWS = [
  { id: 1, nameAr: "محمد يلماظ", nameTr: "Mehmet Yılmaz", avatar: "M", rating: 5, textAr: "الشاورما العربي في القمة لا مثيل له! طعم أصيل وجودة عالية جداً. أفضل مطعم في إزمير بلا منافس.", textTr: "القمة'nın Arap şavarmasi eşsiz! Otantik lezzet ve çok yüksek kalite. İzmir'in tartışmasız en iyi restoranı." },
  { id: 2, nameAr: "فاطمة كايا", nameTr: "Fatma Kaya", avatar: "F", rating: 5, textAr: "تجربة استثنائية! المكان فاخر والخدمة راقية والأكل يشعرك بأنك في مطعم خمس نجوم.", textTr: "Olağanüstü bir deneyim! Mekan lüks, hizmet kaliteli ve yemek sizi beş yıldızlı bir restoranda hissettiriyor." },
  { id: 3, nameAr: "أحمد دمير", nameTr: "Ahmet Demir", avatar: "A", rating: 5, textAr: "طلبت التوصيل وكان الطعام ساخناً وطازجاً تماماً. التوصيل سريع والتغليف أنيق. القمة تستحق كل نجمة!", textTr: "Teslimat sipariş ettim ve yemek tamamen sıcak ve tazeydi. Hızlı teslimat ve şık ambalaj. القمة her yıldızı hak ediyor!" },
  { id: 4, nameAr: "سارة أوزتورك", nameTr: "Sara Öztürk", avatar: "S", rating: 5, textAr: "الكنافة النابلسية هنا جنة! لا أستطيع التوقف عن طلبها. أفضل حلوى في تركيا.", textTr: "Buradaki Nablus künefesi cennet! Sipariş vermeyi bırakamıyorum. Türkiye'nin en iyi tatlısı." },
  { id: 5, nameAr: "عمر شاهين", nameTr: "Ömer Şahin", avatar: "O", rating: 5, textAr: "القمة تجربة كاملة — من التصميم الفاخر إلى الطعم الرائع. كل زيارة تجعلني أعود مرة أخرى.", textTr: "القمة tam bir deneyim — lüks tasarımdan harika lezzete kadar. Her ziyaret beni geri döndürüyor." },
];

const FAQS = [
  { qAr: "ما هي مناطق التوصيل؟", qTr: "Teslimat bölgeleri nelerdir?", aAr: "نوصل إلى جميع مناطق إزمير وضواحيها.", aTr: "İzmir'in tüm bölgelerine ve çevre ilçelerine teslimat yapıyoruz." },
  { qAr: "كم يستغرق وقت التوصيل؟", qTr: "Teslimat ne kadar sürer?", aAr: "متوسط وقت التوصيل 30-45 دقيقة.", aTr: "Ortalama teslimat süresi 30-45 dakikadır." },
  { qAr: "هل يمكن تخصيص الطلب؟", qTr: "Sipariş özelleştirilebilir mi?", aAr: "نعم! يمكنك إضافة ملاحظات خاصة لكل طلب.", aTr: "Evet! Her sipariş için özel notlar ekleyebilirsiniz." },
  { qAr: "ما هي طرق الدفع المتاحة؟", qTr: "Hangi ödeme yöntemleri mevcut?", aAr: "نقبل الدفع نقداً، بطاقة ائتمانية، أو دفع إلكتروني.", aTr: "Nakit, kredi kartı veya online ödemeyi kabul ediyoruz." },
];

// Admin mock data
const ADMIN_ORDERS = [
  { id: "#2401", customer: "محمد يلماظ", total: 420, status: "cooking", time: "12 دقيقة", items: 3 },
  { id: "#2400", customer: "فاطمة كايا", total: 185, status: "onTheWay", time: "28 دقيقة", items: 1 },
  { id: "#2399", customer: "أحمد دمير", total: 650, status: "delivered", time: "45 دقيقة", items: 4 },
  { id: "#2398", customer: "سارة أوزتورك", total: 95, status: "received", time: "5 دقائق", items: 1 },
  { id: "#2397", customer: "عمر شاهين", total: 385, status: "preparing", time: "18 دقيقة", items: 2 },
];

const CHART_DATA = [
  { day: "الأح", revenue: 3200 }, { day: "الإث", revenue: 4100 }, { day: "الثل", revenue: 3800 },
  { day: "الأر", revenue: 5200 }, { day: "الخم", revenue: 4700 }, { day: "الجم", revenue: 6800 },
  { day: "السب", revenue: 7200 },
];

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState("ar");
  const [darkMode, setDarkMode] = useState(true);
  const [page, setPage] = useState("home"); // home | admin
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [trackingOpen, setTrackingOpen] = useState(false);
  const [trackingStep, setTrackingStep] = useState(2);
  const [activeCategory, setActiveCategory] = useState("all");
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminSection, setAdminSection] = useState("dashboard");
  const [adminPass, setAdminPass] = useState("");
  const [adminError, setAdminError] = useState(false);
  const [notification, setNotification] = useState(null);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [orderForm, setOrderForm] = useState({ name: "", phone: "", address: "", notes: "", payment: "cash" });
  const [editProduct, setEditProduct] = useState(null);
  const [products, setProducts] = useState(MENU_ITEMS);
  const [activeFaq, setActiveFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = T[lang];

  useEffect(() => {
    const timer = setTimeout(() => setLoadingScreen(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const showNotif = (msg, type = "success") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1, note: "" }];
    });
    showNotif(lang === "ar" ? "تمت الإضافة للسلة ✓" : "Sepete eklendi ✓");
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(c => c.id !== id));
  const updateQty = (id, delta) => setCart(prev =>
    prev.map(c => c.id === id ? { ...c, qty: Math.max(1, c.qty + delta) } : c).filter(c => c.qty > 0)
  );
  const toggleFav = (id) => setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);

  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const deliveryFee = subtotal >= 500 ? 0 : subtotal > 0 ? 85 : 0;
  const total = subtotal + deliveryFee;
  const cartCount = cart.reduce((s, c) => s + c.qty, 0);

  const filteredMenu = activeCategory === "all" ? products : products.filter(p => p.category === activeCategory);

  const sendWhatsApp = () => {
    if (!orderForm.phone) { showNotif(t.enterPhone, "error"); return; }
    const items = cart.map(c => `• ${lang === "ar" ? c.nameAr : c.nameTr} x${c.qty} = ${c.price * c.qty}₺`).join("\n");
    const msg = lang === "ar"
      ? `🌟 طلب جديد من القمة 🌟\n\n👤 الاسم: ${orderForm.name}\n📞 الهاتف: ${orderForm.phone}\n📍 العنوان: ${orderForm.address}\n\n🍽️ الطلبات:\n${items}\n\n💰 المجموع الفرعي: ${subtotal}₺\n🚚 التوصيل: ${deliveryFee === 0 ? "مجاني" : deliveryFee + "₺"}\n💳 الإجمالي: ${total}₺\n\n💳 طريقة الدفع: ${orderForm.payment === "cash" ? "نقداً" : orderForm.payment === "card" ? "بطاقة" : "إلكتروني"}\n\n📝 ملاحظات: ${orderForm.notes || "لا يوجد"}`
      : `🌟 القمة'dan Yeni Sipariş 🌟\n\n👤 Ad: ${orderForm.name}\n📞 Tel: ${orderForm.phone}\n📍 Adres: ${orderForm.address}\n\n🍽️ Siparişler:\n${items}\n\n💰 Ara Toplam: ${subtotal}₺\n🚚 Teslimat: ${deliveryFee === 0 ? "Ücretsiz" : deliveryFee + "₺"}\n💳 Toplam: ${total}₺\n\n💳 Ödeme: ${orderForm.payment}\n\n📝 Notlar: ${orderForm.notes || "Yok"}`;
    window.open(`https://wa.me/905013617543?text=${encodeURIComponent(msg)}`, "_blank");
    setCheckoutOpen(false);
    setCart([]);
    setTrackingOpen(true);
    setTrackingStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setTrackingStep(step);
      if (step >= 4) clearInterval(interval);
    }, 3000);
    showNotif(t.orderSuccess);
  };

  const adminLogin = () => {
    if (adminPass === "admin2024") { setAdminLoggedIn(true); setAdminError(false); }
    else setAdminError(true);
  };

  const CATS = [
    { key: "all", labelAr: "الكل", labelTr: "Tümü", icon: "🍽️" },
    { key: "shawarma", labelAr: "شاورما", labelTr: "Şavarma", icon: "🌯" },
    { key: "grills", labelAr: "مشاويات", labelTr: "Izgara", icon: "🥩" },
    { key: "burgers", labelAr: "برجر", labelTr: "Burger", icon: "🍔" },
    { key: "pizza", labelAr: "بيتزا", labelTr: "Pizza", icon: "🍕" },
    { key: "desserts", labelAr: "حلويات", labelTr: "Tatlılar", icon: "🍮" },
    { key: "drinks", labelAr: "مشروبات", labelTr: "İçecekler", icon: "🥤" },
  ];

  const TRACKING_STEPS = [
    { key: "received", icon: "📋" }, { key: "preparing", icon: "👨‍🍳" },
    { key: "cooking", icon: "🔥" }, { key: "onTheWay", icon: "🛵" }, { key: "delivered", icon: "✅" },
  ];

  const G = {
    bg: darkMode ? "#0a0a0a" : "#f8f4ef",
    surface: darkMode ? "#111111" : "#ffffff",
    surfaceEl: darkMode ? "#1a1a1a" : "#f0ebe3",
    text: darkMode ? "#f5f0e8" : "#1a1208",
    textMuted: darkMode ? "#888" : "#666",
    gold: "#c9a84c",
    goldLight: "#e8c96a",
    goldDark: "#9a7a2e",
    border: darkMode ? "#2a2a2a" : "#e0d5c5",
    cardBg: darkMode ? "#141414" : "#ffffff",
    glass: darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
  };

  // ── LOADING SCREEN ──────────────────────────────────────────────────────────
  if (loadingScreen) return (
    <div style={{ position: "fixed", inset: 0, background: "#0a0a0a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 9999, fontFamily: "'Cairo', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
      <div style={{ position: "relative", marginBottom: 32 }}>
        <div style={{ width: 100, height: 100, borderRadius: "50%", border: "2px solid #c9a84c", display: "flex", alignItems: "center", justifyContent: "center", animation: "spin 2s linear infinite", background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)" }}>
          <div style={{ fontSize: 48, fontWeight: 900, color: "#c9a84c", fontFamily: "serif" }}>Q</div>
        </div>
        <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.3)", animation: "spin 3s linear infinite reverse" }} />
      </div>
      <div style={{ fontSize: 36, fontWeight: 900, color: "#c9a84c", letterSpacing: 4, marginBottom: 8 }}>القمة</div>
      <div style={{ fontSize: 14, color: "rgba(201,168,76,0.6)", letterSpacing: 6, textTransform: "uppercase" }}>RESTAURANT</div>
      <div style={{ marginTop: 48, width: 200, height: 2, background: "#1a1a1a", borderRadius: 1, overflow: "hidden" }}>
        <div style={{ height: "100%", background: "linear-gradient(90deg, #c9a84c, #e8c96a)", borderRadius: 1, animation: "loadBar 2s ease forwards" }} />
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes loadBar { from { width: 0; } to { width: 100%; } }
      `}</style>
    </div>
  );

  // ── ADMIN PAGE ──────────────────────────────────────────────────────────────
  if (page === "admin") {
    if (!adminLoggedIn) return (
      <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cairo', sans-serif", direction: "rtl" }}>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
        <div style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: 24, padding: "48px 40px", width: "100%", maxWidth: 420, textAlign: "center" }}>
          <div style={{ fontSize: 48, fontWeight: 900, color: "#c9a84c", marginBottom: 8 }}>القمة</div>
          <div style={{ color: "#888", marginBottom: 32, fontSize: 14 }}>لوحة الإدارة</div>
          <div style={{ position: "relative", marginBottom: 16 }}>
            <input type="password" placeholder="كلمة المرور" value={adminPass} onChange={e => setAdminPass(e.target.value)}
              onKeyDown={e => e.key === "Enter" && adminLogin()}
              style={{ width: "100%", padding: "14px 20px", background: "#1a1a1a", border: `1px solid ${adminError ? "#e74c3c" : "#2a2a2a"}`, borderRadius: 12, color: "#f5f0e8", fontSize: 16, boxSizing: "border-box", textAlign: "center", fontFamily: "'Cairo', sans-serif", outline: "none" }} />
          </div>
          {adminError && <div style={{ color: "#e74c3c", fontSize: 13, marginBottom: 12 }}>كلمة المرور غير صحيحة</div>}
          <button onClick={adminLogin} style={{ width: "100%", padding: "14px", background: "linear-gradient(135deg, #c9a84c, #e8c96a)", borderRadius: 12, border: "none", color: "#0a0a0a", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "'Cairo', sans-serif", marginBottom: 16 }}>دخول</button>
          <button onClick={() => setPage("home")} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontFamily: "'Cairo', sans-serif", fontSize: 13 }}>← العودة للموقع</button>
          <div style={{ marginTop: 16, color: "#555", fontSize: 12 }}>كلمة المرور التجريبية: admin2024</div>
        </div>
      </div>
    );

    return <AdminDashboard t={t} lang={lang} G={G} setPage={setPage} setAdminLoggedIn={setAdminLoggedIn} adminSection={adminSection} setAdminSection={setAdminSection} products={products} setProducts={setProducts} editProduct={editProduct} setEditProduct={setEditProduct} showNotif={showNotif} CHART_DATA={CHART_DATA} ADMIN_ORDERS={ADMIN_ORDERS} CATS={CATS} notification={notification} />;
  }

  // ── MAIN WEBSITE ────────────────────────────────────────────────────────────
  return (
    <div style={{ background: G.bg, color: G.text, minHeight: "100vh", fontFamily: "'Cairo', sans-serif", direction: t.dir, transition: "background 0.3s, color 0.3s" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #111; } ::-webkit-scrollbar-thumb { background: #c9a84c; border-radius: 2px; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(201,168,76,0.3); } 50% { box-shadow: 0 0 40px rgba(201,168,76,0.6); } }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes notifIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        .card-hover { transition: transform 0.3s, box-shadow 0.3s; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(201,168,76,0.15) !important; }
        .btn-hover { transition: all 0.25s; }
        .btn-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,168,76,0.4); }
        .cat-btn { transition: all 0.25s; }
        .cat-btn:hover { background: rgba(201,168,76,0.15) !important; }
        .fav-btn:hover { transform: scale(1.2); }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.2rem !important; }
          .menu-grid { grid-template-columns: 1fr !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 1.8rem !important; }
        }
      `}</style>

      {/* NOTIFICATION */}
      {notification && (
        <div style={{ position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)", background: notification.type === "error" ? "#c0392b" : "linear-gradient(135deg, #c9a84c, #e8c96a)", color: notification.type === "error" ? "#fff" : "#0a0a0a", padding: "12px 28px", borderRadius: 50, fontWeight: 700, zIndex: 10000, animation: "notifIn 0.3s ease", boxShadow: "0 8px 32px rgba(0,0,0,0.3)", whiteSpace: "nowrap", fontSize: 15 }}>
          {notification.msg}
        </div>
      )}

      {/* NAVBAR */}
      <nav style={{ position: "sticky", top: 0, zIndex: 1000, background: darkMode ? "rgba(10,10,10,0.95)" : "rgba(248,244,239,0.95)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${G.border}`, padding: "0 24px", height: 70, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #c9a84c, #9a7a2e)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 20, color: "#0a0a0a", fontFamily: "serif", boxShadow: "0 4px 16px rgba(201,168,76,0.4)", animation: "glow 3s ease infinite" }}>Q</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: G.gold }}>القمة</div>
        </div>
        <div className="nav-links" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["menu", "about", "reviews", "contact"].map(k => (
            <a key={k} href={`#${k}`} style={{ color: G.textMuted, textDecoration: "none", fontSize: 14, fontWeight: 600, transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = G.gold} onMouseLeave={e => e.target.style.color = G.textMuted}>{t[k]}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button onClick={() => setLang(l => l === "ar" ? "tr" : "ar")} style={{ background: G.surfaceEl, border: `1px solid ${G.border}`, borderRadius: 20, padding: "6px 14px", color: G.textMuted, cursor: "pointer", fontSize: 12, fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>{t.switchLang}</button>
          <button onClick={() => setDarkMode(d => !d)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20 }}>{darkMode ? "☀️" : "🌙"}</button>
          <button onClick={() => setCartOpen(true)} style={{ position: "relative", background: "linear-gradient(135deg, #c9a84c, #9a7a2e)", border: "none", borderRadius: 22, padding: "8px 18px", color: "#0a0a0a", cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontFamily: "'Cairo', sans-serif" }}>
            🛒 {cartCount > 0 && <span style={{ background: "#e74c3c", color: "#fff", borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900 }}>{cartCount}</span>}
          </button>
          <button onClick={() => setPage("admin")} style={{ background: "none", border: `1px solid ${G.border}`, borderRadius: 20, padding: "6px 14px", color: G.textMuted, cursor: "pointer", fontSize: 12, fontFamily: "'Cairo', sans-serif" }}>⚙️</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1600&q=80)", backgroundSize: "cover", backgroundPosition: "center", transform: "scale(1.05)", filter: "brightness(0.35)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,10,0.9) 0%, rgba(201,168,76,0.1) 50%, rgba(10,10,10,0.95) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />

        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <div key={i} style={{ position: "absolute", width: 200 + i * 100, height: 200 + i * 100, borderRadius: "50%", background: `radial-gradient(circle, rgba(201,168,76,${0.03 + i * 0.01}) 0%, transparent 70%)`, top: `${10 + i * 15}%`, left: `${5 + i * 20}%`, animation: `float ${4 + i}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }} />
        ))}

        <div style={{ position: "relative", textAlign: "center", padding: "0 24px", maxWidth: 800, animation: "fadeInUp 1s ease 0.3s both" }}>
          <div style={{ fontSize: 13, color: G.gold, letterSpacing: 6, textTransform: "uppercase", marginBottom: 20, opacity: 0.9 }}>🌟 {lang === "ar" ? "مطعم القمة — إزمير" : "القمة Restaurant — İzmir"} 🌟</div>
          <h1 className="hero-title" style={{ fontSize: "3.8rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 24, background: "linear-gradient(135deg, #ffffff 0%, #e8c96a 50%, #c9a84c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {t.tagline}
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", marginBottom: 40, lineHeight: 1.8 }}>{t.heroSub}</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#menu" className="btn-hover" style={{ background: "linear-gradient(135deg, #c9a84c, #e8c96a)", color: "#0a0a0a", padding: "16px 40px", borderRadius: 50, fontWeight: 900, fontSize: 16, textDecoration: "none", display: "inline-block", boxShadow: "0 8px 32px rgba(201,168,76,0.4)" }}>{t.orderNow}</a>
            <a href="#menu" style={{ border: "2px solid rgba(255,255,255,0.3)", color: "#fff", padding: "16px 40px", borderRadius: 50, fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-block", backdropFilter: "blur(10px)" }}>{t.ourMenu}</a>
          </div>
          {/* Stats bar */}
          <div style={{ marginTop: 64, display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap" }}>
            {[{ n: "10K+", l: lang === "ar" ? "عميل سعيد" : "Mutlu Müşteri" }, { n: "4.9★", l: lang === "ar" ? "تقييم متوسط" : "Ortalama Puan" }, { n: "30dk", l: lang === "ar" ? "متوسط التوصيل" : "Ort. Teslimat" }].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: G.gold }}>{s.n}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" style={{ padding: "64px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <SectionTitle t={t} titleKey="categories" G={G} lang={lang} />
        <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 8, justifyContent: "center", flexWrap: "wrap" }}>
          {CATS.map(cat => (
            <button key={cat.key} className="cat-btn" onClick={() => setActiveCategory(cat.key)}
              style={{ padding: "12px 24px", borderRadius: 50, border: `1px solid ${activeCategory === cat.key ? G.gold : G.border}`, background: activeCategory === cat.key ? "linear-gradient(135deg, #c9a84c, #e8c96a)" : G.surfaceEl, color: activeCategory === cat.key ? "#0a0a0a" : G.textMuted, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", fontSize: 14, fontFamily: "'Cairo', sans-serif", display: "flex", alignItems: "center", gap: 8, transition: "all 0.25s" }}>
              <span>{cat.icon}</span>
              <span>{lang === "ar" ? cat.labelAr : cat.labelTr}</span>
            </button>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" style={{ padding: "0 24px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <SectionTitle t={t} titleKey="menu" G={G} lang={lang} />
        <div className="menu-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {filteredMenu.map(item => (
            <MenuCard key={item.id} item={item} lang={lang} t={t} G={G} addToCart={addToCart} toggleFav={toggleFav} favorites={favorites} />
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ background: darkMode ? "#0d0d0d" : "#f0ebe3", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle t={t} titleKey="featured" G={G} lang={lang} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {products.filter(p => p.badge).map(item => (
              <div key={item.id} className="card-hover" style={{ background: G.cardBg, borderRadius: 24, overflow: "hidden", border: `1px solid ${G.gold}33`, boxShadow: "0 8px 40px rgba(201,168,76,0.1)", position: "relative" }}>
                <div style={{ position: "absolute", top: 16, right: 16, zIndex: 2, background: "linear-gradient(135deg, #c9a84c, #e8c96a)", color: "#0a0a0a", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 900 }}>{item.badge}</div>
                <div style={{ height: 220, overflow: "hidden" }}>
                  <img src={item.img} alt={lang === "ar" ? item.nameAr : item.nameTr} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }} onMouseEnter={e => e.target.style.transform = "scale(1.05)"} onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, color: G.text }}>{lang === "ar" ? item.nameAr : item.nameTr}</h3>
                  <p style={{ color: G.textMuted, fontSize: 13, marginBottom: 16, lineHeight: 1.6 }}>{lang === "ar" ? item.descAr : item.descTr}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 22, fontWeight: 900, color: G.gold }}>{item.price} ₺</span>
                    <button onClick={() => addToCart(item)} className="btn-hover" style={{ background: "linear-gradient(135deg, #c9a84c, #9a7a2e)", border: "none", borderRadius: 22, padding: "8px 20px", color: "#0a0a0a", fontWeight: 700, cursor: "pointer", fontFamily: "'Cairo', sans-serif", fontSize: 13 }}>{t.addToCart}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY INFO */}
      <section style={{ padding: "80px 24px", background: G.bg }}>
        <div style={{ maxWidth: 900, margin: "0 auto", background: "linear-gradient(135deg, #141414, #1a1a1a)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 32, padding: "48px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🚚</div>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: "#c9a84c", marginBottom: 24 }}>{t.delivery}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 500, margin: "0 auto" }}>
              <div style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 20, padding: 24 }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#c9a84c" }}>85 ₺</div>
                <div style={{ color: "#888", fontSize: 13, marginTop: 8 }}>{lang === "ar" ? "رسوم التوصيل للطلبات دون 500 ₺" : "500₺ altı siparişlerde teslimat ücreti"}</div>
              </div>
              <div style={{ background: "rgba(39,174,96,0.1)", border: "1px solid rgba(39,174,96,0.3)", borderRadius: 20, padding: 24 }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#27ae60" }}>{lang === "ar" ? "مجاني" : "Ücretsiz"}</div>
                <div style={{ color: "#888", fontSize: 13, marginTop: 8 }}>{lang === "ar" ? "للطلبات 500 ₺ فأكثر" : "500₺ ve üzeri siparişlerde"}</div>
              </div>
            </div>
            <p style={{ color: "#888", marginTop: 24, fontSize: 14 }}>{lang === "ar" ? "⏱️ متوسط وقت التوصيل: 30-45 دقيقة" : "⏱️ Ortalama teslimat süresi: 30-45 dakika"}</p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ padding: "80px 24px", background: darkMode ? "#0d0d0d" : "#f0ebe3" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle t={t} titleKey="reviews" G={G} lang={lang} />
          <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {REVIEWS.map(r => (
              <div key={r.id} className="card-hover" style={{ background: G.cardBg, borderRadius: 20, padding: 24, border: `1px solid ${G.border}`, position: "relative" }}>
                <div style={{ position: "absolute", top: 20, right: 24, color: "#c9a84c", fontSize: 32, opacity: 0.3, fontFamily: "serif" }}>"</div>
                <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #c9a84c, #9a7a2e)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 18, color: "#0a0a0a" }}>{r.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: G.text }}>{lang === "ar" ? r.nameAr : r.nameTr}</div>
                    <div style={{ color: "#f39c12", fontSize: 14 }}>{"★".repeat(r.rating)}</div>
                  </div>
                </div>
                <p style={{ color: G.textMuted, fontSize: 14, lineHeight: 1.8 }}>{lang === "ar" ? r.textAr : r.textTr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 24px", background: G.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div style={{ position: "relative", borderRadius: 32, overflow: "hidden", aspectRatio: "4/5" }}>
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80" alt="about" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,10,0.3), rgba(201,168,76,0.2))" }} />
            <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, background: "rgba(10,10,10,0.8)", backdropFilter: "blur(20px)", borderRadius: 16, padding: 20, border: "1px solid rgba(201,168,76,0.3)" }}>
              <div style={{ fontSize: 14, color: "#c9a84c", fontWeight: 700 }}>🏆 {lang === "ar" ? "أفضل مطعم في إزمير 2024" : "İzmir'in En İyi Restoranı 2024"}</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: G.gold, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16 }}>{lang === "ar" ? "قصتنا" : "Hikayemiz"}</div>
            <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 24, lineHeight: 1.3, color: G.text }}>{t.aboutTitle}</h2>
            {lang === "ar" ? (
              <div style={{ color: G.textMuted, lineHeight: 2.0, fontSize: 15 }}>
                <p style={{ marginBottom: 16 }}>وُلدت القمة من حلم بسيط: أن يجد كل إنسان في طبقه ما يبحث عنه من الدفء والأصالة والجودة الحقيقية.</p>
                <p style={{ marginBottom: 16 }}>في قلب إزمير، حيث تلتقي الثقافات وتتشابك الروائح، فتحنا أبوابنا لنقدم للعالم ما تعلمناه من جداتنا وأمهاتنا — وصفات أصيلة تحمل روح الشرق وعطر التوابل الأصيلة.</p>
                <p>كل طبق في القمة هو قصيدة من نكهات متناسقة — شاورما يُعدّ بعناية، ومشاوي تشتعل على الفحم، وحلويات تُسكر الروح. نحن لا نطبخ طعاماً، نحن نصنع ذكريات.</p>
              </div>
            ) : (
              <div style={{ color: G.textMuted, lineHeight: 2.0, fontSize: 15 }}>
                <p style={{ marginBottom: 16 }}>القمة, basit bir hayalle doğdu: her insanın tabağında aradığı sıcaklığı, özgünlüğü ve gerçek kaliteyi bulsun.</p>
                <p style={{ marginBottom: 16 }}>İzmir'in kalbinde, kültürlerin buluştuğu ve kokuların iç içe geçtiği bu şehirde kapılarımızı açtık. Büyükannelerimizden ve annelerimizden öğrendiklerimizi dünyaya sunmak için.</p>
                <p>القمة'daki her tabak, uyumlu lezzetlerin şiiri — özenle hazırlanmış şavarma, kömürde yanan ızgaralar ve ruhu büyüleyen tatlılar. Biz yemek pişirmiyoruz, anılar yaratıyoruz.</p>
              </div>
            )}
            <div style={{ display: "flex", gap: 32, marginTop: 32 }}>
              {[["2019", lang === "ar" ? "سنة التأسيس" : "Kuruluş Yılı"], ["50+", lang === "ar" ? "وصفة أصيلة" : "Orijinal Tarif"], ["99%", lang === "ar" ? "رضا العملاء" : "Müşteri Memnuniyeti"]].map(([n, l]) => (
                <div key={n} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: G.gold }}>{n}</div>
                  <div style={{ fontSize: 12, color: G.textMuted, marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRANCHES */}
      <section id="contact" style={{ padding: "80px 24px", background: darkMode ? "#0d0d0d" : "#f0ebe3" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle t={t} titleKey="branches" G={G} lang={lang} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { nameAr: "الفرع الرئيسي — كارشياكا", nameTr: "Ana Şube — Karşıyaka", addr: "Karşıyaka, İzmir", phone: "0501 361 7543", hours: "10:00 - 00:00" },
              { nameAr: "فرع بورنوفا", nameTr: "Bornova Şubesi", addr: "Bornova, İzmir", phone: "0501 361 7543", hours: "10:00 - 00:00" },
              { nameAr: "فرع ألسانجاك", nameTr: "Alsancak Şubesi", addr: "Alsancak, İzmir", phone: "0501 361 7543", hours: "11:00 - 01:00" },
            ].map((b, i) => (
              <div key={i} className="card-hover" style={{ background: G.cardBg, borderRadius: 20, padding: 28, border: `1px solid ${G.border}` }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>📍</div>
                <h3 style={{ fontWeight: 800, fontSize: 17, color: G.gold, marginBottom: 12 }}>{lang === "ar" ? b.nameAr : b.nameTr}</h3>
                <div style={{ color: G.textMuted, fontSize: 14, lineHeight: 2 }}>
                  <div>📍 {b.addr}</div>
                  <div>📞 {b.phone}</div>
                  <div>🕐 {b.hours}</div>
                </div>
                <a href={`https://wa.me/905013617543`} target="_blank" rel="noreferrer" style={{ display: "inline-block", marginTop: 16, padding: "8px 20px", background: "#25D366", borderRadius: 20, color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>WhatsApp</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: G.bg }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <SectionTitle t={t} titleKey="faq" G={G} lang={lang} />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: G.cardBg, borderRadius: 16, border: `1px solid ${activeFaq === i ? G.gold + "66" : G.border}`, overflow: "hidden", transition: "border 0.3s" }}>
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} style={{ width: "100%", padding: "18px 24px", background: "none", border: "none", color: G.text, fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'Cairo', sans-serif" }}>
                  <span>{lang === "ar" ? faq.qAr : faq.qTr}</span>
                  <span style={{ color: G.gold, transition: "transform 0.3s", transform: activeFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                </button>
                {activeFaq === i && <div style={{ padding: "0 24px 18px", color: G.textMuted, fontSize: 14, lineHeight: 1.8 }}>{lang === "ar" ? faq.aAr : faq.aTr}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#060606", borderTop: "1px solid #1a1a1a", padding: "48px 24px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48 }}>
          <div>
            <div style={{ fontSize: 32, fontWeight: 900, color: "#c9a84c", marginBottom: 12 }}>القمة</div>
            <p style={{ color: "#555", fontSize: 13, lineHeight: 1.8 }}>{lang === "ar" ? "مطعم شاورما عربي فاخر في إزمير، تركيا" : "İzmir, Türkiye'de lüks Arap şavarma restoranı"}</p>
          </div>
          <div>
            <h4 style={{ color: "#c9a84c", marginBottom: 16, fontWeight: 700 }}>{lang === "ar" ? "روابط سريعة" : "Hızlı Bağlantılar"}</h4>
            {["menu", "about", "reviews", "contact"].map(k => (
              <a key={k} href={`#${k}`} style={{ display: "block", color: "#555", textDecoration: "none", fontSize: 13, marginBottom: 8, transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#c9a84c"} onMouseLeave={e => e.target.style.color = "#555"}>{t[k]}</a>
            ))}
          </div>
          <div>
            <h4 style={{ color: "#c9a84c", marginBottom: 16, fontWeight: 700 }}>{lang === "ar" ? "تواصل معنا" : "İletişim"}</h4>
            <div style={{ color: "#555", fontSize: 13, lineHeight: 2 }}>
              <div>📍 İzmir, Türkiye</div>
              <div>📞 0501 361 7543</div>
              <div>🕐 10:00 - 01:00</div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1a1a1a", marginTop: 40, paddingTop: 24, textAlign: "center", color: "#333", fontSize: 12 }}>
          © 2024 القمة Restaurant. {lang === "ar" ? "جميع الحقوق محفوظة" : "Tüm hakları saklıdır"}
        </div>
      </footer>

      {/* CART DRAWER */}
      {cartOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 5000 }}>
          <div onClick={() => setCartOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }} />
          <div style={{ position: "absolute", top: 0, bottom: 0, [lang === "ar" ? "left" : "right"]: 0, width: "min(420px, 100vw)", background: G.surface, display: "flex", flexDirection: "column", animation: "slideIn 0.35s ease", direction: t.dir }}>
            <div style={{ padding: "24px 24px 16px", borderBottom: `1px solid ${G.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontWeight: 900, fontSize: 20, color: G.text }}>{t.cart}</h2>
              <button onClick={() => setCartOpen(false)} style={{ background: G.surfaceEl, border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", color: G.text, fontSize: 18 }}>×</button>
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: 24 }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div style={{ fontSize: 64, marginBottom: 16 }}>🛒</div>
                  <div style={{ fontWeight: 700, color: G.text, marginBottom: 8 }}>{t.emptyCart}</div>
                  <div style={{ color: G.textMuted, fontSize: 14 }}>{t.emptyCartSub}</div>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {cart.map(item => (
                    <div key={item.id} style={{ display: "flex", gap: 12, background: G.surfaceEl, borderRadius: 16, padding: 14, border: `1px solid ${G.border}` }}>
                      <img src={item.img} alt="" style={{ width: 64, height: 64, borderRadius: 12, objectFit: "cover" }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 700, fontSize: 14, color: G.text, marginBottom: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lang === "ar" ? item.nameAr : item.nameTr}</div>
                        <div style={{ color: G.gold, fontWeight: 800, fontSize: 15 }}>{item.price * item.qty} ₺</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
                          <button onClick={() => updateQty(item.id, -1)} style={{ width: 28, height: 28, borderRadius: "50%", border: `1px solid ${G.border}`, background: G.surface, color: G.text, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                          <span style={{ fontWeight: 700, color: G.text }}>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} style={{ width: 28, height: 28, borderRadius: "50%", border: `1px solid ${G.gold}`, background: "linear-gradient(135deg, #c9a84c, #9a7a2e)", color: "#0a0a0a", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                          <button onClick={() => removeFromCart(item.id)} style={{ marginRight: "auto", background: "none", border: "none", color: "#e74c3c", cursor: "pointer", fontSize: 12, fontFamily: "'Cairo', sans-serif" }}>{t.remove}</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div style={{ padding: "20px 24px", borderTop: `1px solid ${G.border}`, background: G.surface }}>
                <div style={{ background: subtotal >= 500 ? "rgba(39,174,96,0.1)" : "rgba(201,168,76,0.1)", border: `1px solid ${subtotal >= 500 ? "#27ae6033" : "#c9a84c33"}`, borderRadius: 12, padding: "10px 16px", marginBottom: 16, fontSize: 13, color: subtotal >= 500 ? "#27ae60" : G.gold, textAlign: "center" }}>
                  {subtotal >= 500 ? t.freeDeliveryMsg : t.deliveryMsg}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", color: G.textMuted, fontSize: 14 }}><span>{t.subtotal}</span><span>{subtotal} ₺</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", color: G.textMuted, fontSize: 14 }}><span>{t.deliveryFee}</span><span style={{ color: deliveryFee === 0 ? "#27ae60" : G.text }}>{deliveryFee === 0 ? t.free : `${deliveryFee} ₺`}</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 900, fontSize: 18, color: G.gold, paddingTop: 8, borderTop: `1px solid ${G.border}` }}><span>{t.total}</span><span>{total} ₺</span></div>
                </div>
                <button onClick={() => { setCartOpen(false); setCheckoutOpen(true); }} className="btn-hover" style={{ width: "100%", padding: "16px", background: "linear-gradient(135deg, #c9a84c, #e8c96a)", border: "none", borderRadius: 16, color: "#0a0a0a", fontWeight: 900, fontSize: 16, cursor: "pointer", fontFamily: "'Cairo', sans-serif" }}>{t.checkout}</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CHECKOUT MODAL */}
      {checkoutOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 6000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div onClick={() => setCheckoutOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }} />
          <div style={{ position: "relative", background: G.surface, borderRadius: 28, padding: "36px 32px", width: "min(500px, 95vw)", maxHeight: "90vh", overflowY: "auto", direction: t.dir, border: `1px solid ${G.border}` }}>
            <button onClick={() => setCheckoutOpen(false)} style={{ position: "absolute", top: 20, [lang === "ar" ? "left" : "right"]: 20, background: G.surfaceEl, border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", color: G.text, fontSize: 20 }}>×</button>
            <h2 style={{ fontWeight: 900, fontSize: 22, marginBottom: 28, color: G.text }}>{t.checkout}</h2>
            {[
              { key: "name", label: t.name, type: "text" },
              { key: "phone", label: t.phone + " *", type: "tel" },
              { key: "address", label: t.address, type: "text" },
            ].map(field => (
              <div key={field.key} style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 13, color: G.textMuted, marginBottom: 8, fontWeight: 600 }}>{field.label}</label>
                <input type={field.type} value={orderForm[field.key]} onChange={e => setOrderForm(f => ({ ...f, [field.key]: e.target.value }))}
                  style={{ width: "100%", padding: "12px 16px", background: G.surfaceEl, border: `1px solid ${G.border}`, borderRadius: 12, color: G.text, fontSize: 15, fontFamily: "'Cairo', sans-serif", outline: "none" }} />
              </div>
            ))}
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, color: G.textMuted, marginBottom: 8, fontWeight: 600 }}>{t.notes}</label>
              <textarea value={orderForm.notes} onChange={e => setOrderForm(f => ({ ...f, notes: e.target.value }))} placeholder={t.addNote}
                style={{ width: "100%", padding: "12px 16px", background: G.surfaceEl, border: `1px solid ${G.border}`, borderRadius: 12, color: G.text, fontSize: 14, fontFamily: "'Cairo', sans-serif", outline: "none", resize: "none", height: 80 }} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, color: G.textMuted, marginBottom: 12, fontWeight: 600 }}>{t.paymentMethod}</label>
              <div style={{ display: "flex", gap: 10 }}>
                {[["cash", "💵", t.cash], ["card", "💳", t.card], ["online", "🌐", t.online]].map(([val, icon, label]) => (
                  <button key={val} onClick={() => setOrderForm(f => ({ ...f, payment: val }))}
                    style={{ flex: 1, padding: "12px 8px", borderRadius: 12, border: `2px solid ${orderForm.payment === val ? G.gold : G.border}`, background: orderForm.payment === val ? "rgba(201,168,76,0.15)" : G.surfaceEl, color: orderForm.payment === val ? G.gold : G.textMuted, cursor: "pointer", fontFamily: "'Cairo', sans-serif", fontSize: 12, fontWeight: 700, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 20 }}>{icon}</span>{label}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ background: G.surfaceEl, borderRadius: 16, padding: "16px 20px", marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", color: G.textMuted, fontSize: 14, marginBottom: 8 }}><span>{t.subtotal}</span><span>{subtotal} ₺</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", color: G.textMuted, fontSize: 14, marginBottom: 8 }}><span>{t.deliveryFee}</span><span style={{ color: deliveryFee === 0 ? "#27ae60" : G.text }}>{deliveryFee === 0 ? t.free : `${deliveryFee} ₺`}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 900, fontSize: 20, color: G.gold, paddingTop: 8, borderTop: `1px solid ${G.border}` }}><span>{t.total}</span><span>{total} ₺</span></div>
            </div>
            <button onClick={sendWhatsApp} className="btn-hover" style={{ width: "100%", padding: "16px", background: "linear-gradient(135deg, #25D366, #128C7E)", border: "none", borderRadius: 16, color: "#fff", fontWeight: 900, fontSize: 16, cursor: "pointer", fontFamily: "'Cairo', sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <span>📱</span> {t.sendOrder}
            </button>
          </div>
        </div>
      )}

      {/* ORDER TRACKING MODAL */}
      {trackingOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 7000, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }} />
          <div style={{ position: "relative", background: G.surface, borderRadius: 28, padding: "36px 32px", width: "min(480px, 95vw)", direction: t.dir, border: `1px solid ${G.border}` }}>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
              <h2 style={{ fontWeight: 900, fontSize: 22, color: G.gold, marginBottom: 8 }}>{t.orderTracking}</h2>
              <p style={{ color: G.textMuted, fontSize: 14 }}>{lang === "ar" ? "طلبك في الطريق!" : "Siparişiniz yolda!"}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {TRACKING_STEPS.map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, position: "relative" }}>
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: i <= trackingStep ? "linear-gradient(135deg, #c9a84c, #e8c96a)" : G.surfaceEl, border: `2px solid ${i <= trackingStep ? "#c9a84c" : G.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, transition: "all 0.5s", boxShadow: i <= trackingStep ? "0 0 20px rgba(201,168,76,0.4)" : "none" }}>
                      {step.icon}
                    </div>
                    {i < TRACKING_STEPS.length - 1 && (
                      <div style={{ position: "absolute", top: 48, left: "50%", transform: "translateX(-50%)", width: 2, height: 24, background: i < trackingStep ? "#c9a84c" : G.border, transition: "background 0.5s" }} />
                    )}
                  </div>
                  <div style={{ flex: 1, paddingBottom: i < TRACKING_STEPS.length - 1 ? 24 : 0 }}>
                    <div style={{ fontWeight: i <= trackingStep ? 800 : 500, color: i <= trackingStep ? G.gold : G.textMuted, fontSize: 15, transition: "all 0.5s" }}>{t[step.key]}</div>
                    {i === trackingStep && <div style={{ fontSize: 12, color: G.textMuted, marginTop: 4, animation: "pulse 1.5s ease infinite" }}>{lang === "ar" ? "جاري الآن..." : "Şu an..."}</div>}
                  </div>
                  {i <= trackingStep && <div style={{ color: "#27ae60", fontSize: 18 }}>✓</div>}
                </div>
              ))}
            </div>
            <button onClick={() => setTrackingOpen(false)} style={{ width: "100%", marginTop: 32, padding: "14px", background: G.surfaceEl, border: `1px solid ${G.border}`, borderRadius: 16, color: G.text, fontWeight: 700, cursor: "pointer", fontFamily: "'Cairo', sans-serif", fontSize: 15 }}>{t.close}</button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp */}
      <a href="https://wa.me/905013617543" target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 24, [lang === "ar" ? "left" : "right"]: 24, width: 60, height: 60, background: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, boxShadow: "0 8px 32px rgba(37,211,102,0.4)", zIndex: 4000, textDecoration: "none", animation: "float 3s ease-in-out infinite" }}>📱</a>
    </div>
  );
}

// ─── MENU CARD ─────────────────────────────────────────────────────────────────
function MenuCard({ item, lang, t, G, addToCart, toggleFav, favorites }) {
  const [qty, setQty] = useState(1);
  const isFav = favorites.includes(item.id);
  return (
    <div className="card-hover" style={{ background: G.cardBg, borderRadius: 24, overflow: "hidden", border: `1px solid ${G.border}`, boxShadow: "0 4px 20px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <img src={item.img} alt={lang === "ar" ? item.nameAr : item.nameTr} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }} onMouseEnter={e => e.target.style.transform = "scale(1.08)"} onMouseLeave={e => e.target.style.transform = "scale(1)"} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
        {item.badge && <div style={{ position: "absolute", top: 12, right: 12, background: "linear-gradient(135deg, #c9a84c, #e8c96a)", color: "#0a0a0a", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 900 }}>{item.badge}</div>}
        <button className="fav-btn" onClick={() => toggleFav(item.id)} style={{ position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s", backdropFilter: "blur(4px)" }}>
          {isFav ? "❤️" : "🤍"}
        </button>
        <div style={{ position: "absolute", bottom: 10, left: 12, display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ color: "#f39c12", fontSize: 13 }}>★</span>
          <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>{item.rating}</span>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 11 }}>({item.reviews})</span>
        </div>
      </div>
      <div style={{ padding: "18px 18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 8, color: G.text, lineHeight: 1.3 }}>{lang === "ar" ? item.nameAr : item.nameTr}</h3>
        <p style={{ color: G.textMuted, fontSize: 12, marginBottom: "auto", lineHeight: 1.7, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{lang === "ar" ? item.descAr : item.descTr}</p>
        <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: G.gold }}>{item.price} <span style={{ fontSize: 14 }}>₺</span></div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 28, height: 28, borderRadius: "50%", border: `1px solid ${G.border}`, background: G.surfaceEl, color: G.text, cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
              <span style={{ fontWeight: 700, color: G.text, fontSize: 14, minWidth: 16, textAlign: "center" }}>{qty}</span>
              <button onClick={() => setQty(q => q + 1)} style={{ width: 28, height: 28, borderRadius: "50%", border: `1px solid ${G.gold}`, background: "linear-gradient(135deg, #c9a84c, #9a7a2e)", color: "#0a0a0a", cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
            </div>
            <button onClick={() => { for (let i = 0; i < qty; i++) addToCart(item); setQty(1); }} className="btn-hover" style={{ background: "linear-gradient(135deg, #c9a84c, #9a7a2e)", border: "none", borderRadius: 16, padding: "8px 14px", color: "#0a0a0a", fontWeight: 700, cursor: "pointer", fontFamily: "'Cairo', sans-serif", fontSize: 12 }}>{t.addToCart}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SECTION TITLE ─────────────────────────────────────────────────────────────
function SectionTitle({ t, titleKey, G, lang }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <h2 style={{ fontSize: 36, fontWeight: 900, color: G.text, marginBottom: 12 }}>{t[titleKey]}</h2>
      <div style={{ width: 60, height: 3, background: "linear-gradient(90deg, #c9a84c, #e8c96a)", borderRadius: 2, margin: "0 auto 16px" }} />
    </div>
  );
}

// ─── ADMIN DASHBOARD ──────────────────────────────────────────────────────────
function AdminDashboard({ t, lang, G, setPage, setAdminLoggedIn, adminSection, setAdminSection, products, setProducts, editProduct, setEditProduct, showNotif, CHART_DATA, ADMIN_ORDERS, CATS, notification }) {
  const [form, setForm] = useState({ nameAr: "", nameTr: "", descAr: "", descTr: "", price: "", category: "shawarma", img: "", badge: "", rating: 4.5, reviews: 0 });
  const [addingProduct, setAddingProduct] = useState(false);

  const AG = {
    bg: "#080808", surface: "#0e0e0e", surfaceEl: "#161616", gold: "#c9a84c",
    text: "#f0ece0", textMuted: "#666", border: "#1e1e1e"
  };

  const statusColor = { received: "#3498db", preparing: "#e67e22", cooking: "#e74c3c", onTheWay: "#9b59b6", delivered: "#27ae60" };

  const maxRev = Math.max(...CHART_DATA.map(d => d.revenue));

  const SIDEBAR_ITEMS = [
    { key: "dashboard", icon: "📊", labelAr: "لوحة التحكم", labelTr: "Panel" },
    { key: "orders", icon: "📦", labelAr: "الطلبات", labelTr: "Siparişler" },
    { key: "products", icon: "🍽️", labelAr: "المنتجات", labelTr: "Ürünler" },
    { key: "customers", icon: "👥", labelAr: "العملاء", labelTr: "Müşteriler" },
    { key: "analytics", icon: "📈", labelAr: "التحليلات", labelTr: "Analitik" },
    { key: "settings", icon: "⚙️", labelAr: "الإعدادات", labelTr: "Ayarlar" },
  ];

  const STATS = [
    { icon: "💰", label: lang === "ar" ? "إيرادات اليوم" : "Bugünkü Gelir", value: "12,840 ₺", change: "+18%", color: "#c9a84c" },
    { icon: "📦", label: lang === "ar" ? "إجمالي الطلبات" : "Toplam Sipariş", value: "84", change: "+12%", color: "#3498db" },
    { icon: "⚡", label: lang === "ar" ? "الطلبات النشطة" : "Aktif Siparişler", value: "7", change: "live", color: "#e74c3c" },
    { icon: "👤", label: lang === "ar" ? "عملاء جدد" : "Yeni Müşteriler", value: "23", change: "+5%", color: "#27ae60" },
  ];

  const handleDeleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    showNotif(lang === "ar" ? "تم حذف المنتج" : "Ürün silindi");
  };

  const handleSaveProduct = () => {
    if (editProduct) {
      setProducts(prev => prev.map(p => p.id === editProduct.id ? { ...p, ...form, price: Number(form.price) } : p));
      setEditProduct(null);
      showNotif(lang === "ar" ? "تم تحديث المنتج" : "Ürün güncellendi");
    } else {
      const newProd = { ...form, id: Date.now(), price: Number(form.price) };
      setProducts(prev => [...prev, newProd]);
      setAddingProduct(false);
      showNotif(lang === "ar" ? "تم إضافة المنتج" : "Ürün eklendi");
    }
    setForm({ nameAr: "", nameTr: "", descAr: "", descTr: "", price: "", category: "shawarma", img: "", badge: "", rating: 4.5, reviews: 0 });
  };

  const startEdit = (product) => {
    setEditProduct(product);
    setForm({ nameAr: product.nameAr || "", nameTr: product.nameTr || "", descAr: product.descAr || "", descTr: product.descTr || "", price: product.price, category: product.category, img: product.img || "", badge: product.badge || "", rating: product.rating, reviews: product.reviews });
    setAddingProduct(true);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: AG.bg, color: AG.text, fontFamily: "'Cairo', sans-serif", direction: lang === "ar" ? "rtl" : "ltr" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
      <style>{`
        .admin-nav-item { transition: all 0.2s; }
        .admin-nav-item:hover { background: rgba(201,168,76,0.1) !important; color: #c9a84c !important; }
        .admin-table-row { transition: background 0.2s; }
        .admin-table-row:hover { background: rgba(201,168,76,0.05) !important; }
      `}</style>

      {/* Notification */}
      {notification && (
        <div style={{ position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #c9a84c, #e8c96a)", color: "#0a0a0a", padding: "12px 28px", borderRadius: 50, fontWeight: 700, zIndex: 10000, fontSize: 15, boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}>
          {notification.msg}
        </div>
      )}

      {/* SIDEBAR */}
      <div style={{ width: 240, background: AG.surface, borderLeft: lang === "ar" ? "none" : `1px solid ${AG.border}`, borderRight: lang === "ar" ? `1px solid ${AG.border}` : "none", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "28px 24px", borderBottom: `1px solid ${AG.border}` }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: AG.gold }}>القمة</div>
          <div style={{ fontSize: 11, color: AG.textMuted, marginTop: 4 }}>{lang === "ar" ? "لوحة الإدارة" : "Yönetim Paneli"}</div>
        </div>
        <nav style={{ flex: 1, padding: "16px 12px" }}>
          {SIDEBAR_ITEMS.map(item => (
            <button key={item.key} className="admin-nav-item" onClick={() => setAdminSection(item.key)}
              style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "none", background: adminSection === item.key ? "rgba(201,168,76,0.15)" : "none", color: adminSection === item.key ? AG.gold : AG.textMuted, cursor: "pointer", display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: adminSection === item.key ? 700 : 500, marginBottom: 4, fontFamily: "'Cairo', sans-serif", textAlign: lang === "ar" ? "right" : "left" }}>
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              <span>{lang === "ar" ? item.labelAr : item.labelTr}</span>
              {adminSection === item.key && <div style={{ marginRight: lang === "ar" ? "auto" : 0, marginLeft: lang === "ar" ? 0 : "auto", width: 4, height: 4, borderRadius: "50%", background: AG.gold }} />}
            </button>
          ))}
        </nav>
        <div style={{ padding: "16px 12px", borderTop: `1px solid ${AG.border}` }}>
          <button onClick={() => setPage("home")} style={{ width: "100%", padding: "10px 16px", borderRadius: 12, border: "none", background: "none", color: AG.textMuted, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontFamily: "'Cairo', sans-serif" }}>🌐 <span>{lang === "ar" ? "عرض الموقع" : "Siteyi Görüntüle"}</span></button>
          <button onClick={() => { setAdminLoggedIn(false); setAdminPass(""); }} style={{ width: "100%", padding: "10px 16px", borderRadius: 12, border: "none", background: "none", color: "#e74c3c", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontFamily: "'Cairo', sans-serif" }}>🚪 <span>{t.logout}</span></button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, overflowY: "auto", padding: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: AG.text }}>{SIDEBAR_ITEMS.find(i => i.key === adminSection)?.[lang === "ar" ? "labelAr" : "labelTr"]}</h1>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ background: "#27ae6020", border: "1px solid #27ae6040", borderRadius: 20, padding: "6px 16px", fontSize: 12, color: "#27ae60", fontWeight: 700 }}>🟢 {lang === "ar" ? "النظام يعمل" : "Sistem Aktif"}</div>
          </div>
        </div>

        {/* DASHBOARD */}
        {adminSection === "dashboard" && (
          <div>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 32 }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ background: AG.surface, borderRadius: 20, padding: 24, border: `1px solid ${AG.border}`, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: `${s.color}15` }} />
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: s.color, marginBottom: 4 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: AG.textMuted, marginBottom: 8 }}>{s.label}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: s.change === "live" ? "#e74c3c" : "#27ae60" }}>{s.change === "live" ? "● Live" : `↑ ${s.change}`}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24, marginBottom: 24 }}>
              <div style={{ background: AG.surface, borderRadius: 20, padding: 28, border: `1px solid ${AG.border}` }}>
                <h3 style={{ fontWeight: 800, marginBottom: 24, color: AG.text }}>{lang === "ar" ? "إيرادات الأسبوع" : "Haftalık Gelir"}</h3>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 160 }}>
                  {CHART_DATA.map((d, i) => (
                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                      <div style={{ fontSize: 10, color: AG.textMuted }}>{d.revenue.toLocaleString()}</div>
                      <div style={{ width: "100%", height: (d.revenue / maxRev) * 120, background: `linear-gradient(to top, #c9a84c, #e8c96a)`, borderRadius: "6px 6px 0 0", transition: "height 0.5s", boxShadow: "0 -4px 12px rgba(201,168,76,0.3)" }} />
                      <div style={{ fontSize: 11, color: AG.textMuted }}>{d.day}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: AG.surface, borderRadius: 20, padding: 28, border: `1px solid ${AG.border}` }}>
                <h3 style={{ fontWeight: 800, marginBottom: 20, color: AG.text }}>{lang === "ar" ? "توزيع المبيعات" : "Satış Dağılımı"}</h3>
                {[["شاورما", 42, "#c9a84c"], ["مشاويات", 28, "#e74c3c"], ["برجر", 16, "#3498db"], ["أخرى", 14, "#27ae60"]].map(([n, p, c]) => (
                  <div key={n} style={{ marginBottom: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6, color: AG.textMuted }}><span>{n}</span><span style={{ color: c, fontWeight: 700 }}>{p}%</span></div>
                    <div style={{ height: 6, background: AG.surfaceEl, borderRadius: 3 }}>
                      <div style={{ height: "100%", width: `${p}%`, background: c, borderRadius: 3, transition: "width 0.5s" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div style={{ background: AG.surface, borderRadius: 20, padding: 28, border: `1px solid ${AG.border}` }}>
              <h3 style={{ fontWeight: 800, marginBottom: 20, color: AG.text }}>{lang === "ar" ? "أحدث الطلبات" : "Son Siparişler"}</h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead><tr style={{ borderBottom: `1px solid ${AG.border}` }}>
                    {["ID", lang === "ar" ? "العميل" : "Müşteri", lang === "ar" ? "المبلغ" : "Tutar", lang === "ar" ? "الحالة" : "Durum", lang === "ar" ? "الوقت" : "Süre"].map(h => (
                      <th key={h} style={{ padding: "10px 16px", textAlign: lang === "ar" ? "right" : "left", fontSize: 12, color: AG.textMuted, fontWeight: 600 }}>{h}</th>
                    ))}
                  </tr></thead>
                  <tbody>
                    {ADMIN_ORDERS.map(order => (
                      <tr key={order.id} className="admin-table-row" style={{ borderBottom: `1px solid ${AG.border}10` }}>
                        <td style={{ padding: "14px 16px", fontSize: 13, color: AG.gold, fontWeight: 700 }}>{order.id}</td>
                        <td style={{ padding: "14px 16px", fontSize: 13, color: AG.text }}>{order.customer}</td>
                        <td style={{ padding: "14px 16px", fontSize: 13, color: "#27ae60", fontWeight: 700 }}>{order.total} ₺</td>
                        <td style={{ padding: "14px 16px" }}>
                          <span style={{ background: `${statusColor[order.status]}20`, color: statusColor[order.status], padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{t[order.status]}</span>
                        </td>
                        <td style={{ padding: "14px 16px", fontSize: 12, color: AG.textMuted }}>{order.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ORDERS */}
        {adminSection === "orders" && (
          <div style={{ background: AG.surface, borderRadius: 20, padding: 28, border: `1px solid ${AG.border}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h3 style={{ fontWeight: 800, color: AG.text }}>{lang === "ar" ? "إدارة الطلبات" : "Sipariş Yönetimi"}</h3>
              <div style={{ background: "#e74c3c20", border: "1px solid #e74c3c40", borderRadius: 20, padding: "6px 16px", fontSize: 12, color: "#e74c3c", fontWeight: 700 }}>● 7 {lang === "ar" ? "نشط" : "Aktif"}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {ADMIN_ORDERS.map(order => (
                <div key={order.id} style={{ background: AG.surfaceEl, borderRadius: 16, padding: 20, border: `1px solid ${AG.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <div style={{ fontWeight: 800, color: AG.gold, marginBottom: 4 }}>{order.id}</div>
                    <div style={{ color: AG.text, fontSize: 15, fontWeight: 600 }}>{order.customer}</div>
                    <div style={{ color: AG.textMuted, fontSize: 12, marginTop: 4 }}>{order.items} {lang === "ar" ? "عناصر" : "ürün"} • {order.time}</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#27ae60" }}>{order.total} ₺</div>
                    <span style={{ background: `${statusColor[order.status]}20`, color: statusColor[order.status], padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{t[order.status]}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button style={{ padding: "8px 16px", borderRadius: 10, border: "none", background: "rgba(52,152,219,0.2)", color: "#3498db", cursor: "pointer", fontSize: 12, fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>{lang === "ar" ? "تحديث" : "Güncelle"}</button>
                    <button style={{ padding: "8px 16px", borderRadius: 10, border: "none", background: "rgba(231,76,60,0.2)", color: "#e74c3c", cursor: "pointer", fontSize: 12, fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>{lang === "ar" ? "إلغاء" : "İptal"}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRODUCTS */}
        {adminSection === "products" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div style={{ color: AG.textMuted, fontSize: 14 }}>{products.length} {lang === "ar" ? "منتج" : "ürün"}</div>
              <button onClick={() => { setEditProduct(null); setForm({ nameAr: "", nameTr: "", descAr: "", descTr: "", price: "", category: "shawarma", img: "", badge: "", rating: 4.5, reviews: 0 }); setAddingProduct(true); }}
                style={{ padding: "10px 24px", background: "linear-gradient(135deg, #c9a84c, #e8c96a)", border: "none", borderRadius: 12, color: "#0a0a0a", fontWeight: 700, cursor: "pointer", fontFamily: "'Cairo', sans-serif" }}>
                + {t.addProduct}
              </button>
            </div>

            {addingProduct && (
              <div style={{ background: AG.surface, borderRadius: 20, padding: 28, border: `1px solid ${AG.gold}44`, marginBottom: 24 }}>
                <h3 style={{ fontWeight: 800, marginBottom: 24, color: AG.gold }}>{editProduct ? t.editProduct : t.addProduct}</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { key: "nameAr", label: lang === "ar" ? "الاسم بالعربية" : "Arapça Ad" },
                    { key: "nameTr", label: lang === "ar" ? "الاسم بالتركية" : "Türkçe Ad" },
                    { key: "price", label: lang === "ar" ? "السعر (₺)" : "Fiyat (₺)", type: "number" },
                    { key: "img", label: lang === "ar" ? "رابط الصورة" : "Resim URL" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: "block", fontSize: 12, color: AG.textMuted, marginBottom: 6 }}>{f.label}</label>
                      <input type={f.type || "text"} value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        style={{ width: "100%", padding: "10px 14px", background: AG.surfaceEl, border: `1px solid ${AG.border}`, borderRadius: 10, color: AG.text, fontSize: 14, fontFamily: "'Cairo', sans-serif", outline: "none" }} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", fontSize: 12, color: AG.textMuted, marginBottom: 6 }}>{lang === "ar" ? "التصنيف" : "Kategori"}</label>
                    <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
                      style={{ width: "100%", padding: "10px 14px", background: AG.surfaceEl, border: `1px solid ${AG.border}`, borderRadius: 10, color: AG.text, fontSize: 14, fontFamily: "'Cairo', sans-serif", outline: "none" }}>
                      {["shawarma", "grills", "burgers", "pizza", "desserts", "drinks"].map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, color: AG.textMuted, marginBottom: 6 }}>{lang === "ar" ? "شارة (اختياري)" : "Rozet (opsiyonel)"}</label>
                    <input value={form.badge} onChange={e => setForm(p => ({ ...p, badge: e.target.value }))}
                      style={{ width: "100%", padding: "10px 14px", background: AG.surfaceEl, border: `1px solid ${AG.border}`, borderRadius: 10, color: AG.text, fontSize: 14, fontFamily: "'Cairo', sans-serif", outline: "none" }} />
                  </div>
                </div>
                <div style={{ marginTop: 16 }}>
                  <label style={{ display: "block", fontSize: 12, color: AG.textMuted, marginBottom: 6 }}>{lang === "ar" ? "الوصف بالعربية" : "Arapça Açıklama"}</label>
                  <textarea value={form.descAr} onChange={e => setForm(p => ({ ...p, descAr: e.target.value }))}
                    style={{ width: "100%", padding: "10px 14px", background: AG.surfaceEl, border: `1px solid ${AG.border}`, borderRadius: 10, color: AG.text, fontSize: 14, fontFamily: "'Cairo', sans-serif", outline: "none", resize: "none", height: 72 }} />
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                  <button onClick={handleSaveProduct} style={{ padding: "10px 28px", background: "linear-gradient(135deg, #c9a84c, #e8c96a)", border: "none", borderRadius: 12, color: "#0a0a0a", fontWeight: 700, cursor: "pointer", fontFamily: "'Cairo', sans-serif" }}>{t.save}</button>
                  <button onClick={() => { setAddingProduct(false); setEditProduct(null); }} style={{ padding: "10px 28px", background: AG.surfaceEl, border: `1px solid ${AG.border}`, borderRadius: 12, color: AG.textMuted, cursor: "pointer", fontFamily: "'Cairo', sans-serif" }}>{t.cancel}</button>
                </div>
              </div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
              {products.map(p => (
                <div key={p.id} style={{ background: AG.surface, borderRadius: 20, overflow: "hidden", border: `1px solid ${AG.border}` }}>
                  <div style={{ height: 160, overflow: "hidden", position: "relative" }}>
                    <img src={p.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { e.target.src = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=60"; }} />
                    <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.7)", borderRadius: 16, padding: "4px 10px", fontSize: 11, color: AG.gold, fontWeight: 700 }}>{p.category}</div>
                  </div>
                  <div style={{ padding: 16 }}>
                    <div style={{ fontWeight: 800, fontSize: 15, color: AG.text, marginBottom: 4 }}>{lang === "ar" ? p.nameAr : p.nameTr}</div>
                    <div style={{ color: "#27ae60", fontWeight: 900, fontSize: 18, marginBottom: 12 }}>{p.price} ₺</div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => startEdit(p)} style={{ flex: 1, padding: "8px", borderRadius: 10, border: "none", background: "rgba(52,152,219,0.2)", color: "#3498db", cursor: "pointer", fontSize: 12, fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>✏️ {lang === "ar" ? "تعديل" : "Düzenle"}</button>
                      <button onClick={() => handleDeleteProduct(p.id)} style={{ flex: 1, padding: "8px", borderRadius: 10, border: "none", background: "rgba(231,76,60,0.2)", color: "#e74c3c", cursor: "pointer", fontSize: 12, fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}>🗑️ {lang === "ar" ? "حذف" : "Sil"}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CUSTOMERS */}
        {adminSection === "customers" && (
          <div style={{ background: AG.surface, borderRadius: 20, padding: 28, border: `1px solid ${AG.border}` }}>
            <h3 style={{ fontWeight: 800, marginBottom: 24, color: AG.text }}>{lang === "ar" ? "إدارة العملاء" : "Müşteri Yönetimi"}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["محمد يلماظ", "فاطمة كايا", "أحمد دمير", "سارة أوزتورك", "عمر شاهين"].map((name, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", background: AG.surfaceEl, borderRadius: 14, border: `1px solid ${AG.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #c9a84c, #9a7a2e)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#0a0a0a" }}>{name[0]}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: AG.text }}>{name}</div>
                      <div style={{ fontSize: 12, color: AG.textMuted }}>{(i + 2) * 3} {lang === "ar" ? "طلبات" : "sipariş"} • {(i + 1) * 385} ₺</div>
                    </div>
                  </div>
                  <div style={{ background: "#27ae6020", color: "#27ae60", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{lang === "ar" ? "نشط" : "Aktif"}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ANALYTICS */}
        {adminSection === "analytics" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
              <div style={{ background: AG.surface, borderRadius: 20, padding: 28, border: `1px solid ${AG.border}` }}>
                <h3 style={{ fontWeight: 800, marginBottom: 20, color: AG.text }}>{lang === "ar" ? "المنتجات الأكثر مبيعاً" : "En Çok Satan Ürünler"}</h3>
                {[["الشاورما العربي", 284, "#c9a84c"], ["برجر القمة", 196, "#e74c3c"], ["كنافة نابلسية", 145, "#9b59b6"], ["مشاوي مشكّلة", 98, "#3498db"]].map(([n, v, c], i) => (
                  <div key={n} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
                      <span style={{ fontSize: 13, color: AG.text }}>{n}</span>
                    </div>
                    <div>
                      <div style={{ width: 100, height: 6, background: AG.surfaceEl, borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${(v / 284) * 100}%`, background: c, borderRadius: 3 }} />
                      </div>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: c }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: AG.surface, borderRadius: 20, padding: 28, border: `1px solid ${AG.border}` }}>
                <h3 style={{ fontWeight: 800, marginBottom: 20, color: AG.text }}>{lang === "ar" ? "ملخص الشهر" : "Aylık Özet"}</h3>
                {[["إجمالي الإيرادات", "87,400 ₺", "#27ae60"], ["متوسط الطلب", "245 ₺", "#c9a84c"], ["إجمالي الطلبات", "357", "#3498db"], ["تقييم المطعم", "4.9 ★", "#f39c12"]].map(([l, v, c]) => (
                  <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: `1px solid ${AG.border}` }}>
                    <span style={{ fontSize: 13, color: AG.textMuted }}>{l}</span>
                    <span style={{ fontSize: 15, fontWeight: 800, color: c }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: AG.surface, borderRadius: 20, padding: 28, border: `1px solid ${AG.border}` }}>
              <h3 style={{ fontWeight: 800, marginBottom: 24, color: AG.text }}>{lang === "ar" ? "إيرادات الأسبوع" : "Haftalık Gelir Trendi"}</h3>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 180 }}>
                {CHART_DATA.map((d, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div style={{ fontSize: 10, color: AG.textMuted }}>{d.revenue}</div>
                    <div style={{ width: "100%", height: (d.revenue / maxRev) * 150, background: i === 6 ? "linear-gradient(to top, #c9a84c, #e8c96a)" : `rgba(201,168,76,${0.3 + i * 0.1})`, borderRadius: "8px 8px 0 0", transition: "height 0.5s" }} />
                    <div style={{ fontSize: 11, color: AG.textMuted }}>{d.day}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SETTINGS */}
        {adminSection === "settings" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { title: lang === "ar" ? "معلومات المطعم" : "Restoran Bilgileri", fields: [["الاسم", "القمة"], ["الهاتف", "0501 361 7543"], ["الموقع", "İzmir, Türkiye"]] },
              { title: lang === "ar" ? "إعدادات التوصيل" : "Teslimat Ayarları", fields: [["رسوم التوصيل", "85 ₺"], ["حد التوصيل المجاني", "500 ₺"], ["وقت التوصيل", "30-45 دقيقة"]] },
            ].map((section, i) => (
              <div key={i} style={{ background: AG.surface, borderRadius: 20, padding: 28, border: `1px solid ${AG.border}` }}>
                <h3 style={{ fontWeight: 800, marginBottom: 24, color: AG.gold }}>{section.title}</h3>
                {section.fields.map(([label, value]) => (
                  <div key={label} style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 12, color: AG.textMuted, marginBottom: 6 }}>{label}</label>
                    <input defaultValue={value} style={{ width: "100%", padding: "10px 14px", background: AG.surfaceEl, border: `1px solid ${AG.border}`, borderRadius: 10, color: AG.text, fontSize: 14, fontFamily: "'Cairo', sans-serif", outline: "none" }} />
                  </div>
                ))}
                <button style={{ padding: "10px 24px", background: "linear-gradient(135deg, #c9a84c, #e8c96a)", border: "none", borderRadius: 12, color: "#0a0a0a", fontWeight: 700, cursor: "pointer", fontFamily: "'Cairo', sans-serif" }}>{lang === "ar" ? "حفظ التغييرات" : "Değişiklikleri Kaydet"}</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
