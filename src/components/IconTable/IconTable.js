import styles from './IconTable.module.scss';
import { useSelector } from 'react-redux';
import { getAllIcons } from '../../redux/store';

const IconTable = props => {

  const icons = useSelector(getAllIcons);

  const handleIconClick = (iconId) => {
  props.setIcon(iconId);
  props.setShowIconsList(false);
  };

  return (
    <div className={styles.iconTable}>
      {Array.from({ length: 4 }).map((_, rowIndex) => (
        <div className={styles.iconRow} key={rowIndex}>
          {Array.from({ length: 4 }).map((_, colIndex) => {
            const iconIndex = rowIndex * 4 + colIndex;
            const icon = icons[iconIndex];

            return (
              <div key={colIndex} className={styles.iconCell} onClick={() => handleIconClick(icon.id)}>
                <span className={'fa fa-' + icon.iconName} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};


export default IconTable;