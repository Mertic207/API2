function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#005BAC',
      padding: '10px 20px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    }}>
      <div style={{ fontWeight: 'bold', fontSize: 20 }}>
        Tipsport Webovka
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#" style={linkStyle}>Zápasy</a>
        <a href="#" style={linkStyle}>Sázky</a>
        <a href="#" style={linkStyle}>Můj účet</a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
};

export default Navbar;
