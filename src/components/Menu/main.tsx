import { useState } from "react";
import clsx from "clsx";

export default function MenuButton({ className = "" }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        "sp_menu-btn relative hidden sm:inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-[#C74C58] cursor-pointer",
        isOpen && "sp_menu-btn__menu-open",
        className
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="sp_menu-btn__bars relative w-11 h-[6px] bg-black transition-transform duration-300" />
      <style jsx>{`
        .sp_menu-btn__bars::before,
        .sp_menu-btn__bars::after {
          content: "";
          position: absolute;
          height: 6px;
          width: 44px;
          background-color: gold;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: transform 250ms ease-in, top 250ms ease-in;
        }
        .sp_menu-btn__bars::before {
          top: calc(50% - 12px);
        }
        .sp_menu-btn__bars::after {
          top: calc(50% + 12px);
        }

        .sp_menu-btn__menu-open .sp_menu-btn__bars {
          transform: rotate(45deg);
        }
        .sp_menu-btn__menu-open .sp_menu-btn__bars::before,
        .sp_menu-btn__menu-open .sp_menu-btn__bars::after {
          top: 50%;
          transform: translate(-50%, -50%) rotate(-90deg);
        }
      `}</style>
    </div>
  );
}
