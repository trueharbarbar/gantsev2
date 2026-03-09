import type { Metadata } from "next"
import { Manrope, Unbounded } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
})

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700"],
  variable: "--font-unbounded",
})

export const metadata: Metadata = {
  title: "Ганцев | Ремонт и отделка квартир в Санкт-Петербурге под ключ",
  description:
    "Ремонт квартир в СПб от 12 000 руб/м2. Гарантия 3 года, фиксированная смета, сроки в договоре. 147+ сданных объектов. Бесплатный замер и расчёт за 24 часа.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${unbounded.variable}`}>
        {children}
      </body>
    </html>
  )
}
