import {Form} from './PhonebookInput.styled'

export const PhonebookInput = ({titleName, titleNumber, buttonTitle, name, number, onChange, onSubmit}) => {
    return <div>
        <Form onSubmit={onSubmit}>
        <h2>{titleName}</h2>
        <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. 
          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          </label>
          <h2>{titleNumber}</h2>
          <label>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={onChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          </label>
          <button type="submit">{buttonTitle}</button>
          </Form>
    </div>
}