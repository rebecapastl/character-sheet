//imports
//when in the client side, use import syntax
import React from 'react';
import Card from 'react-bootstrap/Card';

class Header extends React.Component {

    render() {
        
        //render header
        return <>
            
            <header>
                <Card className="card bg-dark text-white">
                    <Card.Img src="./images/banner.png" alt="Character Sheet Banner" />
                    <Card.ImgOverlay>
                        <Card.Title><h2 className='header-h2 text-danger opacity-4'>Character Sheet</h2></Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <small className='artist text-right'>Photo by Quốc Bảo from <a className='text-muted' href="https://www.pexels.com/photo/woman-wearing-elf-ear-and-floral-headdress-2034541/">Pexels</a></small>
            </header>
            
        </>;
    }

}

export default Header;