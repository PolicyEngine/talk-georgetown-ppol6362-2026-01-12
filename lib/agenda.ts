export interface AgendaItem {
  time: string;
  title: string;
  speaker?: string;
  speakerIds?: string[]; // IDs from the speakers registry
  slideshowId?: string; // Link to slideshow if exists
  type: 'talk' | 'demo' | 'panel' | 'break' | 'networking';
  hasQA?: boolean; // Whether to include Q&A slide at end
}

export const agenda: AgendaItem[] = [
  { time: 'TBD', title: 'Introduction to PolicyEngine', speakerIds: ['max-ghenis', 'daphne-hansell'], slideshowId: 'georgetown-2026', type: 'talk' },
];
