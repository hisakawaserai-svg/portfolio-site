import type { ComponentPropsWithoutRef } from "react";
import styles from './Touchable.module.css';

type TouchableProps = ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode;
}

export default function Touchable({children, className, ...props}: TouchableProps) {
  return(
    <button type='button' className={`${styles.button} ${className ?? ''}`} {...props} >
      {children}
    </button>
  )
}