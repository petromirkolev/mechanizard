import type { HistoryItem } from '../../types/maintenance';

export function renderHistoryCard(item: HistoryItem) {
  const article = `
    <article class="card bike-history-card">
     <div class="bike-history-card__top">
       <div>
         <h4>${item.name}</h4>
         <p class="muted">${item.description}</p>
       </div>
       <span class="odo-pill">${item.odo} km</span>
     </div>
     <div class="history-lines">
       <p><strong>Date:</strong> ${item.date}</p>
       <p><strong>Notes:</strong> ${item.notes}</p>
     </div>
    </article>
  `;

  return article;
}
