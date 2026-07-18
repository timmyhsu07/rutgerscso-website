/* Soft cloud backdrop: pastel blobs (green / coral / cream / blue) and a
   couple of gentle dot clusters drifting behind the hero, like the sky
   illustration. Fixed percent positions so SSR/client markup match. */

const BLOCKS = [
  { cls: "wash cloud--green", style: { left: "1%", top: "6%", width: 168, height: 104 } },
  { cls: "wash cloud--coral", style: { right: "7%", top: "9%", width: 132, height: 96 } },
  { cls: "wash cloud--cream", style: { left: "42%", top: "1%", width: 128, height: 78 } },
  { cls: "ht ht--dots", style: { left: "22%", bottom: "9%", width: 96, height: 74 } },
  { cls: "wash cloud--blue", style: { right: "2%", bottom: "13%", width: 150, height: 100 } },
  { cls: "wash cloud--green", style: { left: "5%", bottom: "3%", width: 118, height: 76 } },
  { cls: "ht ht--dots", style: { right: "24%", top: "42%", width: 84, height: 64 } },
  { cls: "wash cloud--coral", style: { left: "34%", bottom: "6%", width: 96, height: 66 } },
];

export default function Collage() {
  return (
    <div className="collage" aria-hidden="true">
      {BLOCKS.map((b, i) => (
        <span key={i} className={`ht ${b.cls}`} style={b.style} />
      ))}
      <span className="sun" style={{ right: "14%", top: "30%", width: 40, height: 40 }} />
    </div>
  );
}
