interface ButtonProp {
  name: string;
  type: string;
  fungsi: any;
}

const Button = (props: ButtonProp) => {
  let namaClass = '';
  if (props.type == 'primary') {
    namaClass =
      namaClass + ' shadow-green-400 border-green-400 hover:bg-green-400 ';
  } else if (props.type == 'danger') {
    namaClass =
      namaClass + ' shadow-rose-500 border-rose-500 hover:bg-rose-500';
  } else if (props.type == 'info') {
    namaClass =
      namaClass + ' bg-indigo-500 shadow-black hover:bg-indigo-500/80';
  } else if (props.type == 'warning') {
    namaClass =
      namaClass + ' shadow-yellow-500 border-yellow-500 hover:bg-yellow-500';
  } else {
    namaClass =
      namaClass + ' shadow-slate-400 border-slate-400 hover:bg-slate-400';
  }

  return (
    <button
      className={`rounded-md w-full px-5 py-2 my-2 font-semibold shadow-sm text-white ${namaClass}`}
      onClick={props.fungsi}
    >
      {props.name}
    </button>
  );
};

export default Button;
