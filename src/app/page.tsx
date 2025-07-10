import Image from "next/image";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Home() {
 const links = [
    {
      name: "WhatsApp",
      url: "https://api.whatsapp.com/send/?phone=73933009905&text&type=phone_number&app_absent=0",
      ariaLabel: "Conectar no WhatsApp",
      icon: <FaWhatsapp />,
      bg: "bg-[#25D366] hover:bg-[#1ebe5a] focus:ring-[#25D366]",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arthurvboass",
      ariaLabel: "Conectar no LinkedIn",
      icon: <FaLinkedin />,
      bg: "bg-[#0077B5] hover:bg-[#00669c] focus:ring-[#0077B5]",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/vilasmktE",
      ariaLabel: "Seguir no Instagram",
      icon: <FaInstagram />,
      bg: "bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:from-[#e67625] focus:ring-[#dd2a7b]",
    },
  ];

  return (
    <main className="min-h-screen  bg-gradient-to-br from-accent/5 via-background to-accent/10 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto space-y-6">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 w-28 h-28 relative">
            <Image
              src="/logo.png"
              alt="Logo Arthur Vilas"
              layout="fill"
              objectFit="contain"
            />
          </div>
          
          <h1 className="text-3xl font-extrabold">
            Arthur Vilas – Growth Marketing
          </h1>
          <p className="mt-2 text-secondary">
            🔥 Tráfego pago com foco em resultado!<br />
            👨‍💻 Especialista em Meta & Google Ads.
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link) => {
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className={`
                  ${link.bg}
                  w-full flex items-center justify-center gap-3 
                  py-4 px-6 rounded-3xl text-white font-semibold text-lg
                  transition-all duration-200 ease-in-out
                  hover:scale-105 hover:shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                  active:scale-95
                `}
              >
                <span className="text-2xl">{link.icon}</span>
                <span>{link.name}</span>
              </a>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center pt-8">
          <p className="text-secondary text-xs">© 2025 Arthur Vilas - Growth Marketing</p>
          <p className="text-secondary text-xs">Todos os direitos reservados.</p>
        </div>
      </div>
    </main>
  )
}
