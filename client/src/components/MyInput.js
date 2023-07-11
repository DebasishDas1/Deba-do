import styles from './component.module.css';

const MyInput = ({ type = 'text', name, value, action, placeholder }) => {
    return (
        <div className={styles.myInput} >
            <input
                type={type}
                value={value}
                onChange={action}
                placeholder={placeholder}
            />
        </div>
    );
};

export default MyInput;