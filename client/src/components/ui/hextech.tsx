import React from 'react';

export function HextechCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`box-hextech p-6 relative group ${className}`}>
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      {children}
    </div>
  );
}

export function HextechButton({ children, onClick, className = "" }: { children: React.ReactNode, onClick?: () => void, className?: string }) {
  return (
    <button onClick={onClick} className={`btn-hextech ${className}`}>
      {children}
    </button>
  );
}

export function HextechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-bold text-black bg-primary transform -skew-x-12 border border-primary shadow-[0_0_10px_rgba(57,255,20,0.5)]">
      <span className="block transform skew-x-12">
        {children}
      </span>
    </span>
  );
}
