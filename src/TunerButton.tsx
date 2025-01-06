import React from 'react';
import { Music } from 'lucide-react';

interface TunerButtonProps {
  onClick?: () => void;
  href?: string;
}

const TunerButton: React.FC<TunerButtonProps> = ({ onClick, href }) => {
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank');
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="cta-button secondary-cta flex items-center gap-2"
    >
      <Music size={20} />
      Tune Guitar
    </button>
  );
};

export default TunerButton;