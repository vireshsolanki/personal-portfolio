import './CredlyBadge.css'

const CredlyBadge = ({
  credlyUrl,
  badgeImage,
  size = 48,
  alt = 'AWS Certified Solutions Architect, Associate',
  linked = true,
}) => {
  const img = (
    <img
      src={badgeImage}
      alt={alt}
      className="credly-badge-img"
      width={size}
      height={size}
      loading="eager"
    />
  )

  if (!linked) {
    return (
      <span className="credly-badge-link credly-badge-static" style={{ '--badge-size': `${size}px` }}>
        {img}
      </span>
    )
  }

  return (
    <a
      href={credlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="credly-badge-link"
      aria-label={`${alt}, verify on Credly`}
      title={`${alt}, verify on Credly`}
      style={{ '--badge-size': `${size}px` }}
    >
      {img}
    </a>
  )
}

export default CredlyBadge
