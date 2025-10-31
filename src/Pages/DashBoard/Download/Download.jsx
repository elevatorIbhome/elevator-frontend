import React from 'react';
import { FaExclamationTriangle, FaRocket, FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const Download = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Rocket */}
      <div className="absolute top-20 left-10 animate-bounce">
        <FaRocket className="text-yellow-300 text-5xl drop-shadow-lg" />
      </div>

      {/* Main Alert Card */}
      <div className="relative z-10 max-w-md w-full">
        <div className="card bg-base-100 shadow-2xl border border-purple-500/30 backdrop-blur-md bg-opacity-90">
          <div className="card-body text-center p-8">
            {/* Icon with glow effect */}
            <div className="flex justify-center mb-4">
              <div className="relative">
                <FaExclamationTriangle className="text-6xl text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 blur-xl bg-cyan-400 opacity-50 animate-ping"></div>
              </div>
            </div>

            {/* Message */}
            <h2 className="text-xl font-bold text-black mb-3">
              Sorry, there are no downloads available at this time.
            </h2>

            {/* Download Icon Animation */}
            <div className="flex justify-center items-center gap-2 mb-6">
              <FaDownload className="text-3xl text-gray-500 animate-bounce" />
              <span className="text-4xl text-gray-400">→</span>
              <div className="w-12 h-12 border-4 border-dashed border-gray-400 rounded-full animate-spin"></div>
            </div>

          </div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(139, 92, 246, 0.3)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              values="
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z;
                M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,144C672,160,768,160,864,144C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L0,320Z;
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z
              "
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </div>
    );
};

export default Download;