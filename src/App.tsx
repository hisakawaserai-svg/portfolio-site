import styles from './App.module.css';
import Profile from './components/Profile/Profile';
import TableOfContents from './components/TableOfContents/TableOfContents';

function App() {
  return (
    <div className={styles.container}>
      <TableOfContents />
      <Profile />
    </div>
  )
}

export default App