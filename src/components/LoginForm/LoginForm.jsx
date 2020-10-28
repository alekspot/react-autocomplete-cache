import React from 'react';

export const LoginForm = () => {
    return (
        <div className="form">
            <label className="label form__item" htmlFor=""> 
                <span className="label__text">Логин</span> 
                <input className="form__input" type="text"/>
            </label>
       

            <label className="label form__item" htmlFor=""> 
                <span className="label__text">Пароль</span>
                <input className="form__input" type="text"/>
            </label> 

            <button className="form__item btn">ВОЙТИ</button>
        </div>

    );
};