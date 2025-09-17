import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  texts: string[];
  speed?: number;
  className?: string;
  pauseDuration?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  texts,
  speed = 100,
  className = '',
  pauseDuration = 2000
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting && currentCharIndex < currentText.length) {
      // Typing
      const timer = setTimeout(() => {
        setDisplayedText(currentText.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (!isDeleting && currentCharIndex === currentText.length) {
      // Pause before deleting
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timer);
    } else if (isDeleting && currentCharIndex > 0) {
      // Deleting
      const timer = setTimeout(() => {
        setDisplayedText(currentText.slice(0, currentCharIndex - 1));
        setCurrentCharIndex(prev => prev - 1);
      }, speed / 2);
      return () => clearTimeout(timer);
    } else if (isDeleting && currentCharIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex(prev => (prev + 1) % texts.length);
    }
  }, [currentCharIndex, currentTextIndex, isDeleting, texts, speed, pauseDuration]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayedText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        |
      </span>
    </span>
  );
};

export default TypingAnimation;