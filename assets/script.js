
const PRICES = {
  "2026-05-21": 80.0,
  "2026-05-22": 80.0,
  "2026-05-23": 80.0,
  "2026-05-24": 80.0,
  "2026-05-25": 80.0,
  "2026-05-26": 80.0,
  "2026-05-27": 80.0,
  "2026-05-28": 80.0,
  "2026-05-29": 95.0,
  "2026-05-30": 110.0,
  "2026-05-31": 110.0,
  "2026-06-01": 100.0,
  "2026-06-02": 90.0,
  "2026-06-03": 90.0,
  "2026-06-04": 90.0,
  "2026-06-05": 90.0,
  "2026-06-06": 90.0,
  "2026-06-07": 90.0,
  "2026-06-08": 95.0,
  "2026-06-09": 95.0,
  "2026-06-10": 95.0,
  "2026-06-11": 95.0,
  "2026-06-12": 95.0,
  "2026-06-13": 90.0,
  "2026-06-14": 90.0,
  "2026-06-15": 90.0,
  "2026-06-16": 90.0,
  "2026-06-17": 90.0,
  "2026-06-18": 90.0,
  "2026-06-19": 90.0,
  "2026-06-20": 110.0,
  "2026-06-21": 110.0,
  "2026-06-22": 110.0,
  "2026-06-23": 110.0,
  "2026-06-24": 95.0,
  "2026-06-25": 95.0,
  "2026-06-26": 95.0,
  "2026-06-27": 95.0,
  "2026-06-28": 105.0,
  "2026-06-29": 105.0,
  "2026-06-30": 110.0,
  "2026-07-01": 130.0,
  "2026-07-02": 130.0,
  "2026-07-03": 130.0,
  "2026-07-04": 130.0,
  "2026-07-05": 130.0,
  "2026-07-06": 140.0,
  "2026-07-07": 140.0,
  "2026-07-08": 140.0,
  "2026-07-09": 140.0,
  "2026-07-10": 140.0,
  "2026-07-11": 140.0,
  "2026-07-12": 140.0,
  "2026-07-13": 145.0,
  "2026-07-14": 145.0,
  "2026-07-15": 145.0,
  "2026-07-16": 145.0,
  "2026-07-17": 145.0,
  "2026-07-18": 145.0,
  "2026-07-19": 145.0,
  "2026-07-20": 155.0,
  "2026-07-21": 155.0,
  "2026-07-22": 155.0,
  "2026-07-23": 155.0,
  "2026-07-24": 155.0,
  "2026-07-25": 160.0,
  "2026-07-26": 160.0,
  "2026-07-27": 160.0,
  "2026-07-28": 160.0,
  "2026-07-29": 160.0,
  "2026-07-30": 160.0,
  "2026-07-31": 170.0,
  "2026-08-01": 170.0,
  "2026-08-02": 170.0,
  "2026-08-03": 180.0,
  "2026-08-04": 180.0,
  "2026-08-05": 180.0,
  "2026-08-06": 180.0,
  "2026-08-07": 180.0,
  "2026-08-08": 180.0,
  "2026-08-09": 180.0,
  "2026-08-10": 185.0,
  "2026-08-11": 185.0,
  "2026-08-12": 185.0,
  "2026-08-13": 185.0,
  "2026-08-14": 190.0,
  "2026-08-15": 190.0,
  "2026-08-16": 190.0,
  "2026-08-17": 185.0,
  "2026-08-18": 185.0,
  "2026-08-19": 185.0,
  "2026-08-20": 185.0,
  "2026-08-21": 180.0,
  "2026-08-22": 180.0,
  "2026-08-23": 180.0,
  "2026-08-24": 160.0,
  "2026-08-25": 160.0,
  "2026-08-26": 160.0,
  "2026-08-27": 160.0,
  "2026-08-28": 160.0,
  "2026-08-29": 160.0,
  "2026-08-30": 160.0,
  "2026-08-31": 135.0,
  "2026-09-01": 135.0,
  "2026-09-02": 135.0,
  "2026-09-03": 135.0,
  "2026-09-04": 135.0,
  "2026-09-05": 135.0,
  "2026-09-06": 135.0,
  "2026-09-07": 125.0,
  "2026-09-08": 125.0,
  "2026-09-09": 125.0,
  "2026-09-10": 125.0,
  "2026-09-11": 125.0,
  "2026-09-12": 125.0,
  "2026-09-13": 105.0,
  "2026-09-14": 105.0,
  "2026-09-15": 105.0,
  "2026-09-16": 105.0,
  "2026-09-17": 105.0,
  "2026-09-18": 105.0,
  "2026-09-19": 105.0,
  "2026-09-20": 105.0,
  "2026-09-21": 95.0,
  "2026-09-22": 95.0,
  "2026-09-23": 95.0,
  "2026-09-24": 95.0,
  "2026-09-25": 95.0,
  "2026-09-26": 95.0,
  "2026-09-27": 95.0,
  "2026-09-28": 95.0,
  "2026-09-29": 95.0,
  "2026-09-30": 95.0,
  "2026-10-01": 80.0,
  "2026-10-02": 80.0,
  "2026-10-03": 80.0,
  "2026-10-04": 80.0,
  "2026-10-05": 80.0,
  "2026-10-06": 80.0,
  "2026-10-07": 80.0,
  "2026-10-08": 80.0,
  "2026-10-09": 80.0,
  "2026-10-10": 80.0,
  "2026-10-11": 80.0
};

