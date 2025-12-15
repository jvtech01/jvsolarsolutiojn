
import Link from 'next/link';
import { Button } from './button';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M16.75 13.96c.25.13.41.2.46.3.05.1.03.44-.04.84-.07.4-.48.83-.82.96-.34.13-1.04.2-1.6.07-.56-.13-1.28-.35-2.23-1.11a8.38 8.38 0 0 1-2.09-2.09c-.76-.95-1-1.67-1.1-2.23-.14-.56-.06-1.26.07-1.6.13-.34.52-.75.96-.82.1-.05.27-.04.38-.04.1 0 .23 0 .34.03.18.04.28.1.38.3s.23.5.34.8.18.52.26.7c.08.18.08.38.03.56-.05.18-.13.28-.26.44-.13.15-.28.3-.4.44-.13.13-.25.28-.13.53s.41.7.87 1.16c.46.46.92.82 1.16.87.25.12.4-.02.53-.13.14-.13.3-.28.44-.4s.3-.23.44-.26a.94.94 0 0 1 .56.03z"
      stroke="none"
    />
    <path d="M22 12c0 5.52-4.48 10-10 10-1.74 0-3.37-.44-4.79-1.22l-5.21 1.22 1.22-5.21C4.44 15.37 4 13.74 4 12 4 6.48 8.48 2 14 2s10 4.48 10 10z" stroke="none" />
  </svg>
);

export const WhatsappButton = ({ phoneNumber }: { phoneNumber: string }) => {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-colors"
    >
      <Link href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="h-8 w-8" />
        <span className="sr-only">Chat on WhatsApp</span>
      </Link>
    </Button>
  );
};
