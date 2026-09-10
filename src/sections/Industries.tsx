import { industries } from '@/content/site';

export function Industries() {
  return (
    <section className="section--tight industries">
      <div className="container">
        <p className="industries__row">{industries}</p>
      </div>
    </section>
  );
}
