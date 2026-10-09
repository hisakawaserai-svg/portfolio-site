import styles from './App.module.css';
import Profile from './components/Profile/Profile';
import TableOfContentsWrapper from './components/TableOfContentsWrapper/TableOfContentsWrapper';

function App() {
  return (
    <div className={styles.container}>
      <TableOfContentsWrapper />
      <Profile />
    </div>
  )
}

export default App