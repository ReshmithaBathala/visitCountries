import './index.css'

const CountryItem = props => {
  const {countryDetails, removeCountry} = props
  const {imageUrl, id, name} = countryDetails
  const onClickremoveCountry = () => {
    removeCountry(id)
  }
  return (
    <li className="country-flag-list-container">
      <img src={imageUrl} alt="thumbnail" className="flag-image" />
      <div className="name-remove-container">
        <p className="name">{name}</p>
        <button
          type="button"
          className="remove-button"
          onClick={onClickremoveCountry}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryItem
