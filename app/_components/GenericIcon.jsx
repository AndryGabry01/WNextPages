import { IoHome } from "react-icons/io5";
import { GrCircleInformation } from "react-icons/gr";
import { FaBook } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import Image from "next/image";

function GenericIcon({ iconName = null, useReactIcon = true, src = null, className = null, size = { w: 50, h: 50 }, alt = "" }) {
    let selectedIcon;

    if (useReactIcon) {
        switch (iconName) {
            case "IoHome":
                selectedIcon = <IoHome />;
                break;
            case "GrCircleInformation":
                selectedIcon = <GrCircleInformation />;
                break;
            case "FaBook":
                selectedIcon = <FaBook />;
                break;
            case "FaPeopleGroup":
                selectedIcon = <FaPeopleGroup />;
                break;
            case "MdAddModerator":
                selectedIcon = <MdAddModerator />;
                break;
            case "FaQuestion":
                selectedIcon = <FaQuestion />;
                break;
            case "FaHammer":
                selectedIcon = <FaHammer />;
                break;
            default:
                selectedIcon = null;
                break;
        }
    } else {
        selectedIcon = <Image src={src} alt={alt} width={size.w} height={size.h} className={className} />;
    }

    return selectedIcon;
}

export default GenericIcon;
