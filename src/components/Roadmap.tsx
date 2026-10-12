const POINTS: [number, number][] = [
  [185, 439],
  [262, 401],
  [290, 347],
  [236, 301],
  [164, 265],
  [135, 222],
  [161, 177],
  [214, 137],
  [268, 105],
  [281, 65],
  [234, 28],
];

const PATH_D =
  "M 189 438 C 191 423, 241 411, 253 399 C 267 386, 281 364, 278 348 C 273 329, 246 316, 225 303 C 200 287, 172 279, 158 266 C 143 252, 139 237, 145 221 C 151 204, 170 190, 188 179 C 205 169, 225 156, 240 143 C 255 130, 262 111, 258 97 C 253 82, 235 70, 225 58 C 216 47, 232 40, 249 36";

export default function Roadmap() {
  return (
    <svg
      viewBox="0 0 388 472"
      className="h-auto w-full max-w-md"
      role="img"
      aria-label="Lộ trình 11 chương của khóa học"
    >
      <path
        d={PATH_D}
        fill="none"
        stroke="#dfa83c"
        strokeWidth="3"
        strokeLinecap="round"
        className="road-path"
      />

      {POINTS.map(([cx, cy], i) => (
        <g key={i}>
          <circle
            cx={cx}
            cy={cy}
            r="18"
            fill="#fbf7ef"
            stroke="#3e7c58"
            strokeWidth="2.5"
            className="road-dot"
            style={{ animationDelay: `${0.35 + i * 0.15}s` }}
          />
          <text
            x={cx}
            y={cy + 5}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#1f3a2e"
            className="road-dot"
            style={{ animationDelay: `${0.45 + i * 0.15}s` }}
          >
            {i + 1}
          </text>
          {i === 0 && (
            <text
              x={cx - 87}
              y={cy + 92}
              fontSize="12"
              fill="#c4703f"
              fontWeight="600"
              className="road-label"
              style={{ animationDelay: "1.6s" }}
            >
              Bắt đầu
            </text>
          )}
          {i === POINTS.length - 1 && (
            <text
              x={cx + 109}
              y={cy - 22}
              fontSize="12"
              fill="#3e7c58"
              fontWeight="700"
              className="road-label"
              style={{ animationDelay: "1.8s" }}
            >
              Website chạy thật
            </text>
          )}
        </g>
      ))}

      <g className="road-label" style={{ animationDelay: "2s" }}>
        <path d="M 219 458 l 14 -7 l 0 14 Z" fill="#3e7c58" />
        <rect x="211" y="455" width="3" height="16" rx="1.5" fill="#1f3a2e" />
      </g>

      <g className="road-label" style={{ animationDelay: "2.2s" }}>
        <path d="M 218 69 l 0 14 l -14 -7 Z" fill="#dfa83c" />
        <rect x="213" y="64" width="3" height="16" rx="1.5" fill="#1f3a2e" />
      </g>
    </svg>
  );
}