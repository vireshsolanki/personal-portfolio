export const parseMetric = (raw) => {
  const m = String(raw).match(/^([^\d]*)([\d.]+)(.*)$/)
  if (!m) return { prefix: '', to: 0, suffix: raw, decimals: 0 }
  const [, prefix, num, suffix] = m
  return {
    prefix,
    to: parseFloat(num),
    suffix,
    decimals: num.includes('.') ? 1 : 0,
  }
}

export const formatMetricValue = (parsed, current) => {
  const rounded =
    parsed.decimals > 0 ? current.toFixed(parsed.decimals) : String(Math.round(current))
  return `${parsed.prefix}${rounded}${parsed.suffix}`
}

export const createCountUpTween = (gsap, element, rawValue, options = {}) => {
  const parsed = parseMetric(rawValue)
  const proxy = { val: 0 }

  return gsap.to(proxy, {
    val: parsed.to,
    duration: options.duration ?? 1.8,
    ease: options.ease ?? 'power2.out',
    onUpdate: () => {
      element.textContent = formatMetricValue(parsed, proxy.val)
    },
  })
}
