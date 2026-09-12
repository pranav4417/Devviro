import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to night mode'}
      aria-pressed={isDark}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {isDark ? '☀' : '◐'}
      </span>
      <span className="theme-toggle-label">{isDark ? 'Light' : 'Night'}</span>
    </button>
  )
}
