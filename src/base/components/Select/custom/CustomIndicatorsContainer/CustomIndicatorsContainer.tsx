import { Icon } from "../../../Icon";
import select_arrow from '../../../../../assets/select_arrow.svg'
import styles from './styles/styles.module.scss'

export const CustomIndicatorsContainer = (
) => {
  return (
    <span
      className={styles.SIndicator}
    >
      <Icon icon={select_arrow}/>
    </span>
  );
};