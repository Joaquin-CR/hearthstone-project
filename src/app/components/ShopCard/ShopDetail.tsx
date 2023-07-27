import Image from 'next/image';
import LeftArrow from '../../../../public/images/arrowLeftIcon.svg';
import Clock from '../../../../public/images/clockIcon.svg';
import MapPin from '../../../../public/images/mapPinIcon.svg';
import NetIcon from '../../../../public/images/netIcon.svg';
import Phone from '../../../../public/images/phoneIcon.svg';

type DetailShopProps = {
  name: string;
  address: string;
  open: string;
  schedule: string;
  phone: string;
  net: string;
  clickBack: () => void;
};

export default function ShopDetail({
  name,
  address,
  open,
  schedule,
  phone,
  net,
  clickBack,
}: DetailShopProps) {
  return (
    <>
      <div className="text-white font-AclonicaR">
        <div className="flex">
          <Image
            className="hidden md:block"
            src={LeftArrow}
            alt={'Lef Arrow Icon'}
            onClick={clickBack}
          />
          <p className="text-2xl mx-3">{name}</p>
        </div>
        <div className="flex my-14">
          <Image src={MapPin} alt={'Lef Arrow Icon'} />
          <p className="mx-3">{address}</p>
        </div>
        <div className="flex">
          <Image src={Clock} alt={'Lef Arrow Icon'} />
          <p
            className={`${
              open == 'Open' ? 'text-colorText-Sadows' : 'text-gold'
            } mx-3`}
          >
            {open}
          </p>
        </div>
        <div className="flex mt-6">
          <table className="mx-8">
            <tbody>
              <tr>
                <td>
                  <p>Monday</p>
                </td>
                <td>
                  <p className="mx-6">11AM-6PM</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Tuesday</p>
                </td>
                <td>
                  <p className="mx-6">11AM-6PM</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Wednesday</p>
                </td>
                <td>
                  <p className="mx-6">11AM-6PM</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Thursday</p>
                </td>
                <td>
                  <p className="mx-6">11AM-6PM</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Friday</p>
                </td>
                <td>
                  <p className="mx-6">11AM-6PM</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Saturday</p>
                </td>
                <td>
                  <p className="mx-6">11AM-6PM</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Sunday</p>
                </td>
                <td>
                  <p className="mx-6">12AM-4PM</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex mt-12">
          <Image src={NetIcon} alt={'Lef Arrow Icon'} />
          <p className="mx-3">{net}</p>
        </div>
        <div className="flex mt-12">
          <Image src={Phone} alt={'Lef Arrow Icon'} />
          <p className="mx-3">{phone}</p>
        </div>
      </div>
    </>
  );
}
