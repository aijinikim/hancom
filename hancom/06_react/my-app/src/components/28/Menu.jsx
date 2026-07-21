const Menu = () => {
    const menuItems = ['홈', '소개', '서비스']
    return (
        <>
            <nav style={{
                padding:'12px 32px'
            }}>
            {menuItems.map((item) => (
                <a key={item} href="#" style={{
                    color:"orange",
                    fontSize:"20px",
                    margin:"20px",
                    padding:"10px",
                    textDecoration:"none"
                }}>
                    {item}
                </a>
            ))}
            </nav>
        </>
    )
}
export default Menu