const TEXT = {
  en: {
    navExperience:"Experience", navGallery:"Gallery", navRates:"Estimate", navRequest:"Request Booking",
    heroEyebrow:"Lefkada • Ionian Sea View", heroTitle:"Prince Island View Home",
    heroCopy:"Panoramic island living in Lefkada, with open Ionian views, warm interiors and a terrace made for slow mornings and sunset evenings.",
    heroBtnPrimary:"Check estimated price", heroBtnSecondary:"View gallery", scrollHint:"Scroll to explore",
    introEyebrow:"The stay", introTitle:"A bright island escape built around the terrace and the view.",
    introP1:"Prince Island View Home is designed around the view: bright spaces, soft Mediterranean tones and easy access to the terrace from the living areas and bedroom.",
    introP2:"Ideal for couples, families or friends looking for a peaceful stay with the comfort of a fully equipped home.",
    factGuests:"max guests", factNights:"direct booking saving", factViews:"sea feeling",
    sleepEyebrow:"Wake up to blue", sleepTitle:"Comfort that stays connected to the view.",
    sleepCopy:"The bedroom opens visually toward the terrace and the sea, giving the home its calm, vacation-ready character.",
    amenitiesEyebrow:"Comforts", amenitiesTitle:"Everything you need for an easy stay.",
    a1:"Panoramic sea view", a2:"Private terrace", a3:"Fully equipped kitchen", a4:"Air conditioning", a5:"Wi‑Fi", a6:"Washing machine", a7:"Free parking", a8:"Private guest guide",
    terraceEyebrow:"Signature terrace", terraceTitle:"The balcony is the heart of the home.", terraceCopy:"From morning coffee to sunset drinks, the terrace frames the Ionian Sea and turns every stay into a slow, open-air experience.",
    galleryEyebrow:"Gallery", galleryTitle:"Sea view, terrace life and warm interiors.",
    calcEyebrow:"Estimated price", calcTitle:"Check your dates before sending a request.",
    calcCopy:"Select your dates and guests to see your direct booking estimate. Final confirmation depends on availability.",
    rule1:"", rule2:"", rule3:"Maximum capacity: 4 guests", calcNote:"You can send a request even for shorter gaps. We will confirm availability personally.", directPriceLabel:"Direct booking price", originalPriceLabel:"Estimated price", saveLabel:"You save 10% by booking directly", shortStayNote:"Shorter stays may depend on availability and gap nights.",
    arrival:"Arrival", departure:"Departure", adults:"Adults 17+", children:"Children ≤16",
    resultPlaceholder:"Your estimate will appear here.", continueRequest:"Continue to request",
    requestEyebrow:"Direct booking request", requestTitle:"Send your request and we will confirm availability.",
    requestCopy:"No instant payment is required. We will reply with availability and next steps.",
    name:"Name", phone:"Phone / WhatsApp / Viber", guests:"Guests", reqArrival:"Preferred arrival", reqDeparture:"Preferred departure", message:"Message",
    messagePlaceholder:"Tell us anything we should know about your stay.", sendRequest:"Send request by email", whatsapp:"Send on WhatsApp", viber:"Send on Viber", reqAdults:"Adults 17+", reqChildren:"Children ≤16", formSuccess:"Your request has been sent. We will reply shortly.", formError:"If the request is not sent automatically, please use WhatsApp or Viber below.",
    finalEyebrow:"Prince Island View Home", finalTitle:"A slower way to experience Lefkada.",
    estimateLabel:"Estimated price", nights:"nights", avgNight:"avg. / night", finalNote:"Final confirmation depends on availability.",
    totalGuestsError:"Maximum capacity is 4 guests.", minError:"Minimum stay for these dates is", dateError:"Please select valid arrival and departure dates.", priceError:"Prices are available for stays between 21 May and 12 October 2026."
  },
  el: {
    navExperience:"Εμπειρία", navGallery:"Gallery", navRates:"Εκτίμηση", navRequest:"Αίτημα κράτησης",
    heroEyebrow:"Λευκάδα • Θέα στο Ιόνιο", heroTitle:"Prince Island View Home",
    heroCopy:"Πανοραμική διαμονή στη Λευκάδα, με ανοιχτή θέα στο Ιόνιο, ζεστούς εσωτερικούς χώρους και βεράντα για αργά πρωινά και χαλαρά ηλιοβασιλέματα.",
    heroBtnPrimary:"Υπολογισμός τιμής", heroBtnSecondary:"Δείτε φωτογραφίες", scrollHint:"Δείτε περισσότερα",
    introEyebrow:"Η διαμονή", introTitle:"Ένα φωτεινό island escape χτισμένο γύρω από τη βεράντα και τη θέα.",
    introP1:"Το Prince Island View Home είναι σχεδιασμένο γύρω από τη θέα: φωτεινοί χώροι, ήρεμες μεσογειακές αποχρώσεις και εύκολη πρόσβαση στη βεράντα από το σαλόνι και το υπνοδωμάτιο.",
    introP2:"Ιδανικό για ζευγάρια, οικογένειες ή φίλους που θέλουν ήρεμη διαμονή με την άνεση ενός πλήρως εξοπλισμένου σπιτιού.",
    factGuests:"μέγιστο", factNights:"έκπτωση απευθείας κράτησης", factViews:"αίσθηση θάλασσας",
    sleepEyebrow:"Ξύπνημα στο μπλε", sleepTitle:"Άνεση που μένει συνδεδεμένη με τη θέα.",
    sleepCopy:"Το υπνοδωμάτιο ανοίγει οπτικά προς τη βεράντα και τη θάλασσα, δίνοντας στο σπίτι τον ήρεμο χαρακτήρα των διακοπών.",
    amenitiesEyebrow:"Παροχές", amenitiesTitle:"Όλα όσα χρειάζεστε για άνετη διαμονή.",
    a1:"Πανοραμική θέα", a2:"Ιδιωτική βεράντα", a3:"Πλήρως εξοπλισμένη κουζίνα", a4:"Κλιματισμός", a5:"Wi‑Fi", a6:"Πλυντήριο", a7:"Δωρεάν parking", a8:"Ιδιωτικός οδηγός επισκέπτη",
    terraceEyebrow:"Η βεράντα", terraceTitle:"Το μπαλκόνι είναι η καρδιά του σπιτιού.", terraceCopy:"Από τον πρωινό καφέ μέχρι το ποτό στο ηλιοβασίλεμα, η βεράντα πλαισιώνει το Ιόνιο και κάνει κάθε διαμονή πιο αργή, ανοιχτή και χαλαρή.",
    galleryEyebrow:"Gallery", galleryTitle:"Θέα, βεράντα και ζεστοί εσωτερικοί χώροι.",
    calcEyebrow:"Εκτίμηση τιμής", calcTitle:"Ελέγξτε τις ημερομηνίες πριν στείλετε αίτημα.",
    calcCopy:"Επιλέξτε ημερομηνίες και άτομα για να δείτε την εκτίμηση απευθείας κράτησης. Η τελική επιβεβαίωση εξαρτάται από τη διαθεσιμότητα.",
    rule1:"", rule2:"", rule3:"Μέγιστη χωρητικότητα: 4 άτομα", calcNote:"Μπορείτε να στείλετε αίτημα και για μικρότερα κενά. Θα επιβεβαιώσουμε προσωπικά τη διαθεσιμότητα.", directPriceLabel:"Τιμή απευθείας κράτησης", originalPriceLabel:"Ενδεικτική τιμή", saveLabel:"Κερδίζετε 10% κάνοντας αίτημα απευθείας από το site", shortStayNote:"Οι μικρότερες διαμονές εξαρτώνται από διαθεσιμότητα και κενά ημερομηνιών.",
    arrival:"Άφιξη", departure:"Αναχώρηση", adults:"Ενήλικες 17+", children:"Παιδιά ≤16",
    resultPlaceholder:"Η εκτίμηση τιμής θα εμφανιστεί εδώ.", continueRequest:"Συνέχεια στο αίτημα",
    requestEyebrow:"Απευθείας αίτημα κράτησης", requestTitle:"Στείλτε αίτημα και θα επιβεβαιώσουμε διαθεσιμότητα.",
    requestCopy:"Δεν απαιτείται άμεση πληρωμή. Θα απαντήσουμε με διαθεσιμότητα και επόμενα βήματα.",
    name:"Όνομα", phone:"Τηλέφωνο / WhatsApp / Viber", guests:"Άτομα", reqArrival:"Επιθυμητή άφιξη", reqDeparture:"Επιθυμητή αναχώρηση", message:"Μήνυμα",
    messagePlaceholder:"Γράψτε μας οτιδήποτε χρειάζεται να γνωρίζουμε για τη διαμονή σας.", sendRequest:"Αποστολή αιτήματος με email", whatsapp:"Αποστολή στο WhatsApp", viber:"Αποστολή στο Viber", reqAdults:"Ενήλικες 17+", reqChildren:"Παιδιά ≤16", formSuccess:"Το αίτημά σας στάλθηκε. Θα απαντήσουμε σύντομα.", formError:"Αν δεν σταλεί αυτόματα, χρησιμοποιήστε WhatsApp ή Viber από κάτω.",
    finalEyebrow:"Prince Island View Home", finalTitle:"Ένας πιο αργός τρόπος να ζήσετε τη Λευκάδα.",
    estimateLabel:"Ενδεικτική τιμή", nights:"βράδια", avgNight:"μ.ό. / βράδυ", finalNote:"Η τελική επιβεβαίωση εξαρτάται από τη διαθεσιμότητα.",
    totalGuestsError:"Η μέγιστη χωρητικότητα είναι 4 άτομα.", minError:"Η ελάχιστη διαμονή για αυτές τις ημερομηνίες είναι", dateError:"Επιλέξτε σωστές ημερομηνίες άφιξης και αναχώρησης.", priceError:"Οι τιμές είναι διαθέσιμες για διαμονές από 21 Μαΐου έως 12 Οκτωβρίου 2026."
  }
};

