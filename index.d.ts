declare module '*.html';
declare module '*.css';

declare module '*.scss' {
  const content: readonly Record<string, string>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.svg' {
  const content: string;
  export default content;
}

declare namespace JSX {
  type WebComponent = Record<string, unknown>;
  interface IntrinsicElements {
    'pearson-header': WebComponent;
    'pearson-button-toggle': WebComponent;
    'pearson-accordion': WebComponent;
    'pearson-datepicker': WebComponent;
    'pearson-pagination': WebComponent;
    'pearson-footer': WebComponent;
  }
}
