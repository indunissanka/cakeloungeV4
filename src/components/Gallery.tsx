import React from 'react';
import FacebookFeed from './FacebookFeed';

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-12">Cake Gallery</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Browse through our latest cake creations and get inspired for your next celebration.
          Each cake is uniquely crafted with love and attention to detail.
        </p>
        <FacebookFeed />
      </div>
    </div>
  );
};

export default Gallery;