export type Variant = 'day' | 'night' | 'sleep';

type BirdMascotProps = {
  variant: Variant;
  size: number;
}

type Z = {
  x: number, 
  y: number, 
  s: number,
  opacity: number,
  rotate: number,
}
const Zzz: Z[] = [
  {x:14, y:30, s:7, opacity:1.0,  rotate:-15},
  {x:17, y:20, s:6, opacity:0.35, rotate:-10},
  {x:10, y:10, s:4, opacity:0.15, rotate:-22},
];

const zPath = ({x, y, s}: Omit<Z, 'opacity' | 'rotate'>) =>
  `M${x} ${y} L${x + s} ${y} L${x} ${y + s} L${x + s} ${y + s}`;

export default function BirdMascot({ variant, size = 120 }: BirdMascotProps) {
  const isDay = variant === 'day';
  const isNight = variant === 'night';
  const isSleep = variant === 'sleep';

  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <g>
        <circle cx={50} cy={50} r={50} fill={
          isDay
          ? '#BFE6FF'
          : isNight
          ? '#1E2A55'
          : '#B8B5E8'
        } />
        {isDay ? (
          <circle cx={78} cy={24} r={11} fill="#FFD23F" />
        ) : isNight ? (
          <>
            <circle cx={76} cy={24} r={11} fill="#F3ECC4" />
            <circle cx={71} cy={21} r={10} fill="#1E2A55" />
            <circle cx={26} cy={22} r={2} fill="#FFFFFF" />
            <circle cx={40} cy={14} r={1.5} fill="#FFFFFF" />
            <circle cx={22} cy={40} r={1.5} fill="#FFFFFF" />
          </>
        ) : (
          <>
            {/* 眠り背景 */}
            <circle cx={75} cy={25} r={13} fill="#FFF1A8" />

            {/* Zzz */}
            <g fill="none" stroke="#1C1C1E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              {Zzz.map((z, index) => {
                return(
                  <path
                    key={index}
                    d={zPath(z)}
                    transform={`rotate(${z.rotate} ${z.x + z.s/2} ${z.y + z.s/2})`}
                    opacity={z.opacity}
                  />
                );
              })}
            </g>
          </>
        )}

        {/* ─ キャラ本体(共通) ─ */}
        {/* 尾: 体の右下から斜め後方へ長く伸びる(シマエナガの長い尾) */}
        <path d="M55 72 L84 86 L82 93 L52 81 Z" fill="#3A3A3C" />
        {/* 足: 体の下にちょこんと2本(左右対称・オレンジ) */}
        <path
          d="M45 82 L45 90 M42 91 L45 90 L48 91"
          fill="none"
          stroke="#FF9500"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M55 82 L55 90 M52 91 L55 90 L58 91"
          fill="none"
          stroke="#FF9500"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* ふわふわの白い体(＝頭一体型の丸) */}
        <ellipse cx={50} cy={52} rx={30} ry={31} fill="#FFFFFF" />
        {/* 翼: 体の右側にうっすら黒。肩(WING_ORIGIN)を軸に回せるよう g で包む */}
        <g>
          <ellipse cx={70} cy={60} rx={9} ry={16} fill="#D8D8DC" />
        </g>

        {/* 黒目2点 */}
        {isSleep ? (
          <>
            {/* 閉じた目 */}
            <path
              d="M39 48 Q42 51 45 48"
              fill="none"
              stroke="#1C1C1E"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M55 48 Q58 51 61 48"
              fill="none"
              stroke="#1C1C1E"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            <circle cx={42} cy={48} r={3} fill="#1C1C1E" />
            <circle cx={58} cy={48} r={3} fill="#1C1C1E" />
          </>
        )}

        {/* 三角くちばし(オレンジ) */}
        <path
          d={"M47 54 L53 54 L50 60 Z"}
          fill="#FF9500"
        />
        {/* ほっぺ(うっすらピンク) */}
        <circle cx={36} cy={56} r={3.5} fill="rgba(255,150,170,0.45)" />
        <circle cx={64} cy={56} r={3.5} fill="rgba(255,150,170,0.45)" />
      </g>
    </svg>
  );
}