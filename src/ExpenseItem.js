import styles from './ExpenseItem.module.css'

function ExpenseItem (props) {
    return (
        <div className={styles.container}>
            <div className={styles.date}>
                <p>{props.date.getFullYear()}</p>
                <p>{props.months[props.date.getMonth()]}</p>
                <p>{props.date.getDate()}</p>
            </div>
            <div className={styles.name}>
                <p>{props.title}</p>
            </div>
            <div className={styles.price}>
                <p>${props.price}</p>
            </div>
        </div>
    )
}

export default ExpenseItem;