// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { ReactLib } from '@react-nexus/react-lib';

export function App() {
  return (
    <div>
      <NxWelcome title="react-demo" />
      <ReactLib />
    </div>
  );
}

export default App;
