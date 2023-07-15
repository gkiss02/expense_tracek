import styles from './Chart.module.css'

import ChartItem from './ChartItem'

function Chart(props) {
    return (
        <div className={`${styles.container} ${props.year == 'all' ? styles.hide : styles.visible}`}>
            {props.months.map(month => 
            <ChartItem month = {month} filteredArr = {props.expenseArr.filter(item => props.months[item.date.getMonth()] == month)}/>
            )}
        </div>
    )
}

export default Chart;