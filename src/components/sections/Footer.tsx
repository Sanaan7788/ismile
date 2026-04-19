import Link from "next/link";
import { MessageCircle, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import content from "../../../docs/CONTENT.json";
import design from "../../../docs/DESIGN_SYSTEM.json";
import Image from "next/image";

export default function Footer() {
  const { footer } = content;

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.02] border-t border-white/10 pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6 bg-white p-2 rounded-lg">
              <Image
                src={design.brand.logo_svg_url}
                alt={design.brand.name}
                width={127}
                height={44}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {design.brand.tagline_sub}
            </p>
            <div className="flex flex-wrap gap-2">
              {footer.social.map((network) => (
                <a key={network} href="#" className="px-3 py-1.5 rounded-full bg-white/10 flex items-center text-xs hover:bg-primary transition-colors">
                  <span className="mr-1">{network}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {content.services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <Link href="#" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{footer.address_usa}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${footer.email}`} className="hover:text-primary transition-colors">
                  {footer.email}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${footer.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">
                  {footer.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Values */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white">Why iSmile?</h4>
            <ul className="space-y-3">
              {content.values.map((val) => (
                <li key={val.title} className="flex items-center space-x-2 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{val.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>{footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
