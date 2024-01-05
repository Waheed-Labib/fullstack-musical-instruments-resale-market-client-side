import React from 'react';

const Filter = ({ setAreaFilter, setTypeFilter }) => {

    return (
        <div className='mt-3 w-1/2'>
            <div className='flex flex-wrap items-center justify-between mb-3'>
                <p className='text-start font-semibold'>Area : </p>

                <div onClick={() => setAreaFilter('asian')} className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                        <input type="radio" name="radio-area" className="radio h-4 w-4 border-base-100 checked:bg-accent" />
                        <span className="label-text text-base-100">Asian</span>
                    </label>
                </div>

                <div onClick={() => setAreaFilter('western')} className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                        <input type="radio" name="radio-area" className="radio h-4 w-4 border-base-100 checked:bg-accent" />
                        <span className="label-text text-base-100">Western</span>

                    </label>
                </div>

                <div onClick={() => setAreaFilter('mixed origin')} className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                        <input type="radio" name="radio-area" className="radio h-4 w-4 border-base-100 checked:bg-accent" />
                        <span className="label-text text-base-100">Mixed Origin</span>

                    </label>
                </div>

                <div onClick={() => setAreaFilter('all')} className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                        <input type="radio" name="radio-area" className="radio h-4 w-4 border-base-100 checked:bg-accent" />
                        <span className="label-text text-base-100">Show All &nbsp;(default)</span>

                    </label>
                </div>


            </div>

            <div className='flex flex-wrap items-center justify-between'>
                <p className='text-start font-semibold'>Instrument Type : </p>

                <div onClick={() => setTypeFilter('percussion')} className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                        <input type="radio" name="radio-type" className="radio h-4 w-4 border-base-100 checked:bg-accent" />
                        <span className="label-text text-base-100">Percussion</span>

                    </label>
                </div>
                <div onClick={() => setTypeFilter('stringed')} className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                        <input type="radio" name="radio-type" className="radio h-4 w-4 border-base-100 checked:bg-accent" />
                        <span className="label-text text-base-100">Stringed</span>

                    </label>
                </div>
                <div onClick={() => setTypeFilter('wind')} className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                        <input type="radio" name="radio-type" className="radio h-4 w-4 border-base-100 checked:bg-accent" />
                        <span className="label-text text-base-100">Wind</span>

                    </label>
                </div>
                <div onClick={() => setTypeFilter('keyboard')} className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                        <input type="radio" name="radio-type" className="radio h-4 w-4 border-base-100 checked:bg-accent" />
                        <span className="label-text text-base-100">Keyboard</span>

                    </label>
                </div>

                <div onClick={() => setTypeFilter('all')} className="form-control">
                    <label className="label justify-start gap-2 cursor-pointer">
                        <input type="radio" name="radio-type" className="radio h-4 w-4 border-base-100 checked:bg-accent" />
                        <span className="label-text text-base-100">Show All &nbsp;(default)</span>

                    </label>
                </div>
            </div>

        </div>
    );
};

export default Filter;