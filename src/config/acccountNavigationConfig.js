import {BsFillPersonLinesFill} from "react-icons/bs"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {FiFileText} from "react-icons/fi"
import {IoHeartCircleOutline} from "react-icons/io5"

export default [
    {
        label: "my account",
        link: "/my-account/edit/profile-information",
        icon: BsFillPersonLinesFill
    },
    {
        label: "orders",
        link: "orders",
        icon: HiOutlineLocationMarker
    },
    {
        label: "address",
        link: "address",
        icon: HiOutlineLocationMarker
    },
    {
        label: "wishlist",
        link: "wishlist",
        icon: IoHeartCircleOutline
    },
    {
        label: "invoices",
        link: "invoices",
        icon: FiFileText
    },
]