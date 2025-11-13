import React, { useEffect, useState } from 'react';

interface Photo {
  id: string;
  images: { source: string }[];
}

// Fallback placeholder images for demonstration
const placeholderImages = Array.from({ length: 16 }, (_, i) => ({
  id: `placeholder-${i + 1}`,
  images: [{ source: `https://via.placeholder.com/300x300/FFB6C1/FFFFFF?text=Cake+${i + 1}` }]
}));

const FacebookFeed: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Set a timeout to prevent infinite loading
    const loadingTimeout = setTimeout(() => {
      if (loading) {
        console.warn('Facebook SDK loading timeout - falling back to demo images');
        setLoading(false);
        setError('Facebook connection timed out. Using demo images.');
        setPhotos(placeholderImages);
      }
    }, 10000); // 10 second timeout

    // Load Facebook SDK
    const loadFacebookSDK = () => {
      if (document.getElementById('facebook-jssdk')) return;

      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      
      script.onload = () => {
        console.log('Facebook SDK loaded successfully');
        
        // Check if FB is available
        if (!window.FB) {
          console.error('Facebook SDK loaded but FB object not available');
          setLoading(false);
          setError('Facebook SDK initialization failed. Using demo images.');
          setPhotos(placeholderImages);
          return;
        }

        window.fbAsyncInit = function() {
          console.log('Initializing Facebook SDK...');
          window.FB.init({
            appId: '860114279786784',
            cookie: true,
            xfbml: true,
            version: 'v18.0'
          });

          console.log('Fetching photos from Facebook API...');
          // Fetch photos
          window.FB.api(
            '/thecakelounge.tcl/photos',
            'GET',
            { fields: 'images', limit: 16 },
            function(response: any) {
              clearTimeout(loadingTimeout);
              setLoading(false);
              if (response && !response.error) {
                console.log('Facebook API Success:', response.data?.length, 'photos loaded');
                setPhotos(response.data);
              } else {
                console.error('Facebook API Error:', response?.error);
                console.log('Facebook App ID:', '860114279786784');
                console.log('Facebook Page:', 'thecakelounge.tcl');
                setError('Failed to load photos from Facebook. Using demo images.');
                setPhotos(placeholderImages);
              }
            }
          );
        };
        
        // Initialize immediately since SDK is loaded
        window.fbAsyncInit();
      };

      script.onerror = () => {
        clearTimeout(loadingTimeout);
        console.error('Failed to load Facebook SDK script');
        setLoading(false);
        setError('Failed to load Facebook SDK. Using demo images.');
        setPhotos(placeholderImages);
      };

      document.body.appendChild(script);
    };

    loadFacebookSDK();

    // Cleanup timeout on unmount
    return () => clearTimeout(loadingTimeout);
  }, [loading]);

  if (loading) {
    return (
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading cake photos...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error && photos.length === 0) {
    return (
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <p className="text-yellow-600 mb-2">Demo Mode</p>
              <p className="text-gray-600 text-sm">{error}</p>
              <p className="text-gray-500 text-xs mt-2">The 4x4 grid layout is working with placeholder images.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 bg-gray-50">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">Our Latest Creations</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.slice(0, 16).map((photo) => (
            <div key={photo.id} className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={photo.images[0]?.source}
                alt="Cake creation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Declare FB on window
declare global {
  interface Window {
    FB: any;
    fbAsyncInit: any;
  }
}

export default FacebookFeed;