let lang = localStorage.getItem("pivLang") || "en";
let lastEstimate = null;

function t(key) { return TEXT[lang][key] || TEXT.en[key] || key; }
function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
  document.getElementById("langToggle").textContent = lang === "en" ? "EL" : "EN";
  calculate();
}
document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "el" : "en";
  localStorage.setItem("pivLang", lang);
  syncGuestSelects("adults", "children");
syncGuestSelects("requestAdults", "requestChildren");
updateHiddenFields();
applyLang();
});

const nav = document.getElementById("nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 40), {passive:true});

function parseDate(v) { return v ? new Date(v + "T12:00:00") : null; }
function iso(d) { return d.toISOString().slice(0,10); }
function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate()+n); return x; }
function nightsBetween(a,b) { return Math.round((b-a)/(1000*60*60*24)); }
function overlapsPeak(arr, dep) {
  const start = parseDate("2026-08-01");
  const endExclusive = parseDate("2026-08-24");
  return arr < endExclusive && dep > start;
}
function adultMultiplier(adults) {
  if (adults >= 4) return 1.40;
  if (adults === 3) return 1.15;
  return 1;
}
function euro(n) { return new Intl.NumberFormat(lang === "el" ? "el-GR" : "en-US", {style:"currency", currency:"EUR", maximumFractionDigits:0}).format(n); }

