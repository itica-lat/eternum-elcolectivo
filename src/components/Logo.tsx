interface LogoProps {
  className?: string
  size?: number
  alt?: boolean
}

export function Logo({ className = '', size = 32, alt = true }: LogoProps) {
  const src = alt ? '/img/logo-alt.png' : '/img/logo.png'

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <img
        src={src}
        alt="El Colectivo"
        width={size}
        height={size}
        className="object-contain"
        style={{ width: size, height: size }}
      />
    </div>
  )
}
