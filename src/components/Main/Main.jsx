import { useState } from 'react'
import "./Main.css"
import logo from "../constants/logo bookshop.svg"
import search from "../constants/search-refraction.svg"
import alarm from "../constants/alarm.svg"
import userlogo from "../constants/user.svg"
import AddBook from '../AddBook/AddBook'

function Main() {

    const [activeModal, setactiveModal] = useState(false)

    const onActive = () => {
        setactiveModal(!activeModal ? true : false);
    };

    const CloseModal = (e) => {
        return e(false);
    };

    return (
        <div>
            <AddBook activeModal={activeModal} close={() => CloseModal(setactiveModal)} />
            <div className='main-head-content'>
                <nav className='d-flex justify-content-between'>
                    <div className='d-flex gap-5'>
                        <div><img src={logo} alt='logo' /></div>
                        <div className='d-flex align-items-center gap-2'>
                            <img height={24} src={search} alt='search logo' />
                            <input className='input-search -control' placeholder='Search for any training you want ' />
                        </div>
                    </div>
                    <div className='d-flex gap-5'>
                        <div><img src={alarm} alt='alarm' /></div>
                        <div><img className='rounded-circle' src={userlogo} alt='userlogo' /></div>
                    </div>
                </nav>
            </div>
            <div className='main-body-content'>
                <div>
                    <div className='d-flex justify-content-between'>
                        <div className='w-50 mb-text'>You’ve got <span>7 book</span></div>
                        <div className='w-50 d-flex gap-4'>
                            <input className='form-control' placeholder='Enter your name' />
                            <button onClick={() => onActive()} className='w-75 btn btn-purple text-light'>+ Create a book</button>
                        </div>
                    </div>
                    <div className='text-light mb-text2'>Your task today</div>
                </div>
                <div className='w-100'>
                    <div className='row row-cols-3'>
                        <div className='mb-card-p'>
                            <div className='mb-card '>
                                <div className='mb-card-text-h'>Raspberry Pi User Guide</div>
                                <div className='mb-card-text-m h-50'>lorem30 khlorem30 khlore30 kh jsb jd jsd jsd sdj dj dj ds d dj d d jd sj dj</div>
                                <div className='d-flex justify-content-between mt-3'>
                                    <div>Eben Upton: 2012-year</div>
                                    <span>211 pages</span>
                                </div>
                            </div>
                        </div>
                        <div className='mb-card-p'>
                            <div className='mb-card '>
                                <div className='mb-card-text-h'>Raspberry Pi User Guide</div>
                                <div className='mb-card-text-m h-50'>lorem30 khlorem30 khlore30 kh jsb jd jsd jsd sdj dj dj ds d dj d d jd sj dj</div>
                                <div className='d-flex justify-content-between mt-3'>
                                    <div>Eben Upton: 2012-year</div>
                                    <span>211 pages</span>
                                </div>
                            </div>
                        </div>
                        <div className='mb-card-p'>
                            <div className='mb-card '>
                                <div className='mb-card-text-h'>Raspberry Pi User Guide</div>
                                <div className='mb-card-text-m h-50'>lorem30 khlorem30 khlore30 kh jsb jd jsd jsd sdj dj dj ds d dj d d jd sj dj</div>
                                <div className='d-flex justify-content-between mt-3'>
                                    <div>Eben Upton: 2012-year</div>
                                    <span>211 pages</span>
                                </div>
                            </div>
                        </div>
                        <div className='mb-card-p'>
                            <div className='mb-card '>
                                <div className='mb-card-text-h'>Raspberry Pi User Guide</div>
                                <div className='mb-card-text-m h-50'>lorem30 khlorem30 khlore30 kh jsb jd jsd jsd sdj dj dj ds d dj d d jd sj dj</div>
                                <div className='d-flex justify-content-between mt-3'>
                                    <div>Eben Upton: 2012-year</div>
                                    <span>211 pages</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Main