function setError(msg) {
  const result = document.getElementById("result");
  result.classList.add("error");
  result.innerHTML = `<span>${msg}</span>`;
  lastEstimate = null;
  updateHiddenFields();
}
function calculate() {
  const arr = parseDate(document.getElementById("arrival").value);
  const dep = parseDate(document.getElementById("departure").value);
  const adults = Number(document.getElementById("adults").value);
  const children = Number(document.getElementById("children").value);
  const result = document.getElementById("result");
  result.classList.remove("error");

  if (!arr || !dep || dep <= arr) {
    result.innerHTML = `<span>${t("resultPlaceholder")}</span>`;
    lastEstimate = null; updateHiddenFields(); return;
  }
  if (adults + children > 4) return setError(t("totalGuestsError"));
  const nights = nightsBetween(arr, dep);
  const min = overlapsPeak(arr, dep) ? 7 : 5;
  const isShortStay = nights < min;

  let total = 0;
  let missing = false;
  for (let d = new Date(arr); d < dep; d = addDays(d, 1)) {
    const key = iso(d);
    const base = PRICES[key];
    if (base == null) { missing = true; break; }
    total += base * adultMultiplier(adults) + children * 20;
  }
  if (missing) return setError(t("priceError"));
  const originalTotal = total;
  const directTotal = Math.round(originalTotal * 0.90);
  const avg = directTotal / nights;
  const shortNote = isShortStay ? `<br>${t("shortStayNote")}` : "";
  result.innerHTML = `<div class="price-box"><span>${t("originalPriceLabel")}</span><del>${euro(originalTotal)}</del><span>${t("directPriceLabel")}</span><strong>${euro(directTotal)}</strong><small>${t("saveLabel")}<br>${nights} ${t("nights")} • ${euro(avg)} ${t("avgNight")}<br>${t("finalNote")}${shortNote}</small></div>`;
  lastEstimate = {originalTotal, directTotal, total: directTotal, avg, nights, arrival: document.getElementById("arrival").value, departure: document.getElementById("departure").value, adults, children, isShortStay};
  updateHiddenFields();
}

