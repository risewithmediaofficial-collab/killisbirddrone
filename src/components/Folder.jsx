import { useState } from 'react';

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;

  if (color.length === 3) {
    color = color
      .split('')
      .map(char => char + char)
      .join('');
  }

  const value = parseInt(color, 16);
  let red = (value >> 16) & 0xff;
  let green = (value >> 8) & 0xff;
  let blue = value & 0xff;

  red = Math.max(0, Math.min(255, Math.floor(red * (1 - percent))));
  green = Math.max(0, Math.min(255, Math.floor(green * (1 - percent))));
  blue = Math.max(0, Math.min(255, Math.floor(blue * (1 - percent))));

  return `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1).toUpperCase()}`;
};

const Folder = ({
  color = '#FF6A00',
  size = 1,
  items = [],
  className = '',
  paperClassName = '',
  transparentPapers = false,
  onToggle
}) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);

  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = () => {
    setOpen(previous => {
      const next = !previous;
      onToggle?.(next);

      if (!next) {
        setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
      }

      return next;
    });
  };

  const handlePaperMouseMove = (event, index) => {
    if (!open) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (event.clientX - centerX) * 0.15;
    const offsetY = (event.clientY - centerY) * 0.15;

    setPaperOffsets(previous => {
      const next = [...previous];
      next[index] = { x: offsetX, y: offsetY };
      return next;
    });
  };

  const handlePaperMouseLeave = index => {
    setPaperOffsets(previous => {
      const next = [...previous];
      next[index] = { x: 0, y: 0 };
      return next;
    });
  };

  const getOpenTransform = index => {
    if (index === 0) return 'translate(-120%, -70%) rotate(-15deg)';
    if (index === 1) return 'translate(10%, -70%) rotate(15deg)';
    if (index === 2) return 'translate(-50%, -108%) rotate(5deg)';
    return '';
  };

  return (
    <div style={{ transform: `scale(${size})` }} className={className}>
      <div
        className={`group relative cursor-pointer transition-all duration-200 ease-in ${!open ? 'hover:-translate-y-2' : ''}`}
        style={{ transform: open ? 'translateY(-8px)' : undefined }}
        onClick={handleClick}
        aria-label="Open contact tools"
        role="button"
        tabIndex={0}
        onKeyDown={event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleClick();
          }
        }}
      >
        <div
          className="relative h-[80px] w-[100px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-0 rounded-tr-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute bottom-[98%] left-0 h-[10px] w-[30px] rounded-tl-[5px] rounded-tr-[5px]"
            style={{ backgroundColor: folderBackColor }}
          />

          {papers.map((item, index) => {
            const sizeClasses =
              index === 0
                ? 'h-[80%] w-[70%]'
                : index === 1
                  ? `w-[80%] ${open ? 'h-[80%]' : 'h-[70%]'}`
                  : `w-[90%] ${open ? 'h-[80%]' : 'h-[60%]'}`;

            const transformStyle = open
              ? `${getOpenTransform(index)} translate(${paperOffsets[index].x}px, ${paperOffsets[index].y}px)`
              : undefined;

            return (
              <div
                key={index}
                onMouseMove={event => handlePaperMouseMove(event, index)}
                onMouseLeave={() => handlePaperMouseLeave(index)}
                className={`absolute bottom-[10%] left-1/2 z-20 transition-all duration-300 ease-in-out ${
                  !open
                    ? 'translate-y-[10%] -translate-x-1/2 group-hover:translate-y-0'
                    : 'hover:scale-110'
                } ${sizeClasses} ${paperClassName}`}
                style={{
                  transform: !open ? undefined : transformStyle,
                  backgroundColor: transparentPapers ? 'transparent' : index === 0 ? paper1 : index === 1 ? paper2 : paper3,
                  borderRadius: transparentPapers ? 0 : '10px'
                }}
              >
                {item}
              </div>
            );
          })}

          <div
            className={`absolute z-30 h-full w-full origin-bottom transition-all duration-300 ease-in-out ${
              !open ? 'group-hover:[transform:skew(15deg)_scaleY(0.6)]' : ''
            }`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              ...(open && { transform: 'skew(15deg) scaleY(0.6)' })
            }}
          />
          <div
            className={`absolute z-30 h-full w-full origin-bottom transition-all duration-300 ease-in-out ${
              !open ? 'group-hover:[transform:skew(-15deg)_scaleY(0.6)]' : ''
            }`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              ...(open && { transform: 'skew(-15deg) scaleY(0.6)' })
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Folder;
