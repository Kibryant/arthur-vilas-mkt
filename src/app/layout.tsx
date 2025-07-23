import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arthur Vilas - Growth Marketing | Especialista em Tráfego Pago",
  description:
    "Especialista em Meta Ads, Google Ads e Growth Marketing. Transformo investimento em vendas com estratégias de tráfego pago focadas em resultado.",
  keywords: [
    "tráfego pago",
    "meta ads",
    "google ads",
    "facebook ads",
    "instagram ads",
    "growth marketing",
    "marketing digital",
    "ROI",
    "conversão",
    "leads",
  ],
  authors: [{ name: "Arthur Vilas" }],
  openGraph: {
    title: "Arthur Vilas - Growth Marketing",
    description: "Especialista em tráfego pago com foco em resultado. Meta Ads e Google Ads.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Vilas - Growth Marketing",
    description: "Especialista em tráfego pago com foco em resultado.",
  },
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-5J8MR58T";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
              <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
                <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        
        {children}</body>
    </html>
  )
}
