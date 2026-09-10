import { useEffect } from 'react';

interface DocumentHeadOptions {
  title: string;
  description?: string;
}

const SITE_NAME = 'Nitish Kumar — Senior UI/UX & Product Designer';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

// Small, dependency-free per-route document head manager. Avoids pulling in
// a head-management library for what's just a handful of tag updates on
// route change.
export function useDocumentHead({ title, description }: DocumentHeadOptions) {
  useEffect(() => {
    document.title = title;

    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
    }

    upsertMeta('property', 'og:title', title === SITE_NAME ? title : `${title}`);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', window.location.href);
  }, [title, description]);
}
