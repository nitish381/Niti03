import { FinalCta } from '@/sections/FinalCta';
import { useDocumentHead } from '@/hooks/useDocumentHead';

export function Contact() {
  useDocumentHead({
    title: 'Contact — Nitish Kumar',
    description: 'Start a conversation with Nitish Kumar about a product worth solving.',
  });

  return (
    <div className="contact-page">
      <FinalCta headingLevel="h1" />
    </div>
  );
}
