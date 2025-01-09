import pokeball from '../images/pokeball.webp'

function Header() {
  return (
    <div className="bg-danger p-3">
      <div className='d-flex'>
		<img style={{width: '50px', height: '50px'}} src={pokeball} alt="pokeball" />
        <h1 className="mx-3 text-white">Pokedex</h1>
      </div>
      <div className="d-flex" style={{ height: "50px" }}>
        <input className="mx-3 rounded-pill" placeholder="Search" />
        <select
          name="type"
          id="type"
          className="mx-3 rounded-pill"
          placeholder="Type"
        >
          <option value="" key=""></option>
        </select>
        <select
          name="limit"
          id="limit"
          className="mx-3 rounded-pill"
          placeholder="Limit"
        >
          <option value="25" key="25"></option>
          <option value="50" key="50" selected></option>
          <option value="100" key="100"></option>
        </select>
      </div>
    </div>
  );
}

export default Header;
