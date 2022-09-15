const PrintComponent = (props: any) => {
  return (
    <div
      className="mt-10 p-2 unreset bg-white text-black max-h-screen overflow-auto"
      dangerouslySetInnerHTML={{ __html: props.keterangan }}
    />
  );
};

export default PrintComponent;
