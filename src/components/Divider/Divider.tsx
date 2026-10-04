import styles from './Divider.module.css'

type DividerProps = {
  isThin?: boolean;
}

export default function Divider({isThin}: DividerProps) {
  if (isThin) {
    return(
      <div className={styles.thinDivider} />
    )
  }
  return(
    <div className={styles.divider} />
  );
}