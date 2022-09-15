export default function Likecount({ liked }) {
  return (
    <div className={liked > 0 ? "d-flex align-items-center gap-1" : "d-non"}>
      <span style={{ color: "#BOB388" }}> {liked} ลบ</span>
    </div>
  );
}
