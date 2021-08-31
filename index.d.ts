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
