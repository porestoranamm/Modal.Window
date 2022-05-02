import React, {useContext} from "react";
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({ todo, index, onChange }) {
    const {} = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }
    return (
        <li style={styles.li}>
            <span className={classes.join('')}>
                <input type="checkbox"
                checked={todo.completed} 
                style={styles.input} 
                onChange={() => onChange(todo.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
        
        <button className='rm'>&times;</button>
        </li>
    )
}

TodoItem.PropTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default TodoItem