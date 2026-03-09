"use client"

import { useState, useEffect, useRef, useCallback } from "react"

const steps = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Заявка и консультация",
    text: "Вы оставляете заявку, мы перезваниваем за 15 минут. Узнаём про объект, задачи и бюджет.",
    result: "Понимание задачи, дата замера",
    duration: "15 минут",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Бесплатный замер",
    text: "Приезжаем на объект, обмеряем помещения, фиксируем особенности и сложные места.",
    result: "Точные замеры, фото объекта",
    duration: "1-24 часа",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Смета за 24 часа",
    text: 'Составляем детальную смету с разбивкой по работам и материалам. Без «примерно».',
    result: "Точная цена, 3 варианта",
    duration: "24 часа",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Договор и старт",
    text: "Подписываем договор с фиксированной ценой и сроками. Выходим на объект.",
    result: "Юридическая защита",
    duration: "1 день",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
        <polyline points="7.5 19.79 7.5 14.6 3 12" />
        <polyline points="21 12 16.5 14.6 16.5 19.79" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Сдача и гарантия",
    text: "Принимаете работу по чек-листу. Выдаём гарантийный талон на 3 года. Вы въезжаете!",
    result: "Готовая квартира",
    duration: "Гарантия 3 года",
  },
]

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const startAutoPlay = useCallback(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1))
    }, 3000)
  }, [])

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }, [])

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [startAutoPlay, stopAutoPlay])

  const progress = ((activeStep - 1) / 4) * 100

  return (
    <section
      className="section process-section"
      id="process"
      ref={sectionRef}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={() => {
        stopAutoPlay()
        startAutoPlay()
      }}
    >
      <div className="section-heading" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
        <p className="eyebrow">Как мы работаем</p>
        <h2 style={{ maxWidth: "none" }}>От звонка до ключей за 5 понятных шагов</h2>
        <p>Прозрачный процесс с понятным результатом на каждом этапе</p>
      </div>

      <div className="process-progress">
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="progress-markers">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`progress-marker${num === activeStep ? " active" : ""}${num < activeStep ? " completed" : ""}`}
              onClick={() => setActiveStep(num)}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="process-steps">
        {steps.map((step, i) => (
          <StepWithConnector
            key={i}
            step={step}
            index={i}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            isLast={i === steps.length - 1}
          />
        ))}
      </div>

      <div className="section-cta">
        <a className="button button-primary" href="#quote">
          Начать с бесплатного замера
        </a>
      </div>
    </section>
  )
}

function StepWithConnector({
  step,
  index,
  activeStep,
  setActiveStep,
  isLast,
}: {
  step: (typeof steps)[number]
  index: number
  activeStep: number
  setActiveStep: (n: number) => void
  isLast: boolean
}) {
  const num = index + 1
  return (
    <>
      <article
        className={`process-step${num === activeStep ? " active" : ""}`}
        data-step={num}
        onMouseEnter={() => setActiveStep(num)}
      >
        <div className="step-header">
          <div className="step-icon">{step.icon}</div>
          <div className="step-number">Шаг {num}</div>
        </div>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
        <div className="step-result">
          <span className="result-label">Результат:</span>
          <span className="result-text">{step.result}</span>
        </div>
        <div className="step-duration">{step.duration}</div>
      </article>
      {!isLast && (
        <div className="step-connector">
          <svg viewBox="0 0 40 24" fill="none">
            <path
              d="M0 12h32M24 4l8 8-8 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </>
  )
}
