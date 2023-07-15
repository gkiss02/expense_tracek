import styles from './ChartItem.module.css'

function sum (arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += Number(arr[i].price);
    }
    return s;
}

function ChartItem (props) {
    let sumMonth = sum(props.filteredArr);
    return (
        <div className={`${styles.container} ${styles.animacio}`}title={'You spent ' + sumMonth + ' dollars this month'}>
            <div className={styles.bar}>
                {sumMonth > 0 &&
                <div className={styles.fill} style={sumMonth <= 1000 ? {height: sumMonth / 1000 * 100} : {height: '100px', backgroundColor: 'red'}}>
                </div>
                }
            </div>
            <p className={styles['month-name']}>{props.month}</p>
        </div>
    )
}

export default ChartItem;