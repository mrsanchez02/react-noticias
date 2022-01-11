import React from 'react'
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'
import PropTypes from 'prop-types';

const Formulario = ({setCategory}) => {


    const OPTIONS = [
        {value: 'general',label: 'General'},
        {value: 'business',label: 'Negocios'},
        {value: 'entertainment',label: 'Entretenimiento'},
        {value: 'health',label: 'Salud'},
        {value: 'science',label: 'Ciencia'},
        {value: 'sports',label: 'Deportes'},
        {value: 'technology',label: 'Tecnologia'}
    ];

    // Utilizar custom hook.
    const [ category, SelectNoticias ] = useSelect('general',OPTIONS);

    const handleSubmit = e => {
        e.preventDefault();
        setCategory(category);
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={handleSubmit}>
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                    <SelectNoticias/>
                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            className={`btn-large darken2 ${styles.btn_block}`}
                            value="Buscar" 
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

Formulario.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default Formulario;