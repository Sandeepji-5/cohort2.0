import React from "react";

const SocialPost = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-bold text-lg">Bhakti Vibes</h2>
            <p className="text-sm text-gray-500">Spiritual Inspiration</p>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="post"
            className="w-full h-[450px] object-cover"
          />

          {/* Quote Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
            <h1 className="text-white text-2xl font-bold text-center leading-relaxed">
              "Always remember Krishna, and never forget Him."
            </h1>
          </div>
        </div>

        {/* Actions */}
        <div className="p-4">
          <div className="flex gap-4 text-2xl mb-3">
            <button>❤️</button>
            <button>💬</button>
            <button>📤</button>
          </div>

          <p className="font-semibold">12.4k likes</p>

          <p className="mt-2 text-gray-700">
            <span className="font-bold">Bhakti Vibes </span>
            Daily spiritual wisdom for peaceful living ✨
          </p>

          <p className="text-sm text-gray-400 mt-2">#Krishna #BhagavadGita #Bhakti</p>
        </div>
      </div>
    </div>
  );
};

export default SocialPost;