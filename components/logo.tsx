export function AnimatedLogo({ className }: { className?: string }) {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Rounded square container */}
            <rect x="4" y="4" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
            
            {/* Play button triangle - representing animation/motion */}
            <path d="M13 10 L13 22 L22 16 Z" fill="currentColor" />
            
            {/* Small accent dots for "bits" */}
            <circle cx="9" cy="9" r="1.5" fill="currentColor" />
            <circle cx="23" cy="23" r="1.5" fill="currentColor" />
        </svg>
    )
}
