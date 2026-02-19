export const ButtonSecondary = ({ children }) => {
  return <a className="font-bold text-sm leading-6  text-foreground">{children}</a>;
};
export const ButtonPrimary = ({ children }) => {
  return <a className=" bg-foreground px-6 text-sm py-3 leading-6 font-semibold rounded-3xl  hover:bg-muted text-background">
    {children}
  </a>;
};
export const ButtonPrimary2 = ({ children }) => {
  return <a className=" bg-foreground px-5 text-sm py-2 leading-6 font-semibold rounded-3xl  hover:bg-muted text-background">
    {children}
  </a>;
};
