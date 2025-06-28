import { useState, Suspense, lazy } from 'react';
const SlowComponent = lazy(() => import('./SlowComponent'))
const LatestReact = () => {

  const [show, setShow] = useState(false);

  return (
    <section>
      <h4>Items Below</h4>

      <button onClick={() => setShow(!show)} className='btn'>toggle</button>
      {show &&
        <Suspense fallback={<h4>Loading...</h4>}>
          <SlowComponent />
        </Suspense>
      }

    </section>
  );
};
export default LatestReact;
