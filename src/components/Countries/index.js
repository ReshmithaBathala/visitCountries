import './index.css'

const Countries = props => {
  const {country, visitCountry, isCountryVisited} = props
  const {name, id} = country
  const onVisitCountry = () => {
    visitCountry(id)
  }

  return (
    <li className="country-item">
      <p className="country-heading">{name}</p>
      {isCountryVisited ? (
        <p className="visit-p">Visited</p>
      ) : (
        <button type="button" className="visit-btn" onClick={onVisitCountry}>
          Visit
        </button>
      )}
    </li>
  )
}
export default Countries
