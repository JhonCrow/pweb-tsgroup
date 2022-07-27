import facebookIcon from './Icons/f.png';
import instagramIcon from './Icons/i.png';
import twitterIcon from './Icons/t.png';
import './footer.css';


export default function Footer() {
    return (
        <>
            <footer className='footerContainer'>
                <div>
                    <h1>Contáctanos</h1>
                    <p>TsGroup University <br></br> 6043523787<br></br> comunicaciones@tsgroup.co</p>
                </div>
                <div>
                    <h1>Ubicación</h1>
                    <p>Carrera 43A # 14-109 EDIFICIO NOVA TEMPO Of. 313<br></br>Medellín-Colombia<br></br></p>
                </div>
            </footer>
            <div className='bottomContainer'>
                <p>@2020 TsGroup | TODOS LOS DERECHOS RESERVADOS</p>
                <div className='media'>
                    <a href='https://www.facebook.com/ParqueExplora/' target='blank'><img src={facebookIcon} alt='Not found' height='15' /></a>
                    <a href='https://www.instagram.com/parqueexplora/' target='blank'><img src={instagramIcon} alt='Not found' height='15' /></a>
                    <a href='https://twitter.com/parqueexplora' target='blank'><img src={twitterIcon} alt='Not found' height='15' /></a>
                </div>
            </div>
        </>
    );
};