function getFormValues() {
  const form = document.getElementById("bookingRequestForm");
  if (!form) return {};
  return {
    name: form.elements.name?.value?.trim() || "",
    email: form.elements.email?.value?.trim() || "",
    phone: form.elements.phone?.value?.trim() || "",
    arrival: form.elements.arrival?.value || lastEstimate?.arrival || "",
    departure: form.elements.departure?.value || lastEstimate?.departure || "",
    adults: form.elements.adults?.value || lastEstimate?.adults || "2",
    children: form.elements.children?.value || lastEstimate?.children || "0",
    message: form.elements.message?.value?.trim() || ""
  };
}

function buildRequestMessage() {
  const f = getFormValues();
  const priceLine = lastEstimate
    ? (lang === "el"
      ? `Τιμή απευθείας κράτησης: ${euro(lastEstimate.directTotal)} (αρχική εκτίμηση: ${euro(lastEstimate.originalTotal)}).`
      : `Direct booking price: ${euro(lastEstimate.directTotal)} (original estimate: ${euro(lastEstimate.originalTotal)}).`)
    : (lang === "el" ? "Δεν έχει γίνει υπολογισμός τιμής." : "No price estimate has been calculated.");

  if (lang === "el") {
    return `Γεια σας, ενδιαφέρομαι για κράτηση στο Prince Island View Home.\n\nΗμερομηνίες: ${f.arrival || "-"} έως ${f.departure || "-"}\nΆτομα: ${f.adults} ενήλικες, ${f.children} παιδιά\n${priceLine}\n\nΌνομα: ${f.name || "-"}\nEmail: ${f.email || "-"}\nΤηλέφωνο: ${f.phone || "-"}\nΜήνυμα: ${f.message || "-"}`;
  }
  return `Hello, I am interested in booking Prince Island View Home.\n\nDates: ${f.arrival || "-"} to ${f.departure || "-"}\nGuests: ${f.adults} adults, ${f.children} children\n${priceLine}\n\nName: ${f.name || "-"}\nEmail: ${f.email || "-"}\nPhone: ${f.phone || "-"}\nMessage: ${f.message || "-"}`;
}

