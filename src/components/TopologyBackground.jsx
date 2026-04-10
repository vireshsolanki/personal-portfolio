import './TopologyBackground.css'

// Node definitions — positioned like a real AWS architecture (top = edge, bottom = data)
const NODES = [
  { id: 'cf',      label: 'CloudFront', x: 580, y: 95  },
  { id: 's3',      label: 'S3',         x: 340, y: 130 },
  { id: 'waf',     label: 'WAF',        x: 800, y: 155 },
  { id: 'apigw',   label: 'API GW',     x: 750, y: 270 },
  { id: 'alb',     label: 'ALB',        x: 490, y: 285 },
  { id: 'cognito', label: 'Cognito',    x: 1010, y: 195 },
  { id: 'ecs',     label: 'ECS',        x: 460, y: 435 },
  { id: 'lambda',  label: 'Lambda',     x: 790, y: 410 },
  { id: 'rds',     label: 'RDS',        x: 380, y: 575 },
  { id: 'ddb',     label: 'DynamoDB',   x: 780, y: 560 },
  { id: 'cw',      label: 'CloudWatch', x: 1060, y: 380 },
  { id: 'tf',      label: 'Terraform',  x: 140, y: 470 },
  { id: 'cicd',    label: 'CI/CD',      x: 200, y: 620 },
]

// Directional edges [from, to, animDuration, animDelay]
const EDGES = [
  ['cf',    's3',      4.2, 0   ],
  ['cf',    'waf',     3.8, 0.6 ],
  ['waf',   'apigw',   3.2, 0.2 ],
  ['cf',    'alb',     5.0, 1.2 ],
  ['apigw', 'lambda',  3.6, 0.4 ],
  ['apigw', 'cognito', 4.4, 1.8 ],
  ['alb',   'ecs',     3.0, 0.8 ],
  ['ecs',   'rds',     4.0, 0.3 ],
  ['lambda','ddb',     3.4, 1.0 ],
  ['lambda','s3',      4.8, 2.2 ],
  ['cw',    'ecs',     5.2, 0.7 ],
  ['cw',    'lambda',  4.6, 1.4 ],
  ['tf',    'ecs',     6.0, 0.5 ],
  ['tf',    'rds',     5.8, 2.0 ],
  ['cicd',  'ecs',     4.2, 1.6 ],
  ['cicd',  'lambda',  5.0, 0.9 ],
]

function getNode(id) {
  return NODES.find(n => n.id === id)
}

const TopologyBackground = () => {
  return (
    <div className="topology-bg" aria-hidden="true">
      <svg
        viewBox="0 0 1200 750"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow filter for nodes */}
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          {/* Radial fade mask so topology fades at edges */}
          <radialGradient id="fadeMask" cx="60%" cy="50%" r="55%">
            <stop offset="20%" stopColor="white" stopOpacity="1"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>
          <mask id="topologyMask">
            <rect width="1200" height="750" fill="url(#fadeMask)"/>
          </mask>
          {/* Packet gradient */}
          <radialGradient id="packetGrad">
            <stop offset="0%" stopColor="#C778DD" stopOpacity="1"/>
            <stop offset="100%" stopColor="#C778DD" stopOpacity="0"/>
          </radialGradient>
        </defs>

        <g mask="url(#topologyMask)">
          {/* ── Connection lines ── */}
          {EDGES.map(([from, to], i) => {
            const a = getNode(from)
            const b = getNode(to)
            if (!a || !b) return null
            const len = Math.hypot(b.x - a.x, b.y - a.y)
            return (
              <line
                key={`line-${i}`}
                x1={a.x} y1={a.y}
                x2={b.x} y2={b.y}
                stroke="#C778DD"
                strokeOpacity="0.09"
                strokeWidth="1"
                strokeDasharray={`${len} ${len}`}
                strokeDashoffset={len}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from={len}
                  to="0"
                  dur="1.2s"
                  fill="freeze"
                  begin={`${0.3 + i * 0.08}s`}
                />
              </line>
            )
          })}

          {/* ── Traveling data packets ── */}
          {EDGES.map(([from, to, dur, delay], i) => {
            const a = getNode(from)
            const b = getNode(to)
            if (!a || !b) return null
            return (
              <circle key={`pkt-${i}`} r="2" fill="#C778DD" fillOpacity="0.5" filter="url(#nodeGlow)">
                <animateMotion
                  dur={`${dur}s`}
                  repeatCount="indefinite"
                  begin={`${delay + 1.5}s`}
                  path={`M${a.x},${a.y} L${b.x},${b.y}`}
                />
              </circle>
            )
          })}

          {/* ── VPC boundary ── */}
          <rect
            x="300" y="340" width="600" height="290"
            rx="8"
            fill="none"
            stroke="#C778DD"
            strokeOpacity="0.07"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <text x="308" y="356" fill="#C778DD" fillOpacity="0.18" fontSize="9" fontFamily="monospace" fontWeight="600" letterSpacing="1">
            VPC  10.0.0.0/16
          </text>

          {/* ── Nodes ── */}
          {NODES.map((node) => (
            <g key={node.id} className="topo-node">
              {/* Outer glow ring */}
              <circle
                cx={node.x} cy={node.y}
                r="14"
                fill="#C778DD"
                fillOpacity="0.03"
                stroke="#C778DD"
                strokeOpacity="0.08"
                strokeWidth="1"
              >
                <animate
                  attributeName="r"
                  values="12;16;12"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${Math.random() * 2}s`}
                />
                <animate
                  attributeName="fill-opacity"
                  values="0.04;0.08;0.04"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              {/* Inner node */}
              <circle
                cx={node.x} cy={node.y}
                r="5"
                fill="#1E2128"
                stroke="#C778DD"
                strokeOpacity="0.5"
                strokeWidth="1.2"
                filter="url(#nodeGlow)"
              />
              {/* Center dot */}
              <circle cx={node.x} cy={node.y} r="2" fill="#C778DD" fillOpacity="0.6"/>
              {/* Label */}
              <text
                x={node.x}
                y={node.y + 22}
                textAnchor="middle"
                fill="#ABB2BF"
                fillOpacity="0.35"
                fontSize="8.5"
                fontFamily="monospace"
                letterSpacing="0.5"
              >
                {node.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}

export default TopologyBackground
