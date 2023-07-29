export default function PageHeading(prop) {
  const { filtered, selectedSource } = prop;
  return (
    <div className="container__heading">
      <h3 className="el-heading">
        Total {filtered.length} {selectedSource === "all" ? "" : selectedSource}{" "}
        blogs has been published till now.
      </h3>
    </div>
  );
}
