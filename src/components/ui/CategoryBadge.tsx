import { getCategoryColor, COLOR_MAP } from '@/lib/documents'

interface Props {
  category: string
  size?: 'sm' | 'md'
}

export default function CategoryBadge({ category, size = 'sm' }: Props) {
  const color = getCategoryColor(category)
  const { text, border, bg } = COLOR_MAP[color]

  return (
    <span
      className={`inline-flex items-center font-label tracking-[0.12em] uppercase border cyber-chamfer-sm ${text} ${border} ${bg} ${
        size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-3 py-1'
      }`}
    >
      {category}
    </span>
  )
}
