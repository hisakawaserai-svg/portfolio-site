import {useState} from'react';

import styles from './App.module.css';
import Profile from './components/Profile/Profile';
import TableOfContentsWrapper from './components/TableOfContentsWrapper/TableOfContentsWrapper';

function App() {
  const [actionId, setActionId] = useState<string>('');
  return (
    <div className={styles.container}>
      <TableOfContentsWrapper actionId={actionId} />
      <Profile setActionId={setActionId} />
    </div>
  )
}

export default App