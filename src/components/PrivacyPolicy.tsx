import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="text-gray-600 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            The Cake Lounge ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your information 
            when you use our website and Facebook integration.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-medium text-gray-800 mb-2">2.1 Facebook Integration</h3>
          <p className="text-gray-700 mb-4">
            Our website integrates with Facebook to display photos from our Facebook page. 
            We only access public photos from our business page (thecakelounge.tcl) and do not:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Access your personal Facebook account information</li>
            <li>Collect any personal data from Facebook users</li>
            <li>Store Facebook user data on our servers</li>
            <li>Post to Facebook on your behalf</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-800 mb-2">2.2 Website Usage</h3>
          <p className="text-gray-700 mb-4">
            We may collect anonymous usage data through cookies and analytics to improve our website experience.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Information</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Display our latest cake creations in the gallery</li>
            <li>Improve website functionality and user experience</li>
            <li>Provide customer support</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Sharing</h2>
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or otherwise transfer your information to third parties. 
            We may share information only in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>With your explicit consent</li>
            <li>To comply with legal requirements</li>
            <li>To protect our rights and safety</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Facebook Data Usage</h2>
          <p className="text-gray-700 mb-4">
            Our Facebook app integration follows Facebook's Platform Policy and only accesses:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Public photos from our business page</li>
            <li>No personal user data</li>
            <li>No posting permissions</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Data portability</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate security measures to protect your information 
            from unauthorized access, alteration, or destruction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you 
            of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="bg-gray-100 rounded p-4">
            <p className="text-gray-700">
              <strong>The Cake Lounge</strong><br />
              Email: privacy@thecakelounge.com<br />
              Phone: [Your Contact Number]<br />
              Address: [Your Business Address]
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">10. Facebook App Specific Information</h2>
          <p className="text-gray-700 mb-4">
            <strong>Facebook App ID:</strong> 860114279786784<br />
            <strong>Data Accessed:</strong> Public photos from The Cake Lounge Facebook page<br />
            <strong>Permissions:</strong> No user permissions required<br />
            <strong>Data Storage:</strong> No user data stored
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;