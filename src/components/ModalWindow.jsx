import './ModalWindow.scss'
import Input from './Input'
import Button from './Button'
import Icon from './Icon';
import React, { createContext, useContext } from 'react';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const todayDate = getTodayDate();                
  const upcomingDate = getTodayDate('upcoming'); 

  return (
    <DateContext.Provider value={{todayDate, upcomingDate}}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => useContext(DateContext);

    function getTodayDate(type) {
        let year = new Date().getFullYear();
        let day;
        let month = String(new Date().getMonth() + 1).padStart(2, '0');
        
        if (type ==='upcoming'){
            day = String(new Date().getDate() + 14).padStart(2, '0');
        } else {
            day = String(new Date().getDate()).padStart(2, '0');
        }
        return `${year}-${month}-${day}`
    }


export default function ModalWindow({ onClose, title, setTitle, description, setDescription, dueDate, setDueDate, onSave }) {
    
    return (
        <dialog className="modal-window">
            <div className="modal-content">
                <div className="modal__header">
                    <h2>Create a Task:</h2>
                    <Icon type='close' onClick={onClose}>&times;</Icon>
                </div>
                <Input type='text' kind='_title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Input a title' ></Input>
                <textarea className='input_description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Input a description'></textarea>
                <p>Choose a due date</p>
                <Input minDate={getTodayDate()} type='date' kind='_date' value={dueDate} onChange={(e) => setDueDate(e.target.value)}></Input>
                <div className="modal__footer">
                <Button kind='_save-changes' onClick={onSave}>Save changes</Button>
                </div>
            </div>
        </dialog>
    )
}