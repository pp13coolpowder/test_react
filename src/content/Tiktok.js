function Tiktok(props) {
  const { ttank } = props;
  return (
    <div className="tiktok">
      <iframe
        title={ttank.a}
        width="440"
        height="758"
        src={ttank.b}
      ></iframe>
    </div>
  );
}

export default Tiktok;
