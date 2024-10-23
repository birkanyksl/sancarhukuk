import { Link } from '@/navigation';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import practiceDetails from '@/data/practiceDetails';


const Practice = () => {
  return (
    <div className="container mx-auto p-8 bg-slate-50 my-10 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {Object.keys(practiceDetails).map((practice) => (
          <Link
            key={practice} 
            href={`/practice/${practice}`}
            className="group p-4 flex items-center justify-between text-base font-medium relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-gray-300 hover:before:bg-color6 before:transition-all before:duration-500"
          >
            {practiceDetails[practice].title}
            <FontAwesomeIcon icon={faAngleRight} className='w-4 h-4 group-hover:text-color6 transition-all duration-500' />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Practice;
