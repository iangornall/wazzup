import React from 'react';
let WazzupForm = ({addWazzup, newWazzupText, newWazzupAuthor, resetWazzup, updateWazzupText, updateWazzupAuthor}) => (
  <form
    className="wazzup-form"
    onSubmit={
      event => {
        event.preventDefault();
        let newWazzup = {
          id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
          author: newWazzupAuthor,
          content: newWazzupText
        }
        addWazzup(newWazzup);
        resetWazzup();
      }
    }
  >
    <h3 className="wazzup-form-title">Wazzup?</h3>,
    <textarea
      className="wazzup-form-text"
      placeholder="Wazzzzzzup????"
      rows="5"
      name="wazzup-text"
      value={newWazzupText}
      onChange={event => {
        updateWazzupText(event.target.value);
      }}
    />
    <input
      className="wazzup-form-author"
      placeholder="Who are you?"
      name="wazzup-author"
      value={newWazzupAuthor}
      onChange={event => {
        updateWazzupAuthor(event.target.value);
      }}
    />
    <button className="wazzup-form-submit" type="submit">Wazzup</button>
  </form>
);

export default WazzupForm;