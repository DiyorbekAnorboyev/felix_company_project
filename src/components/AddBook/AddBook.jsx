import React from 'react'
import "./AddBook.css"
import closeIcon from "../constants/x-icon.svg"

function AddBook({ activeModal, close }) {
    return (
        <div>
            <div className={activeModal ? "showProduct" : "hideProduct"}>
                <div className='add-main-bg'>
                    <div className='d-flex justify-content-between'>
                        <div className='add-b-txt'>Create a book</div>
                        <div onClick={() => close()}><img src={closeIcon} alt='closeIcon' /></div>
                    </div>
                    <div className='mt-3'>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" placeholder='Enter your title' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Author</label>
                            <input type="text" className="form-control" placeholder='Enter your author' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Cover</label>
                            <input type="text" className="form-control" placeholder='Enter your cover' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Published</label>
                            <input type="text" className="form-control" placeholder='Enter your published' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Pages</label>
                            <input type="text" className="form-control" placeholder='Enter your pages' />
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <button onClick={() => close()} className='mt-3 w-100 btn btn-outline-purple'>Close</button>
                        <button className='mt-3 w-100 btn btn-purple text-light'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBook