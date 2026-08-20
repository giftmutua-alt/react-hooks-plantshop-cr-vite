import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Clean up after each test run
afterEach(() => {
  cleanup();
});

// Mock plant data for tests
global.basePlants = [
  { id: 1, name: 'Palm', price: 20, image: 'palm.jpg', inStock: true },
  { id: 2, name: 'Peperomia', price: 15, image: 'peperomia.jpg', inStock: true },
  { id: 3, name: 'Philodendron', price: 25, image: 'philodendron.jpg', inStock: true }
];

global.alternatePlants = [
  { id: 4, name: 'Fern', price: 12, image: 'fern.jpg', inStock: true },
  { id: 5, name: 'Bamboo', price: 20, image: 'bamboo.jpg', inStock: true }
];

// Detect environment: Vitest or Jest
const mockFn = typeof vi !== "undefined" ? vi.fn : jest.fn;

// Mock fetch response helper
global.setFetchResponse = (data) => {
  global.fetch = mockFn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data)
    })
  );
};


