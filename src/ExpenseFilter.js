import styles from "./ExpenseFilter.module.css"

function ExpenseFilter (props) {
    function yearChangeHandler (event) {
        props.func(event.target.value);
    }
    
    return (
        <div className={styles["year-selector"]}>
            <p className={styles["filter-title"]}>Filter by year</p>
            <select name="year" className={styles.year} onChange={yearChangeHandler}>
              <option value="all"></option>
              {props.years.map(item =>
                <option value={item}>{item}</option>
              )}
            </select>
          </div>
    )
}

export default ExpenseFilter;