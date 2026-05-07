import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  size?: number
  alt?: boolean
}

export function Logo({ className = '', size = 32, alt = true }: LogoProps) {
  const src = alt ? '/img/logo-alt.png' : '/img/logo.png'

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <motion.img
        src={src}
        alt="El Colectivo"
        width={size}
        height={size}
        className="object-contain"
        style={{ width: size, height: size }}
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{
          rotate: {
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        }}
      />
    </motion.div>
  )
}
