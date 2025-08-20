import { PropsWithChildren } from 'react';

// type ComponentProps = {
//   name: string;
//   id: number;
//   children?: React.ReactNode;
// };

type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h2>Name:{name}</h2>
      <h2>Id:{id}</h2>
      <h2>Children:{children}</h2>
    </div>
  );
}
export default Component;
