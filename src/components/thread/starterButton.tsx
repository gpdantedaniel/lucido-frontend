import { CircleArrowRight } from "lucide-react";

interface starterButtonProps { 
    title: string;
    color: string;
    textColor: string;
    onClick: () => void;
}

export const StarterButton: React.FC<starterButtonProps> = ({ 
    title, color, onClick, textColor
}) => {
    return (
        <div
            className="rounded-2xl h-32 p-4 border box-border border-solid flex justify-between items-end transition hover:opacity-80 hover:cursor-pointer active:opacity-40"
            style={{ backgroundColor: color, color: textColor }}
            onClick={() => onClick()}
        >
            <span className='select-none font-semibold' style={{ backgroundColor: color, color: textColor }}>{title}</span>
            <CircleArrowRight color={textColor}/>
        </div>
    )
}