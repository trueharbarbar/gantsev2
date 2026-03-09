import ProcessSection from "./components/ProcessSection"

export default function Home() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ганцев">
          <img src="/assets/logo-gantsev-mark.svg" alt="Логотип Ганцев" />
          <span className="brand-stack">
            <span className="brand-name">ГАНЦЕВ</span>
            <span className="brand-city">строительная компания &bull; Санкт-Петербург</span>
          </span>
        </a>
        <nav className="main-nav" aria-label="Основная навигация">
          <a href="#services">Услуги</a>
          <a href="#cases">Портфолио</a>
          <a href="#guarantees">Гарантии</a>
          <a href="#process">Этапы</a>
          <a href="#reviews">Отзывы</a>
        </nav>
        <a className="header-cta" href="#quote">Расчёт за 24 часа</a>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Ремонт квартир под ключ в Санкт-Петербурге</p>
            <h1>Сделаем ремонт точно в срок или вернём деньги за каждый день просрочки</h1>
            <p className="hero-lead">
              Фиксируем цену в договоре без скрытых доплат. Вы знаете итоговую сумму до начала работ
              и получаете гарантию 3 года на все виды отделки. Уже 147 семей въехали в готовые квартиры.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#quote">Рассчитать стоимость моего ремонта</a>
              <a className="button button-secondary" href="#cases">Смотреть готовые объекты</a>
            </div>
            <div className="contact-pills" aria-label="Контакты">
              <a className="contact-pill" href="tel:+79217822218">+7 921 782-22-18</a>
              <a className="contact-pill" href="https://t.me/+79217822218">Написать в Telegram</a>
              <span className="contact-pill">Замер бесплатно</span>
            </div>
            <ul className="hero-points">
              <li>Цена фиксируется в договоре и не меняется</li>
              <li>Сроки прописаны с финансовой ответственностью</li>
              <li>Расчёт стоимости за 24 часа после замера</li>
            </ul>
          </div>

          <div className="hero-visual">
            <img src="/assets/hero-premium.jpg" alt="Премиальный интерьер после отделки" />
            <div className="hero-card">
              <p className="hero-card-label">Что вы получите сегодня</p>
              <ul>
                <li>Бесплатный выезд на замер</li>
                <li>Точную смету с разбивкой по работам</li>
                <li>3 варианта ремонта по бюджету</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="trust-strip" aria-label="Ключевые показатели">
          <article>
            <p className="metric-title">147+ объектов</p>
            <p className="metric-copy">Сданных квартир и домов за 8 лет работы в Санкт-Петербурге и Ленинградской области.</p>
          </article>
          <article>
            <p className="metric-title">Гарантия 3 года</p>
            <p className="metric-copy">На все виды работ. Если что-то пойдёт не так — приедем и исправим бесплатно.</p>
          </article>
          <article>
            <p className="metric-title">От 12 000 руб/м2</p>
            <p className="metric-copy">Комплексный ремонт под ключ с материалами среднего сегмента.</p>
          </article>
        </section>

        {/* PAIN POINTS */}
        <section className="section problems-section">
          <div className="section-heading">
            <p className="eyebrow">Знакомо?</p>
            <h2>Почему 73% людей боятся начинать ремонт</h2>
          </div>
          <div className="cards three-up">
            <article className="card problem-card">
              <div className="problem-icon">1</div>
              <h3>&laquo;Сказали 500 тысяч, а вышло 1,5 миллиона&raquo;</h3>
              <p>Бригады занижают цену на старте, а потом появляются &laquo;непредвиденные работы&raquo;. Мы фиксируем финальную сумму в договоре.</p>
            </article>
            <article className="card problem-card">
              <div className="problem-icon">2</div>
              <h3>&laquo;Обещали 2 месяца, ремонт идёт уже год&raquo;</h3>
              <p>Рабочие берут несколько объектов и растягивают сроки. У нас штраф за просрочку — 0,5% от суммы за каждый день.</p>
            </article>
            <article className="card problem-card">
              <div className="problem-icon">3</div>
              <h3>&laquo;Мастера пропали с авансом&raquo;</h3>
              <p>Частные бригады без договора исчезают. Мы работаем по договору с поэтапной оплатой по факту выполнения.</p>
            </article>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="section accent-panel">
          <div className="section-heading compact">
            <p className="eyebrow">Наш подход</p>
            <h2>Ремонт без стресса: вы знаете цену, сроки и результат заранее</h2>
          </div>
          <div className="cards three-up">
            <article className="card card-dark">
              <h3>Фиксированная смета</h3>
              <p>Детальный расчёт каждой позиции до рубля. Цена не изменится, даже если вырастут цены на материалы.</p>
            </article>
            <article className="card card-dark">
              <h3>Сроки в договоре</h3>
              <p>Прописываем дату сдачи с финансовой ответственностью. Не успеваем — платим неустойку из своего кармана.</p>
            </article>
            <article className="card card-dark">
              <h3>Оплата по этапам</h3>
              <p>Платите только за выполненные работы. Приняли этап — оплатили. Никаких предоплат за воздух.</p>
            </article>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Услуги и цены</p>
            <h2>Выберите свой вариант ремонта</h2>
            <p>
              От косметического обновления до премиальной отделки с авторским надзором.
              Рассчитаем точную стоимость для вашей квартиры за 24 часа.
            </p>
          </div>

          <div className="cards three-up">
            <article className="card service-card">
              <div className="service-price">от 8 000 руб/м2</div>
              <h3>Косметический ремонт</h3>
              <p>Обновление без капитальных изменений: покраска, обои, замена напольного покрытия, потолки.</p>
              <ul className="service-includes">
                <li>Выравнивание стен и потолков</li>
                <li>Поклейка обоев или покраска</li>
                <li>Укладка ламината/линолеума</li>
                <li>Установка плинтусов и порогов</li>
              </ul>
              <span className="service-time">Срок: от 2 недель</span>
            </article>
            <article className="card service-card service-card-popular">
              <div className="popular-badge">Популярный выбор</div>
              <div className="service-price">от 12 000 руб/м2</div>
              <h3>Ремонт под ключ</h3>
              <p>Полный цикл от демонтажа до чистовой отделки. Въезжаете в готовую квартиру с мебелью.</p>
              <ul className="service-includes">
                <li>Демонтаж и черновые работы</li>
                <li>Новая электрика и сантехника</li>
                <li>Выравнивание, штукатурка, стяжка</li>
                <li>Чистовая отделка всех помещений</li>
                <li>Установка дверей и сантехники</li>
              </ul>
              <span className="service-time">Срок: от 2 месяцев</span>
            </article>
            <article className="card service-card">
              <div className="service-price">от 18 000 руб/м2</div>
              <h3>Премиум-отделка</h3>
              <p>Сложные интерьеры с дизайн-проектом, премиальными материалами и авторским надзором.</p>
              <ul className="service-includes">
                <li>Всё из пакета &laquo;Под ключ&raquo;</li>
                <li>Работа по дизайн-проекту</li>
                <li>Скрытые инженерные системы</li>
                <li>Премиальные материалы</li>
                <li>Авторский надзор дизайнера</li>
              </ul>
              <span className="service-time">Срок: от 3 месяцев</span>
            </article>
          </div>

          <div className="section-cta">
            <a className="button button-primary" href="#quote">Узнать стоимость для моей квартиры</a>
          </div>
        </section>

        {/* CASES */}
        <section className="section split-section" id="cases">
          <div className="section-heading">
            <p className="eyebrow">Портфолио</p>
            <h2>147 сданных объектов — смотрите результаты</h2>
            <p>
              Каждый проект с фотоотчётом до/после, детальной сметой и отзывом заказчика.
              Покажем похожий объект под вашу задачу.
            </p>
          </div>

          <div className="cases-grid">
            <article className="case-card case-card-large">
              <img src="/assets/case-premium-living.jpg" alt="Премиальный коттедж, гостиная после отделки" />
              <div className="case-copy">
                <p className="case-tag">Премиум-отделка &bull; 156 м2</p>
                <h3>Коттедж в Курортном районе</h3>
                <p>
                  Полный ремонт загородного дома со вторым светом, каминной зоной и сложной геометрией потолков.
                </p>
                <div className="case-meta">
                  <span className="case-budget">Бюджет: 4 200 000 руб</span>
                  <span className="case-duration">Срок: 4,5 месяца</span>
                </div>
              </div>
            </article>

            <article className="case-card">
              <img src="/assets/case-premium-kitchen.jpg" alt="Кухня-столовая после отделки" />
              <div className="case-copy">
                <p className="case-tag">Ремонт под ключ &bull; 78 м2</p>
                <h3>Двушка в ЖК &laquo;Балтийская жемчужина&raquo;</h3>
                <p>
                  Ремонт новостройки с перепланировкой: объединили кухню с гостиной, сделали гардеробную.
                </p>
                <div className="case-meta">
                  <span className="case-budget">936 000 руб</span>
                  <span className="case-duration">2,5 месяца</span>
                </div>
              </div>
            </article>

            <article className="case-card">
              <img src="/assets/case-process-open-space.jpg" alt="Студия после ремонта" />
              <div className="case-copy">
                <p className="case-tag">Косметический &bull; 42 м2</p>
                <h3>Студия на Васильевском</h3>
                <p>
                  Обновление под сдачу в аренду: новые обои, ламинат, потолки, освежили санузел.
                </p>
                <div className="case-meta">
                  <span className="case-budget">320 000 руб</span>
                  <span className="case-duration">3 недели</span>
                </div>
              </div>
            </article>
          </div>

          <div className="section-cta">
            <a className="button button-secondary" href="#quote">Показать похожий объект под мою задачу</a>
          </div>
        </section>

        {/* PROCESS SHOWCASE */}
        <section className="section process-showcase">
          <div className="section-heading">
            <p className="eyebrow">До / После</p>
            <h2>Не просто красивые картинки — реальная трансформация</h2>
            <p>
              Показываем весь путь: от убитой вторички или голого бетона до готового интерьера.
              Вы видите, как ведётся объект на каждом этапе.
            </p>
          </div>

          <div className="showcase-grid">
            <article className="showcase-card">
              <img className="showcase-media" src="/assets/case-engineering.jpg" alt="Черновой этап — инженерная подготовка" />
              <div className="showcase-copy">
                <h3>Черновой этап</h3>
                <p>
                  Демонтаж, новая электрика по проекту, развод��а сантехники, стяжка пола.
                  Фундамент качественного ремонта, который не видно, но от которого всё зависит.
                </p>
              </div>
            </article>

            <article className="showcase-card">
              <img className="showcase-media" src="/assets/hero-premium.jpg" alt="Готовый результат — чистовая отделка" />
              <div className="showcase-copy">
                <h3>Готовый результат</h3>
                <p>
                  Чистовая отделка, установка дверей, сантехники и светильников.
                  Финальная уборка — и вы въезжаете в готовую квартиру.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* GUARANTEES */}
        <section className="section" id="guarantees">
          <div className="section-heading">
            <p className="eyebrow">Гарантии</p>
            <h2>5 причин, почему с нами безопасно</h2>
          </div>

          <div className="guarantees-grid">
            <article className="guarantee-item">
              <div className="guarantee-number">01</div>
              <div className="guarantee-content">
                <h3>Договор с юридической ответственностью</h3>
                <p>Работаем официально по договору подряда. Все условия, сроки и суммы зафиксированы. Вы защищены законом.</p>
              </div>
            </article>
            <article className="guarantee-item">
              <div className="guarantee-number">02</div>
              <div className="guarantee-content">
                <h3>Фиксированная цена без &laquo;сюрпризов&raquo;</h3>
                <p>Смета детализирована до каждого самореза. Цена не вырастет, даже если подорожают материалы — это наши риски.</p>
              </div>
            </article>
            <article className="guarantee-item">
              <div className="guarantee-number">03</div>
              <div className="guarantee-content">
                <h3>Штраф за просрочку — 0,5% в день</h3>
                <p>Срок сдачи прописан в договоре. Каждый день задержки — деньги из нашего кармана в ваш.</p>
              </div>
            </article>
            <article className="guarantee-item">
              <div className="guarantee-number">04</div>
              <div className="guarantee-content">
                <h3>Гарантия 3 года на все работы</h3>
                <p>Если что-то отклеится, треснет или отвалится — приедем и переделаем бесплатно. Без споров и отговорок.</p>
              </div>
            </article>
            <article className="guarantee-item">
              <div className="guarantee-number">05</div>
              <div className="guarantee-content">
                <h3>Оплата только по факту</h3>
                <p>Разбиваем ремонт на этапы. Приняли работу — оплатили. Никаких авансов &laquo;на материалы&raquo; и предоплат за воздух.</p>
              </div>
            </article>
          </div>
        </section>

        {/* PROCESS */}
        <ProcessSection />

        {/* REVIEWS */}
        <section className="section" id="reviews">
          <div className="section-heading">
            <p className="eyebrow">Отзывы</p>
            <h2>Что говорят те, кто уже сделал ремонт с нами</h2>
          </div>

          <div className="reviews-grid">
            <article className="review-card">
              <div className="review-header">
                <div className="review-avatar">АК</div>
                <div className="review-author">
                  <span className="review-name">Анна Козлова</span>
                  <span className="review-project">Ремонт под ключ, 65 м2</span>
                </div>
              </div>
              <p className="review-text">
                &laquo;Выбирала между 5 бригадами. Только здесь дали детальную смету до рубля и прописали штраф за просрочку в договоре.
                Ремонт сдали на 3 дня раньше срока. Рекомендую всем, кто устал от &ldquo;потом посчитаем&rdquo;.&raquo;
              </p>
              <div className="review-meta">
                <span>Декабрь 2025</span>
                <span>Приморский район</span>
              </div>
            </article>

            <article className="review-card">
              <div className="review-header">
                <div className="review-avatar">ДМ</div>
                <div className="review-author">
                  <span className="review-name">Дмитрий Морозов</span>
                  <span className="review-project">Премиум-отделка коттеджа, 180 м2</span>
                </div>
              </div>
              <p className="review-text">
                &laquo;Сложный объект со вторым светом и панорамными окнами. Были сомнения, справятся ли.
                Справились на отлично. Прораб на связи 24/7, все вопросы решались за часы, не за недели.&raquo;
              </p>
              <div className="review-meta">
                <span>Октябрь 2025</span>
                <span>Курортный район</span>
              </div>
            </article>

            <article className="review-card">
              <div className="review-header">
                <div className="review-avatar">ЕС</div>
                <div className="review-author">
                  <span className="review-name">Елена Соколова</span>
                  <span className="review-project">Косметический ремонт, 48 м2</span>
                </div>
              </div>
              <p className="review-text">
                &laquo;Делали ремонт под сдачу в аренду. Важно было быстро и недорого, но без халтуры.
                Сделали за 2,5 недели, квартиру сдала в первый же день показа. Цена не выросла ни на рубль.&raquo;
              </p>
              <div className="review-meta">
                <span>Январь 2026</span>
                <span>Василеостровский район</span>
              </div>
            </article>
          </div>
        </section>

        {/* CALCULATOR CTA */}
        <section className="section calculator-cta">
          <div className="calculator-content">
            <p className="eyebrow">Узнайте стоимость за 24 часа</p>
            <h2>Сколько стоит ремонт вашей квартиры?</h2>
            <p>Оставьте заявку — перезвоним за 15 минут, договоримся о бесплатном замере и пришлём точную смету в тот же день.</p>
            <div className="calculator-features">
              <span className="calc-feature">Замер бесплатно</span>
              <span className="calc-feature">Смета за 24 часа</span>
              <span className="calc-feature">3 варианта по бюджету</span>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="section proposal" id="quote">
          <div className="proposal-copy">
            <p className="eyebrow">Бесплатный расчёт</p>
            <h2>Получите точную смету для вашей квартиры</h2>
            <p>
              Заполните форму или позвоните — перезвоним за 15 минут, ответим на вопросы
              и договоримся о бесплатном выезде на замер.
            </p>
            <ul className="proposal-list">
              <li>Телефон: <a href="tel:+79217822218">+7 921 782-22-18</a></li>
              <li>Telegram: <a href="https://t.me/+79217822218">написать</a></li>
              <li>WhatsApp: <a href="https://wa.me/79217822218">написать</a></li>
            </ul>
            <div className="proposal-benefits">
              <div className="benefit-item">
                <span className="benefit-check">&#10003;</span>
                <span>Перезвоним за 15 минут</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-check">&#10003;</span>
                <span>Замер бесплатно в удобное время</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-check">&#10003;</span>
                <span>Смета с точной ценой за 24 часа</span>
              </div>
            </div>
          </div>

          <form className="lead-form" action="#" method="get">
            <label>
              Ваше имя
              <input type="text" name="name" placeholder="Как к вам обращаться?" required />
            </label>
            <label>
              Телефон
              <input type="tel" name="phone" placeholder="+7 (___) ___-__-__" required />
            </label>
            <label>
              Расскажите про объект
              <textarea name="task" rows={4} placeholder="Например: новостройка 62 м2, хочу ремонт под ключ с перепланировкой. Бюджет до 1 млн." />
            </label>
            <button className="button button-primary" type="submit">Получить расчёт стоимости</button>
            <p className="form-note">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
          </form>
        </section>

        {/* FAQ */}
        <section className="section faq">
          <div className="section-heading">
            <p className="eyebrow">Частые вопросы</p>
            <h2>Ответы на то, что спрашивают чаще всего</h2>
          </div>

          <div className="faq-list">
            <article className="faq-item">
              <h3>Что входит в стоимость ремонта?</h3>
              <p>Вся работа: демонтаж, черновые и чистовые работы, электрика, сантехника, установка дверей и сантехники. Материалы считаются отдельно — мы поможем выбрать и закупить, или вы покупаете сами.</p>
            </article>
            <article className="faq-item">
              <h3>Почему цена не вырастет в процессе?</h3>
              <p>Потому что мы делаем детальный замер и составляем смету до рубля ДО подписания договора. Все риски роста цен на материалы — наши. Вы платите ту сумму, что прописана в договоре.</p>
            </article>
            <article className="faq-item">
              <h3>А если найдутся скрытые проблемы?</h3>
              <p>Опытный прораб видит 90% проблем на замере. Если что-то всплывёт в процессе — обсудим и согласуем с вами ДО выполнения. Без вашего согласия ничего не делаем и не добавляем к счёту.</p>
            </article>
            <article className="faq-item">
              <h3>Как происходит оплата?</h3>
              <p>Поэтапно по факту выполнения: разбиваем ремонт на 4-5 этапов, вы принимаете каждый по чек-листу и оплачиваете. Никаких авансов за &laquo;закупку материалов&raquo;.</p>
            </article>
            <article className="faq-item">
              <h3>Работаете с дизайн-проектом?</h3>
              <p>Да, работаем как по вашему дизайн-проекту, так и без него. Можем порекомендовать проверенного дизайнера или помочь с планировкой самостоятельно.</p>
            </article>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section final-cta">
          <div className="final-cta-content">
            <h2>Готовы узнать, сколько стоит ваш ремонт?</h2>
            <p>Позвоните или оставьте заявку — перезвоним за 15 минут и договоримся о бесплатном замере</p>
            <div className="final-cta-actions">
              <a className="button button-primary" href="tel:+79217822218">Позвонить: +7 921 782-22-18</a>
              <a className="button button-secondary" href="#quote">Оставить заявку</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <p className="footer-name">ГАНЦЕВ</p>
          <p>Строительная компания &bull; Санкт-Петербург</p>
        </div>
        <div className="footer-contacts">
          <p><a href="tel:+79217822218">+7 921 782-22-18</a></p>
          <p>Telegram &bull; WhatsApp</p>
        </div>
        <div className="footer-legal">
          <p>ИП Ганцев &bull; ИНН 000000000000</p>
          <p>&copy; 2026 Все права защищены</p>
        </div>
      </footer>
    </div>
  )
}
