import React from 'react';

export const RegisterForm = () => {
    return (
        <div className="form">
            <label className="label form__item" htmlFor=""> 
                <span className="label__text">ФИО</span> 
                <input className="form__input" type="text"/>
            </label>
       

            <label className="label form__item" htmlFor=""> 
                <span className="label__text">email</span>
                <input className="form__input" type="text"/>
            </label> 
            <label className="label form__item" htmlFor=""> 
                <span className="label__text">Телефон</span>
                <input className="form__input" type="text"/>
            </label> 
            
            <label className="label form__item" htmlFor=""> 
                <span className="label__text">Город</span>
                <input className="form__input" type="text"/>
            </label> 
            
            <label className="label form__item" htmlFor=""> 
                <span className="label__text">Страна</span>
                <input className="form__input" type="text"/>
            </label> 

            <label className="label form__item" htmlFor=""> 
                <span className="label__text">ОС мобильного телефона</span>
                <input className="form__input" type="text"/>
            </label> 
            <button className="form__item btn">Зарегистрироваться</button>
        </div>

    );
};