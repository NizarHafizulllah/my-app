import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title: string;
  description: string;
}

const CardContent = (props: CardProps) => {
  const { children, title } = props;

  return (
    <div className="my-10 justify-center bg-slate-600 py-5 shadow-lg rounded-lg shadow-slate-600 drop-shadow-lg">
      <div className="w-full px-5 border-b border-dashed pb-3">
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="text-sm text-white/40">{props.description}</p>
      </div>
      <div className="py-4 px-5 bg-black/30 rounded-b-lg text-white backdrop-blur-2">
        {children}
      </div>
      <div className="flex flex-col items-center pt-4 border-t border-dashed"></div>
    </div>
  );
};

export default CardContent;
