function youtube(props) {
  const { ytank } = props;
  return (
    <div>
      <iframe title={ytank.a} width="560" height="315" src={ytank.b}></iframe>
    </div>
  );
}

export default youtube;
