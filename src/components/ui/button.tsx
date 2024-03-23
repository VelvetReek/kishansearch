import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none flex items-center"
      )}
    >
      {children}
    </button>
  );
}
