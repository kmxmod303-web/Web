/**
 * SkyElite Flights - Mobile Optimized
 * @version 3.0.0
 */
(function() {
  'use strict';

  // ========== DATA ==========
  const AIRPORTS = [
    { code: 'JED', city: 'جدة', cityEn: 'Jeddah', country: 'السعودية', flag: '🇸🇦' },
    { code: 'RUH', city: 'الرياض', cityEn: 'Riyadh', country: 'السعودية', flag: '🇸🇦' },
    { code: 'DMM', city: 'الدمام', cityEn: 'Dammam', country: 'السعودية', flag: '🇸🇦' },
    { code: 'MED', city: 'المدينة', cityEn: 'Medina', country: 'السعودية', flag: '🇸🇦' },
    { code: 'DXB', city: 'دبي', cityEn: 'Dubai', country: 'الإمارات', flag: '🇦🇪' },
    { code: 'AUH', city: 'أبوظبي', cityEn: 'Abu Dhabi', country: 'الإمارات', flag: '🇦🇪' },
    { code: 'CAI', city: 'القاهرة', cityEn: 'Cairo', country: 'مصر', flag: '🇪🇬' },
    { code: 'ALX', city: 'الإسكندرية', cityEn: 'Alexandria', country: 'مصر', flag: '🇪🇬' },
    { code: 'AMM', city: 'عمّان', cityEn: 'Amman', country: 'الأردن', flag: '🇯🇴' },
    { code: 'BEY', city: 'بيروت', cityEn: 'Beirut', country: 'لبنان', flag: '🇱🇧' },
    { code: 'DOH', city: 'الدوحة', cityEn: 'Doha', country: 'قطر', flag: '🇶🇦' },
    { code: 'BAH', city: 'المنامة', cityEn: 'Manama', country: 'البحرين', flag: '🇧🇭' },
    { code: 'KWI', city: 'الكويت', cityEn: 'Kuwait', country: 'الكويت', flag: '🇰🇼' },
    { code: 'MCT', city: 'مسقط', cityEn: 'Muscat', country: 'عمان', flag: '🇴🇲' },
    { code: 'IST', city: 'اسطنبول', cityEn: 'Istanbul', country: 'تركيا', flag: '🇹🇷' },
    { code: 'LHR', city: 'لندن', cityEn: 'London', country: 'بريطانيا', flag: '🇬🇧' },
    { code: 'CDG', city: 'باريس', cityEn: 'Paris', country: 'فرنسا', flag: '🇫🇷' },
    { code: 'JFK', city: 'نيويورك', cityEn: 'New York', country: 'أمريكا', flag: '🇺🇸' },
    { code: 'LAX', city: 'لوس أنجلوس', cityEn: 'Los Angeles', country: 'أمريكا', flag: '🇺🇸' },
    { code: 'KUL', city: 'كوالالمبور', cityEn: 'Kuala Lumpur', country: 'ماليزيا', flag: '🇲🇾' },
    { code: 'CGK', city: 'جاكرتا', cityEn: 'Jakarta', country: 'إندونيسيا', flag: '🇮🇩' },
    { code: 'BOM', city: 'مومباي', cityEn: 'Mumbai', country: 'الهند', flag: '🇮🇳' },
    { code: 'DEL', city: 'نيودلهي', cityEn: 'New Delhi', country: 'الهند', flag: '🇮🇳' },
    { code: 'FCO', city: 'روما', cityEn: 'Rome', country: 'إيطاليا', flag: '🇮🇹' },
    { code: 'MAD', city: 'مدريد', cityEn: 'Madrid', country: 'إسبانيا', flag: '🇪🇸' },
    { code: 'KHI', city: 'كراتشي', cityEn: 'Karachi', country: 'باكستان', flag: '🇵🇰' },
    { code: 'ISB', city: 'إسلام آباد', cityEn: 'Islamabad', country: 'باكستان', flag: '🇵🇰' },
    { code: 'CMN', city: 'الدار البيضاء', cityEn: 'Casablanca', country: 'المغرب', flag: '🇲🇦' },
    { code: 'TUN', city: 'تونس', cityEn: 'Tunis', country: 'تونس', flag: '🇹🇳' },
    { code: 'ADA', city: 'أديس أبابا', cityEn: 'Addis Ababa', country: 'إثيوبيا', flag: '🇪🇹' },
  ];

  const AIRLINES = [
    { name: 'الخطوط السعودية', code: 'SV', emoji: '🟢' },
    { name: 'طيران ناس', code: 'XY', emoji: '🔵' },
    { name: 'طيران أديل', code: 'F3', emoji: '🟡' },
    { name: 'الطيران الإماراتي', code: 'EK', emoji: '🔴' },
    { name: 'الطيران القطري', code: 'QR', emoji: '🟣' },
    { name: 'طيران الخليج', code: 'GF', emoji: '🟠' },
    { name: 'الطيران التركي', code: 'TK', emoji: '🔵' },
    { name: 'مصر للطيران', code: 'MS', emoji: '🟡' },
  ];

  const POPULAR_DESTS = [
    { city: 'باريس', price: '1,850', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80', code: 'CDG' },
    { city: 'دبي', price: '750', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80', code: 'DXB' },
    { city: 'اسطنبول', price: '1,200', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&q=80', code: 'IST' },
    { city: 'لندن', price: '2,100', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80', code: 'LHR' },
    { city: 'كوالالمبور', price: '1,600', img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80', code: 'KUL' },
    { city: 'القاهرة', price: '900', img: 'https://images.unsplash.com/photo-1572286258217-40142c1c6a70?w=400&q=80', code: 'CAI' },
  ];

  // ========== STATE ==========
  const state = {
    fromCity: null,
    toCity: null,
    passengers: { adults: 1, children: 0, infants: 0 },
    travelClass: 'economy',
    tripType: 'round',
    highlightedIndex: -1,
    activeDropdown: null,
  };

  // ========== DOM ==========
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const dom = {
    header: $('#header'),
    menuToggle: $('.menu-toggle'),
    menuOverlay: $('#menu-overlay'),
    mobileMenu: $('#mobile-menu'),
    closeMenu: $('.close-menu'),
    fromInput: $('#from-input'),
    toInput: $('#to-input'),
    fromField: $('#from-field'),
    toField: $('#to-field'),
    fromDropdown: $('#from-dropdown'),
    toDropdown: $('#to-dropdown'),
    fromClear: $('#from-field .field-clear'),
    toClear: $('#to-field .field-clear'),
    swapBtn: $('#swap-btn'),
    departDate: $('#depart-date'),
    returnDate: $('#return-date'),
    returnField: $('#return-field'),
    passengersToggle: $('#passengers-toggle'),
    passengersModal: $('#passenger-modal'),
    passengersDone: $('#passengers-done'),
    bookingForm: $('#booking-form'),
    searchBtn: $('#search-btn'),
    tripResults: $('#trip-results'),
    resultsTitle: $('#results-title'),
    resultsCount: $('#results-count'),
    resultsList: $('#results-list'),
    resultsClose: $('#results-close'),
    loadingSpinner: $('#loading-spinner'),
    filterChips: $$('.chip'),
    destScroll: $('#dest-scroll'),
    toast: $('#toast'),
    toastText: $('#toast-text'),
    tripTypeBtns: $$('.trip-type-btn'),
  };

  // ========== UTILITIES ==========
  function showToast(msg, type = 'success') {
    dom.toastText.textContent = msg;
    dom.toast.className = `toast ${type}`;
    dom.toast.querySelector('i').className = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    requestAnimationFrame(() => dom.toast.classList.add('show'));
    setTimeout(() => dom.toast.classList.remove('show'), 3000);
  }

  function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    dom.departDate.min = today;
    dom.returnDate.min = today;
  }

  function formatPrice(p) {
    return p.toLocaleString('ar-SA');
  }

  // ========== MOBILE MENU ==========
  function openMenu() {
    dom.mobileMenu.classList.add('active');
    dom.menuOverlay.classList.add('active');
    dom.menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    dom.closeMenu.focus();
  }

  function closeMenuFn() {
    dom.mobileMenu.classList.remove('active');
    dom.menuOverlay.classList.remove('active');
    dom.menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    dom.menuToggle.focus();
  }

  dom.menuToggle?.addEventListener('click', openMenu);
  dom.closeMenu?.addEventListener('click', closeMenuFn);
  dom.menuOverlay?.addEventListener('click', closeMenuFn);

  // ========== HEADER SCROLL ==========
  let scrollTick = false;
  window.addEventListener('scroll', () => {
    if (!scrollTick) {
      requestAnimationFrame(() => {
        dom.header.classList.toggle('scrolled', window.scrollY > 40);
        scrollTick = false;
      });
      scrollTick = true;
    }
  }, { passive: true });

  // ========== TRIP TYPE TOGGLE ==========
  dom.tripTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dom.tripTypeBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      state.tripType = btn.dataset.type;
      dom.returnField.style.display = state.tripType === 'one' ? 'none' : '';
    });
  });

  // ========== AUTOCOMPLETE ==========
  function filterAirports(query, currentField) {
    const q = query.trim().toLowerCase();
    if (!q) return AIRPORTS;
    return AIRPORTS.filter(a => 
      a.city.includes(q) || 
      a.cityEn.toLowerCase().includes(q) || 
      a.code.toLowerCase().includes(q) ||
      a.country.includes(q)
    ).filter(a => a.code !== (currentField === 'from' ? state.toCity?.code : state.fromCity?.code));
  }

  function renderDropdown(dropdown, items, field) {
    if (items.length === 0) {
      dropdown.innerHTML = '<div class="autocomplete-no-result">لا توجد نتائج</div>';
      return;
    }

    const popular = items.slice(0, 6);
    const rest = items.slice(6);

    let html = '<div class="autocomplete-header">وجهات مقترحة</div>';
    popular.forEach((item, i) => {
      html += `
        <div class="autocomplete-item" role="option" tabindex="-1" data-code="${item.code}" data-field="${field}" aria-selected="false">
          <span class="item-flag">${item.flag}</span>
          <div class="item-info">
            <div class="item-city">${item.city}</div>
            <div class="item-country">${item.country}</div>
          </div>
          <span class="item-code">${item.code}</span>
        </div>
      `;
    });

    if (rest.length > 0) {
      html += '<div class="autocomplete-header">وجهات أخرى</div>';
      rest.forEach((item) => {
        html += `
          <div class="autocomplete-item" role="option" tabindex="-1" data-code="${item.code}" data-field="${field}">
            <span class="item-flag">${item.flag}</span>
            <div class="item-info">
              <div class="item-city">${item.city}</div>
              <div class="item-country">${item.country}</div>
            </div>
            <span class="item-code">${item.code}</span>
          </div>
        `;
      });
    }

    dropdown.innerHTML = html;

    // Click handlers
    dropdown.querySelectorAll('.autocomplete-item').forEach(el => {
      el.addEventListener('click', () => selectAirport(el.dataset.code, el.dataset.field));
    });
  }

  function selectAirport(code, field) {
    const airport = AIRPORTS.find(a => a.code === code);
    if (!airport) return;

    if (field === 'from') {
      state.fromCity = airport;
      dom.fromInput.value = `${airport.city} (${airport.code})`;
      dom.fromClear.classList.add('visible');
      closeAllDropdowns();
      // Focus to field
      setTimeout(() => dom.toInput.focus(), 100);
    } else {
      state.toCity = airport;
      dom.toInput.value = `${airport.city} (${airport.code})`;
      dom.toClear.classList.add('visible');
      closeAllDropdowns();
    }
    showToast(`تم اختيار ${airport.city} ✅`);
  }

  function closeAllDropdowns() {
    [dom.fromDropdown, dom.toDropdown].forEach(d => {
      d.classList.remove('show');
      d.innerHTML = '';
    });
    state.highlightedIndex = -1;
    state.activeDropdown = null;
  }

  // Input handlers
  [dom.fromInput, dom.toInput].forEach(input => {
    const field = input === dom.fromInput ? 'from' : 'to';
    const dropdown = field === 'from' ? dom.fromDropdown : dom.toDropdown;
    const clearBtn = input.parentElement.querySelector('.field-clear');

    input.addEventListener('focus', () => {
      state.activeDropdown = field;
      const results = filterAirports(input.value, field);
      renderDropdown(dropdown, results, field);
      dropdown.classList.add('show');
    });

    input.addEventListener('input', (e) => {
      const results = filterAirports(e.target.value, field);
      renderDropdown(dropdown, results, field);
      dropdown.classList.add('show');
      clearBtn.classList.toggle('visible', e.target.value.length > 0);
      state.highlightedIndex = -1;
    });

    input.addEventListener('keydown', (e) => {
      const items = dropdown.querySelectorAll('.autocomplete-item');
      if (!items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        state.highlightedIndex = Math.min(state.highlightedIndex + 1, items.length - 1);
        updateHighlight(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        state.highlightedIndex = Math.max(state.highlightedIndex - 1, 0);
        updateHighlight(items);
      } else if (e.key === 'Enter' && state.highlightedIndex >= 0) {
        e.preventDefault();
        items[state.highlightedIndex].click();
      } else if (e.key === 'Escape') {
        closeAllDropdowns();
        input.blur();
      }
    });

    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.classList.remove('visible');
      if (field === 'from') state.fromCity = null;
      else state.toCity = null;
      input.focus();
    });
  });

  function updateHighlight(items) {
    items.forEach((el, i) => {
      el.classList.toggle('highlighted', i === state.highlightedIndex);
      el.setAttribute('aria-selected', i === state.highlightedIndex ? 'true' : 'false');
    });
    if (state.highlightedIndex >= 0) {
      items[state.highlightedIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  // Swap button
  dom.swapBtn?.addEventListener('click', () => {
    const tempCity = state.fromCity;
    state.fromCity = state.toCity;
    state.toCity = tempCity;

    dom.fromInput.value = state.fromCity ? `${state.fromCity.city} (${state.fromCity.code})` : '';
    dom.toInput.value = state.toCity ? `${state.toCity.code})` : '';
    dom.fromClear.classList.toggle('visible', !!state.fromCity);
    dom.toClear.classList.toggle('visible', !!state.toCity);

    dom.swapBtn.style.transform = 'rotate(180deg)';
    setTimeout(() => dom.swapBtn.style.transform = '', 300);
    showToast('تم تبديل المدن 🔄');
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.form-field')) closeAllDropdowns();
  });

  // ========== PASSENGERS MODAL ==========
  const passState = { adults: 1, children: 0, infants: 0, classType: 'economy' };

  function updatePassengersUI() {
    $('#adults-count').textContent = passState.adults;
    $('#children-count').textContent = passState.children;
    $('#infants-count').textContent = passState.infants;
    $('#adults-minus').disabled = passState.adults <= 1;
    $('#children-minus').disabled = passState.children <= 0;
    $('#infants-minus').disabled = passState.infants <= 0;
    $('#infants-plus').disabled = passState.infants >= passState.adults;
  }

  function updatePassengersLabel() {
    const parts = [];
    if (passState.adults) parts.push(`${passState.adults} بالغ`);
    if (passState.children) parts.push(`${passState.children} طفل`);
    if (passState.infants) parts.push(`${passState.infants} رضيع`);
    $('#passengers-label').textContent = parts.join('، ');
    
    const classNames = { economy: 'اقتصادي', premium: 'بريميوم', business: 'رجال أعمال', first: 'الدرجة الأولى' };
    $('#passengers-count').textContent = classNames[passState.classType] || 'اقتصادي';
  }

  function openPassengersModal() {
    dom.passengersModal.classList.add('show');
    dom.passengersToggle.classList.add('active');
    dom.passengersToggle.setAttribute('aria-expanded', 'true');
  }

  function closePassengersModal() {
    dom.passengersModal.classList.remove('show');
    dom.passengersToggle.classList.remove('active');
    dom.passengersToggle.setAttribute('aria-expanded', 'false');
    updatePassengersLabel();
  }

  dom.passengersToggle?.addEventListener('click', openPassengersModal);
  dom.passengersToggle?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPassengersModal(); }
  });
  dom.passengersModal?.addEventListener('click', (e) => {
    if (e.target === dom.passengersModal) closePassengersModal();
  });
  dom.passengersDone?.addEventListener('click', closePassengersModal);

  // Counter buttons
  function setupCounter(minusId, plusId, countId, key) {
    const minus = $(`#${minusId}`);
    const plus = $(`#${plusId}`);
    minus?.addEventListener('click', () => { passState[key]--; updatePassengersUI(); });
    plus?.addEventListener('click', () => { passState[key]++; updatePassengersUI(); });
  }

  setupCounter('adults-minus', 'adults-plus', 'adults-count', 'adults');
  setupCounter('children-minus', 'children-plus', 'children-count', 'children');
  setupCounter('infants-minus', 'infants-plus', 'infants-count', 'infants');

  $('#class-select')?.addEventListener('change', (e) => {
    passState.classType = e.target.value;
    updatePassengersLabel();
  });

  updatePassengersUI();
  updatePassengersLabel();

  // ========== GENERATE TRIPS ==========
  function generateTrips(from, to) {
    const basePrice = 300 + Math.floor(Math.random() * 1200);
    const count = 5 + Math.floor(Math.random() * 4);
    const trips = [];
    const usedAirlines = [];

    for (let i = 0; i < count; i++) {
      let airline;
      do {
        airline = AIRLINES[Math.floor(Math.random() * AIRLINES.length)];
      } while (usedAirlines.includes(airline.code) && usedAirlines.length < AIRLINES.length);
      usedAirlines.push(airline.code);

      const isDirect = Math.random() > 0.4;
      const duration = isDirect 
        ? 120 + Math.floor(Math.random() * 300)
        : 240 + Math.floor(Math.random() * 480);
      
      const departH = 5 + Math.floor(Math.random() * 17);
      const departM = Math.floor(Math.random() * 60);
      const arriveH = (departH + Math.floor(duration / 60)) % 24;
      const arriveM = (departM + (duration % 60)) % 60;

      const multiplier = passState.classType === 'first' ? 4 : passState.classType === 'business' ? 2.5 : passState.classType === 'premium' ? 1.5 : 1;
      const price = Math.round(basePrice * (0.7 + Math.random() * 0.6) * multiplier);

      trips.push({
        airline,
        from: { code: from.code, time: `${String(departH).padStart(2, '0')}:${String(departM).padStart(2, '0')}` },
        to: { code: to.code, time: `${String(arriveH).padStart(2, '0')}:${String(arriveM).padStart(2, '0')}` },
        duration: `${Math.floor(duration / 60)}س ${duration % 60}د`,
        durationMins: duration,
        isDirect,
        stops: isDirect ? 'مباشرة' : duration > 600 ? 'توقفين' : 'توقف واحد',
        stopsClass: isDirect ? '' : duration > 600 ? 'two-stops' : 'one-stop',
        price,
        isBest: false,
      });
    }

    trips.sort((a, b) => a.price - b.price);
    trips[0].isBest = true;
    return trips;
  }

  function renderTripCard(trip) {
    return `
      <div class="trip-card ${trip.isBest ? 'best' : ''}">
        <div class="trip-airline">
          <div class="airline-logo">${trip.airline.emoji}</div>
          <div class="airline-info">
            <h4>${trip.airline.name}</h4>
            <span>رحلة ${trip.airline.code} ${Math.floor(Math.random() * 900 + 100)}</span>
          </div>
        </div>
        <div class="trip-route">
          <div class="trip-point">
            <div class="trip-time">${trip.from.time}</div>
            <div class="trip-city-code">${trip.from.code}</div>
          </div>
          <div class="trip-line">
            <div class="trip-duration">${trip.duration}</div>
            <div class="trip-line-bar ${trip.isDirect ? 'direct' : ''}"></div>
            <div class="trip-stops ${trip.stopsClass}">${trip.stops}</div>
          </div>
          <div class="trip-point">
            <div class="trip-time">${trip.to.time}</div>
            <div class="trip-city-code">${trip.to.code}</div>
          </div>
        </div>
        <div class="trip-footer">
          <div class="trip-price-section">
            <span class="trip-price-label">سعر التذكرة</span>
            <span class="trip-price">$${formatPrice(trip.price)}</span>
          </div>
          <button class="trip-book-btn" onclick="window.SkyElite.bookTrip(${trip.price}, '${trip.airline.name}')">
            احجز الآن
          </button>
        </div>
      </div>
    `;
  }

  // ========== SEARCH ==========
  dom.bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!state.fromCity) { showToast('يرجى اختيار مدينة المغادرة ⚠️', 'error'); return; }
    if (!state.toCity) { showToast('يرجى اختيار مدينة الوصول ⚠️', 'error'); return; }
    if (!dom.departDate.value) { showToast('يرجى اختيار تاريخ المغادرة ⚠️', 'error'); return; }

    // Show loading
    dom.tripResults.classList.add('show');
    dom.resultsTitle.textContent = `رحلات من ${state.fromCity.city} إلى ${state.toCity.city}`;
    dom.resultsList.innerHTML = '';
    dom.loadingSpinner.classList.add('show');
    dom.searchBtn.disabled = true;
    dom.searchBtn.querySelector('span').textContent = 'جاري البحث...';

    setTimeout(() => {
      const trips = generateTrips(state.fromCity, state.toCity);
      dom.loadingSpinner.classList.remove('show');
      dom.resultsCount.textContent = `${trips.length} رحلات متاحة`;
      dom.resultsList.innerHTML = trips.map(renderTripCard).join('');
      dom.searchBtn.disabled = false;
      dom.searchBtn.querySelector('span').textContent = 'بحث عن رحلات';

      // Scroll to results
      dom.tripResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
      showToast(`تم العثور على ${trips.length} رحلة 🎉`);
    }, 1800);
  });

  // ========== FILTER CHIPS ==========
  let allTripsData = [];

  dom.filterChips?.forEach(chip => {
    chip.addEventListener('click', () => {
      dom.filterChips.forEach(c => { c.classList.remove('active'); c.setAttribute('aria-selected', 'false'); });
      chip.classList.add('active');
      chip.setAttribute('aria-selected', 'true');

      const filter = chip.dataset.filter;
      const cards = Array.from(dom.resultsList.querySelectorAll('.trip-card'));
      
      if (filter === 'all') {
        cards.forEach(c => c.style.display = '');
      } else if (filter === 'cheapest') {
        const sorted = [...cards].sort((a, b) => {
          const pa = parseFloat(a.querySelector('.trip-price').textContent.replace(/[$,]/g, ''));
          const pb = parseFloat(b.querySelector('.trip-price').textContent.replace(/[$,]/g, ''));
          return pa - pb;
        });
        dom.resultsList.innerHTML = '';
        sorted.forEach(c => dom.resultsList.appendChild(c));
      } else if (filter === 'fastest') {
        cards.forEach(c => c.style.display = '');
      } else if (filter === 'direct') {
        cards.forEach(c => {
          const isDirect = c.querySelector('.trip-line-bar')?.classList.contains('direct');
          c.style.display = isDirect ? '' : 'none';
        });
      } else if (filter === 'morning') {
        cards.forEach(c => {
          const time = c.querySelector('.trip-time')?.textContent;
          const hour = parseInt(time?.split(':')[0]);
          c.style.display = (hour >= 5 && hour < 12) ? '' : 'none';
        });
      }
    });
  });

  dom.resultsClose?.addEventListener('click', () => {
    dom.tripResults.classList.remove('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ========== POPULAR DESTINATIONS ==========
  function renderPopularDests() {
    dom.destScroll.innerHTML = POPULAR_DESTS.map(d => `
      <div class="dest-card" onclick="window.SkyElite.selectDest('${d.city}', '${d.code}')" role="button" tabindex="0" aria-label="رحلة إلى ${d.city} بسعر ${d.price} ريال">
        <img src="${d.img}" alt="${d.city}" loading="lazy" width="400" height="300">
        <div class="dest-card-overlay"></div>
        <div class="dest-card-info">
          <div class="dest-card-name">${d.city}</div>
          <div class="dest-card-price">ابتداءً من ${d.price} ر.س</div>
        </div>
      </div>
    `).join('');
  }

  // ========== GLOBAL API ==========
  window.SkyElite = {
    selectDest(city, code) {
      const airport = AIRPORTS.find(a => a.code === code);
      if (airport) {
        state.toCity = airport;
        dom.toInput.value = `${airport.city} (${airport.code})`;
        dom.toClear.classList.add('visible');
        dom.fromInput.focus();
        showToast(`تم اختيار ${city} كوجهة ✈️`);
      }
    },
    bookTrip(price, airline) {
      showToast(`جاري الحجز مع ${airline} - $${formatPrice(price)} 🎫`);
    }
  };

  // ========== INIT ==========
  function init() {
    setMinDates();
    renderPopularDests();
    
    // Check scroll on load
    dom.header.classList.toggle('scrolled', window.scrollY > 40);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();