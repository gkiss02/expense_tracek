import styles from './ExpenseForm.module.css'

import {useState} from 'react'

function ExpenseForm(props) {
    let validDate = true;
    function formHandler (event) {
        event.preventDefault();

        const regex = /^(19|20)\d\d\.(0[1-9]|1[0-2])\.(0[1-9]|[12]\d|3[01])\.$/;
        if (!regex.test(date)) {
            validDate = false;
            setDate("invalid")
        }

        if (event.target[0].value != "" && event.target[1].value != "" && event.target[2].value != "") {
            const newExpense = new Array();
            for (let i = 0; i < 3; i++) {
                newExpense.push(event.target[i].value);
            }
            props.func(newExpense);
            event.target.reset();
            setTitle(" ");
            setPrice(" ");
            setDate(" ");
        } 

        if (title == " ") setTitle()
        if (price == " ") setPrice()
        if (date == " ") setDate()
    }

    const [title, setTitle] = useState(" ");
    const [price, setPrice] = useState(" ");
    const [date, setDate] = useState(" ");

    function titleChangeHandler(event) {
        setTitle(event.target.value)
    }

    function priceChangeHandler(event) {
        setPrice(event.target.value)
    }

    function dateChangeHandler(event) {
        setDate(event.target.value)
    }
    
    return (
        <div className={styles.container}>
            <form className={styles["grid-container"]} onSubmit={formHandler}>
                <div className={styles.title}>
                    <label for="title">Title</label><br></br>
                    <input type="text" className={`${styles.field} ${!title && styles.invalid}`} onChange={titleChangeHandler}/>
                    <p className={`${styles['required-text']} ${!title ? styles.visible : styles.hidden}`}>Field is required</p>
                </div>
                <div className={styles.price}>
                    <label for="price">Price</label><br></br>
                    <input type="number" className={`${styles.field} ${!price && styles.invalid}`} onChange={priceChangeHandler}></input>
                    <p className={`${styles['required-text']} ${!price ? styles.visible : styles.hidden}`}>Field is required</p>
                </div>
                <div className={styles.date}>
                    <label for="date">Date</label><br></br>
                    <input type="text" className={`${styles.field} ${!date && styles.invalid}`} onChange={dateChangeHandler}></input>
                    <p className={`${styles['required-text']} ${!date ? styles.visible : styles.hidden} ${date != "invalid" ? styles["not-hide"] : styles.hide}`}>Field is required</p>
                    <p className={`${styles['required-text']} ${date == "invalid" ? styles["not-hide"] : styles.hide}`}>Date should be yyyy.mm.dd.</p>
               </div>
               <div className={styles.submit}>
                    <input type="submit" value="Add Expense" className={styles["submit-button"]}></input>
               </div>
            </form>
        </div>
    )
}

export default ExpenseForm;