const entry = {
  app: { import: './src/index.tsx', dependOn: 'react' },
  react: ['react', 'react-dom'],
};

export { entry };
