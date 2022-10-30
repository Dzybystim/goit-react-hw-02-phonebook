export const Contacts = ({contacts, title}) => {

    return <div>
    <h2>{title}</h2>
    <input 
    type="text"/>
    <ul>
    {contacts.map(contact => {
    return <li key={contact.id}>{contact.text}: {contact.tel}</li>}
    )}
    </ul>
    </div>
}