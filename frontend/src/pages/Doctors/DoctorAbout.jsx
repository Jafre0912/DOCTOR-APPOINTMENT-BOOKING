
import {formateDate} from "../../utils/formateDate"

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Jafar Aalam
          </span>
        </h3>
        <p className="text__para">
          Jafar Aalam is a highly skilled surgeon dedicated to enhancing patient well-being. With years of experience, 
          he specializes in advanced surgical procedures, combining expertise with compassion to provide optimal care. Known 
          for his meticulous approach, Dr. Khan consistently achieves exceptional outcomes, earning trust and respect within 
          the medical community.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
              {formateDate('09-01-2015')} - {formateDate('08-01-2017')}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Global Hospital, Mumbai.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate('10-07-2019')} - {formateDate('11-01-2023')}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Global Hospital, Mumbai.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
        <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
            {formateDate('09-01-2015')} - {formateDate('08-01-2017')}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>

              <p className="text-[14px] leading-5 font-medium text-textColor">
              Global Hospital, Mumbai.
            </p>
        </li>
        <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
            {formateDate('09-01-2015')} - {formateDate('08-01-2017')}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>

              <p className="text-[14px] leading-5 font-medium text-textColor">
              Global Hospital, Mumbai.
            </p>
        </li>
    </ul>    
    </div>


    </div>
  );
};

export default DoctorAbout;
