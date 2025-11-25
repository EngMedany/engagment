// نصوص اللغتين
const translations = {
  en: {
    navHero: "Invitation",
    navDetails: "Details",
    navStory: "Our Story",
    navCountdown: "Countdown",
    navRSVP: "RSVP",

    heroEyebrow: "Save the Date",
    heroTitle: "Mohamed & Rawan",
    heroSub: "25 December 2025 · 7 PM · Home R",

    detailsTitle: "Event Details",
    detailsIntro: "We would be honored to have you with us on this special evening.",
    detailsWhenLabel: "When",
    detailsWhenValue: "Thursday · 25 December 2025 · 7 PM",
    detailsWhereLabel: "Where",
    detailsWhereValue: "Home R · Any City",
    detailsDressLabel: "Dress code",
    detailsDressValue: "Elegant · Touch of Blue",

    btnLocation: "View Location",
    btnWhatsapp: "WhatsApp",

    storyTitle: "Our Story",
    storyIntro: "A small beginning that turned into a lifetime journey.",
    storyBody1: "From simple conversations to shared dreams, every step brought us closer to this day.",
    storyBody2: "We cannot wait to celebrate this next chapter with the people we love the most.",

    countdownTitle: "Countdown to the Day",
    countdownIntro: "The celebration is almost here.",
    cdDays: "Days",
    cdHours: "Hours",
    cdMinutes: "Minutes",
    cdSeconds: "Seconds",

    rsvpTitle: "RSVP",
    rsvpIntro: "Please let us know if you can make it.",
    rsvpNameLabel: "Your Name",
    rsvpGuestsLabel: "Number of Guests",
    rsvpMessageLabel: "Message",
    btnRSVP: "Send on WhatsApp",

    footerText: "Made with love for Mohamed & Rawan."
  },
  ar: {
    navHero: "الدعوة",
    navDetails: "التفاصيل",
    navStory: "قصتنا",
    navCountdown: "العد التنازلي",
    navRSVP: "تأكيد الحضور",

    heroEyebrow: "احفظوا التاريخ",
    heroTitle: "محمد و روان",
    heroSub: "٢٥ ديسمبر ٢٠٢٥ · الساعة ٧ مساءً · بيت R",

    detailsTitle: "تفاصيل المناسبة",
    detailsIntro: "يسعدنا وجودكم معنا في هذه الليلة المميزة.",
    detailsWhenLabel: "الموعد",
    detailsWhenValue: "الخميس · ٢٥ ديسمبر ٢٠٢٥ · الساعة ٧ مساءً",
    detailsWhereLabel: "المكان",
    detailsWhereValue: "بيت R · أي مدينة",
    detailsDressLabel: "اللبس",
    detailsDressValue: "كلاسيك أنيق · لمسة أزرق",

    btnLocation: "الموقع على الخريطة",
    btnWhatsapp: "واتساب",

    storyTitle: "قصتنا",
    storyIntro: "بداية بسيطة تحولت إلى رحلة عمر.",
    storyBody1: "من حديث صغير إلى أحلام مشتركة، كل خطوة قربتنا من هذا اليوم.",
    storyBody2: "متحمسون أن نشارك هذه اللحظة مع أحب الناس إلى قلوبنا.",

    countdownTitle: "العد التنازلي لليوم",
    countdownIntro: "الاحتفال اقترب كثيرًا.",
    cdDays: "أيام",
    cdHours: "ساعات",
    cdMinutes: "دقائق",
    cdSeconds: "ثوانٍ",

    rsvpTitle: "تأكيد الحضور",
    rsvpIntro: "من فضلك أخبرنا إذا كنت تستطيع الحضور.",
    rsvpNameLabel: "اسمك",
    rsvpGuestsLabel: "عدد الحضور",
    rsvpMessageLabel: "رسالة",
    btnRSVP: "إرسال على واتساب",

    footerText: "صُنع بحب من أجل محمد و روان."
  }
};

let currentLang = "en";

// تطبيق اللغة على كل العناصر التي تحتوي data-key
function applyLanguage(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (!dict[key]) return;
    // لو فيه <br> في النص، استخدم innerHTML
    if (dict[key].includes("<br>")) {
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });

  const cardTextContainer = document.body; // لتبديل الاتجاه على مستوى الصفحة
  if (lang === "ar") {
    document.documentElement.lang = "ar";
    cardTextContainer.classList.add("rtl");
    document.getElementById("langToggle").classList.add("ar");
  } else {
    document.documentElement.lang = "en";
    cardTextContainer.classList.remove("rtl");
    document.getElementById("langToggle").classList.remove("ar");
  }

  currentLang = lang;
}

// سويتش اللغة
const langToggle = document.getElementById("langToggle");
langToggle.addEventListener("click", () => {
  const nextLang = currentLang === "en" ? "ar" : "en";
  applyLanguage(nextLang);
});

// أزرار اللوكيشن و الواتساب
const locationBtn = document.getElementById("locationBtn");
const whatsappBtn = document.getElementById("whatsappBtn");

locationBtn.addEventListener("click", () => {
  window.open("https://maps.google.com?q=Home+M", "_blank");
});

whatsappBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value || "";
  const guests = document.getElementById("guests").value || "1";
  const message = document.getElementById("message").value || "";

  const baseTextEn = `Hello, I am confirming for Mohamed & Rawan event.%0AName: ${name}%0AGuests: ${guests}%0AMessage: ${message}`;
  const baseTextAr = `مرحبًا، أؤكد حضوري لحفلة محمد و روان.%0Aالاسم: ${name}%0Aعدد الحضور: ${guests}%0Aرسالة: ${message}`;

  const text = currentLang === "en" ? baseTextEn : baseTextAr;
  // غيّر الرقم لرقمك
  window.open("https://wa.me/201000000000?text=" + text, "_blank");
});

// عداد تنازلي لتاريخ 25/12/2025 الساعة 19:00
const targetDate = new Date("2025-12-25T19:00:00");

// تحديث العدّاد كل ثانية
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// أنيميشن ظهور مع السكروول
const animatedEls = document.querySelectorAll(".fade-in, .fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute("data-delay") || 0;
        setTimeout(() => {
          entry.target.classList.add("in-view");
        }, Number(delay));
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

animatedEls.forEach((el) => observer.observe(el));

// بدءًا باللغة الإنجليزية
applyLanguage("en");
