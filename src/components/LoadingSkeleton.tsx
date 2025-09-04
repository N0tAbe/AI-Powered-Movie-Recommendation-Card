import React from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-700 rounded ${className}`} />
);

export const RecommendationSkeleton: React.FC = () => (
  <div className="max-w-2xl mx-auto">
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
      <div className="p-6">
        {/* Header skeleton */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-24 h-6 ml-2" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="w-20 h-4" />
            <Skeleton className="w-16 h-4" />
          </div>
        </div>

        {/* Title skeleton */}
        <Skeleton className="w-3/4 h-8 mb-2" />

        {/* Type badge skeleton */}
        <Skeleton className="w-16 h-4 mb-3" />

        {/* Hook skeleton */}
        <Skeleton className="w-full h-4 mb-2" />
        <Skeleton className="w-2/3 h-4 mb-4" />

        {/* About section skeleton */}
        <div className="mb-6">
          <Skeleton className="w-16 h-6 mb-2" />
          <Skeleton className="w-full h-4 mb-2" />
          <Skeleton className="w-full h-4 mb-2" />
          <Skeleton className="w-3/4 h-4" />
        </div>

        {/* Why it fits section skeleton */}
        <div className="mb-6">
          <Skeleton className="w-48 h-6 mb-2" />
          <Skeleton className="w-full h-4 mb-2" />
          <Skeleton className="w-full h-4 mb-2" />
          <Skeleton className="w-2/3 h-4" />
        </div>

        {/* Bottom section skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <Skeleton className="w-32 h-6 mb-1" />
            <Skeleton className="w-20 h-6" />
          </div>
          <div className="sm:text-right">
            <Skeleton className="w-24 h-6 mb-1" />
            <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
              <Skeleton className="w-16 h-6" />
              <Skeleton className="w-20 h-6" />
              <Skeleton className="w-18 h-6" />
            </div>
          </div>
        </div>

        {/* Tagline skeleton */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <Skeleton className="w-3/4 h-6 mx-auto" />
        </div>
      </div>
    </div>
  </div>
);

export const FormSkeleton: React.FC = () => (
  <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
    <Skeleton className="w-64 h-6 mx-auto mb-6" />
    
    <div className="flex justify-center mb-6">
      <Skeleton className="w-48 h-10 rounded-lg" />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index}>
          <Skeleton className="w-32 h-4 mb-1" />
          <Skeleton className="w-full h-10" />
        </div>
      ))}
    </div>
    
    <div className="flex justify-center">
      <Skeleton className="w-48 h-12 rounded-full" />
    </div>
  </div>
);