function updateHiddenFields() {
  const est = document.getElementById("estimatedPriceField");
  const dates = document.getElementById("calculatedDatesField");
  const wa = document.getElementById("whatsappLink");
  const vi = document.getElementById("viberLink");
  const reqArr = document.querySelector('input[name="arrival"]');
  const reqDep = document.querySelector('input[name="departure"]');
  const reqAdults = document.getElementById("requestAdults");
  const reqChildren = document.getElementById("requestChildren");

  if (lastEstimate) {
    est.value = `Direct: ${euro(lastEstimate.directTotal)} | Original estimate: ${euro(lastEstimate.originalTotal)} | ${lastEstimate.nights} nights`;
    dates.value = `${lastEstimate.arrival} to ${lastEstimate.departure} | Adults: ${lastEstimate.adults} | Children: ${lastEstimate.children}`;
    if (reqArr && !reqArr.value) reqArr.value = lastEstimate.arrival;
    if (reqDep && !reqDep.value) reqDep.value = lastEstimate.departure;
    if (reqAdults) reqAdults.value = String(lastEstimate.adults);
    if (reqChildren) reqChildren.value = String(lastEstimate.children);
  } else {
    est.value = "";
    dates.value = "";
  }

  const msg = buildRequestMessage();
  if (wa) wa.href = `https://wa.me/306956645537?text=${encodeURIComponent(msg)}`;
  if (vi) vi.href = `viber://chat?number=%2B306956645537`;
}

function syncGuestSelects(adultsId, childrenId) {
  const adultsEl = document.getElementById(adultsId);
  const childrenEl = document.getElementById(childrenId);
  if (!adultsEl || !childrenEl) return;
  const fix = () => {
    const adults = Number(adultsEl.value);
    const children = Number(childrenEl.value);
    if (adults + children > 4) {
      childrenEl.value = String(Math.max(0, 4 - adults));
    }
    [...childrenEl.options].forEach(opt => {
      opt.disabled = adults + Number(opt.value) > 4;
    });
    [...adultsEl.options].forEach(opt => {
      opt.disabled = Number(opt.value) + Number(childrenEl.value) > 4;
    });
    updateHiddenFields();
    if (adultsId === "adults") calculate();
  };
  adultsEl.addEventListener("change", fix);
  childrenEl.addEventListener("change", fix);
  fix();
}

["arrival","departure","adults","children"].forEach(id => {
  const el = document.getElementById(id);
  ["input", "change", "blur"].forEach(evt => el.addEventListener(evt, calculate));
});

document.getElementById("requestWithPrice").addEventListener("click", (event) => {
  calculate();
  if (!lastEstimate) {
    event.preventDefault();
    document.getElementById("calculator").scrollIntoView({behavior:"smooth", block:"center"});
    return;
  }
  const reqArr = document.querySelector('input[name="arrival"]');
  const reqDep = document.querySelector('input[name="departure"]');
  const reqAdults = document.getElementById("requestAdults");
  const reqChildren = document.getElementById("requestChildren");
  reqArr.value = lastEstimate.arrival;
  reqDep.value = lastEstimate.departure;
  reqAdults.value = String(lastEstimate.adults);
  reqChildren.value = String(lastEstimate.children);
  updateHiddenFields();
});

document.querySelectorAll('#bookingRequestForm input, #bookingRequestForm textarea, #bookingRequestForm select').forEach(el => {
  el.addEventListener('input', updateHiddenFields);
  el.addEventListener('change', updateHiddenFields);
});

document.getElementById("bookingRequestForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  updateHiddenFields();
  const form = event.currentTarget;
  const status = document.getElementById("requestStatus");
  const data = new FormData(form);
  data.set("form-name", "booking-request");
  data.set("full_message", buildRequestMessage());
  try {
    await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(data).toString() });
    status.className = "request-status success";
    status.textContent = t("formSuccess");
  } catch (error) {
    status.className = "request-status error";
    status.textContent = t("formError");
    const subject = encodeURIComponent("Prince Island View Home booking request");
    const body = encodeURIComponent(buildRequestMessage());
    window.location.href = `mailto:princeislandview@gmail.com?subject=${subject}&body=${body}`;
  }
});

document.getElementById("viberLink").addEventListener("click", async () => {
  const msg = buildRequestMessage();
  try { await navigator.clipboard.writeText(msg); } catch(e) {}
});


const dialog = document.getElementById("lightbox");
const lightImg = document.getElementById("lightboxImg");
document.querySelectorAll(".photo img").forEach(img => {
  img.parentElement.addEventListener("click", () => {
    lightImg.src = img.src.replace("-thumb","");
    lightImg.alt = img.alt;
    dialog.showModal();
  });
});
document.getElementById("closeLightbox").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });

syncGuestSelects("adults", "children");
syncGuestSelects("requestAdults", "requestChildren");
updateHiddenFields();
applyLang();
